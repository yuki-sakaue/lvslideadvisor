import React, { useState } from 'react';
import { Bell, CheckCircle, AlertCircle, Info, X, Trash2 } from 'lucide-react';
import { formatDate } from '../../utils/validation';

interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  date: string;
  read: boolean;
}

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'success',
      title: 'プラン変更完了',
      message: 'Proプランへのアップグレードが完了しました。すべての機能をご利用いただけます。',
      date: '2024-01-15',
      read: false,
    },
    {
      id: '2',
      type: 'info',
      title: '新機能リリース',
      message: 'バージョン2.1.0がリリースされました。新しいテンプレートと自動整列機能が追加されています。',
      date: '2024-01-10',
      read: false,
    },
    {
      id: '3',
      type: 'warning',
      title: '請求書発行のお知らせ',
      message: '2024年1月分の請求書を発行いたしました。お支払い期限は1月31日です。',
      date: '2024-01-05',
      read: true,
    },
    {
      id: '4',
      type: 'info',
      title: 'メンテナンス予定',
      message: '1月20日 2:00-4:00にシステムメンテナンスを実施いたします。',
      date: '2024-01-03',
      read: true,
    },
    {
      id: '5',
      type: 'success',
      title: 'アカウント作成完了',
      message: 'LVSlideAdvisorへようこそ！アカウントの作成が完了しました。',
      date: '2024-01-01',
      read: true,
    },
  ]);

  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case 'warning':
        return <AlertCircle className="h-6 w-6 text-yellow-500" />;
      case 'error':
        return <X className="h-6 w-6 text-red-500" />;
      default:
        return <Info className="h-6 w-6 text-blue-500" />;
    }
  };

  const getBgColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      case 'error':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-blue-50 border-blue-200';
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const filteredNotifications = notifications.filter(notification =>
    filter === 'all' || !notification.read
  );

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Bell className="h-8 w-8 text-teal-600 mr-3" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">お知らせ</h1>
                <p className="text-gray-600">
                  {unreadCount > 0 ? `${unreadCount}件の未読通知があります` : 'すべて既読です'}
                </p>
              </div>
            </div>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                すべて既読にする
              </button>
            )}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setFilter('all')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  filter === 'all'
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                すべて ({notifications.length})
              </button>
              <button
                onClick={() => setFilter('unread')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  filter === 'unread'
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                未読 ({unreadCount})
              </button>
            </nav>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                {filter === 'unread' ? '未読の通知はありません' : '通知はありません'}
              </p>
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`bg-white rounded-lg shadow-sm border-l-4 ${getBgColor(notification.type)} ${
                  !notification.read ? 'ring-2 ring-teal-100' : ''
                }`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {getIcon(notification.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {notification.title}
                          </h3>
                          {!notification.read && (
                            <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2 py-1 rounded-full">
                              新着
                            </span>
                          )}
                        </div>
                        <p className="text-gray-700 mb-3">
                          {notification.message}
                        </p>
                        <p className="text-sm text-gray-500">
                          {formatDate(notification.date)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                        >
                          既読にする
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="text-gray-400 hover:text-red-500 p-1"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">通知設定</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">メール通知</h3>
                <p className="text-sm text-gray-500">重要な更新情報をメールで受け取る</p>
              </div>
              <input
                type="checkbox"
                defaultChecked
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
                defaultChecked
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">請求・支払い通知</h3>
                <p className="text-sm text-gray-500">請求書発行や支払いに関する通知を受け取る</p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">マーケティング情報</h3>
                <p className="text-sm text-gray-500">キャンペーンや特別オファーの情報を受け取る</p>
              </div>
              <input
                type="checkbox"
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
            </div>
          </div>
          <button className="mt-6 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
            設定を保存
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;