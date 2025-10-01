import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { User, Mail, Bell, Shield, AlertCircle, CheckCircle } from 'lucide-react';
import { validateEmail, validatePassword, getPlanDisplayName } from '../../utils/validation';

const AccountSettings = () => {
  const { user, updateUser, changePassword } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});

  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: user?.emailNotifications || false,
    productUpdates: true,
    securityAlerts: true,
  });

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationErrors({});
    setMessage(null);
    
    // Validation
    const errors: {[key: string]: string} = {};
    if (!profileData.name.trim()) errors.name = 'お名前を入力してください';
    const emailError = validateEmail(profileData.email);
    if (emailError) errors.email = emailError;
    
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setIsLoading(true);
    try {
      await updateUser(profileData);
      setMessage({ type: 'success', text: 'プロフィールを更新しました' });
    } catch (error) {
      setMessage({ type: 'error', text: 'プロフィールの更新に失敗しました' });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationErrors({});
    setMessage(null);
    
    // Validation
    const errors: {[key: string]: string} = {};
    if (!passwordData.currentPassword) errors.currentPassword = '現在のパスワードを入力してください';
    const passwordError = validatePassword(passwordData.newPassword);
    if (passwordError) errors.newPassword = passwordError;
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      errors.confirmPassword = 'パスワードが一致しません';
    }
    
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setIsLoading(true);
    try {
      await changePassword(passwordData.currentPassword, passwordData.newPassword);
      setMessage({ type: 'success', text: 'パスワードを変更しました' });
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (error) {
      setMessage({ type: 'error', text: 'パスワードの変更に失敗しました' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleNotificationUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await updateUser({ emailNotifications: notificationSettings.emailNotifications });
      setMessage({ type: 'success', text: '通知設定を更新しました' });
    } catch (error) {
      setMessage({ type: 'error', text: '通知設定の更新に失敗しました' });
    } finally {
      setIsLoading(false);
    }
  };

  // Clear message when tab changes
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setMessage(null);
    setValidationErrors({});
  };

  const tabs = [
    { id: 'profile', name: 'プロフィール', icon: User },
    { id: 'password', name: 'パスワード', icon: Shield },
    { id: 'notifications', name: '通知設定', icon: Bell },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <div className="px-6 py-4">
              <h1 className="text-2xl font-bold text-gray-900">アカウント設定</h1>
            </div>
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-teal-500 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-5 w-5 mr-2" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {message && (
              <div className={`mb-6 p-4 rounded-lg flex items-center ${
                message.type === 'success' 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-red-50 border border-red-200'
              }`}>
                {message.type === 'success' ? (
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                )}
                <span className={message.type === 'success' ? 'text-green-700' : 'text-red-700'}>
                  {message.text}
                </span>
              </div>
            )}

            {activeTab === 'profile' && (
              <form onSubmit={handleProfileUpdate} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    お名前
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={profileData.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                      validationErrors.name ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {validationErrors.name && (
                    <p className="text-red-600 text-sm mt-1">{validationErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                      validationErrors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {validationErrors.email && (
                    <p className="text-red-600 text-sm mt-1">{validationErrors.email}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                >
                  {isLoading ? '更新中...' : 'プロフィールを更新'}
                </button>
              </form>
            )}

            {activeTab === 'password' && (
              <form onSubmit={handlePasswordChange} className="space-y-6">
                <div>
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-2">
                    現在のパスワード
                  </label>
                  <input
                    type="password"
                    id="currentPassword"
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                      validationErrors.currentPassword ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {validationErrors.currentPassword && (
                    <p className="text-red-600 text-sm mt-1">{validationErrors.currentPassword}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">
                    新しいパスワード
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                      validationErrors.newPassword ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {validationErrors.newPassword && (
                    <p className="text-red-600 text-sm mt-1">{validationErrors.newPassword}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                    新しいパスワード（確認）
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                      validationErrors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {validationErrors.confirmPassword && (
                    <p className="text-red-600 text-sm mt-1">{validationErrors.confirmPassword}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                >
                  {isLoading ? '変更中...' : 'パスワードを変更'}
                </button>
              </form>
            )}

            {activeTab === 'notifications' && (
              <form onSubmit={handleNotificationUpdate} className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">メール通知</h3>
                      <p className="text-sm text-gray-500">重要な更新情報をメールで受け取る</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notificationSettings.emailNotifications}
                      onChange={(e) => setNotificationSettings({ 
                        ...notificationSettings, 
                        emailNotifications: e.target.checked 
                      })}
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">製品アップデート</h3>
                      <p className="text-sm text-gray-500">新機能やアップデート情報を受け取る</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notificationSettings.productUpdates}
                      onChange={(e) => setNotificationSettings({ 
                        ...notificationSettings, 
                        productUpdates: e.target.checked 
                      })}
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">セキュリティアラート</h3>
                      <p className="text-sm text-gray-500">セキュリティに関する重要な通知を受け取る</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notificationSettings.securityAlerts}
                      onChange={(e) => setNotificationSettings({ 
                        ...notificationSettings, 
                        securityAlerts: e.target.checked 
                      })}
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                >
                  {isLoading ? '更新中...' : '通知設定を更新'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;