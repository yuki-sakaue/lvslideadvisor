import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  CheckCircle, 
  X, 
  CreditCard, 
  AlertTriangle, 
  Plus,
  Calendar,
  Shield,
  ArrowLeft
} from 'lucide-react';
import { 
  validateCardNumber, 
  validateExpiryDate, 
  validateCVV, 
  validateCardholderName,
  getPlanDisplayName 
} from '../../utils/validation';

const PlanManagement = () => {
  const { user, updateUser } = useAuth();
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showDowngradeModal, setShowDowngradeModal] = useState(false);
  const [targetPlan, setTargetPlan] = useState<string>('');
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    billingAddress: '',
    city: '',
    postalCode: '',
    country: 'JP',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});
  const [paymentError, setPaymentError] = useState('');

  // Mock payment method - in real app this would come from user data
  const hasPaymentMethod = user?.paymentMethod || false;

  const plans = [
    {
      id: 'free',
      name: '無料プラン',
      price: '¥0',
      period: '/月',
      features: [
        '基本アイコン 100種類',
        '基本テンプレート 10種類',
        'FAQサポート',
      ],
      limitations: [
        '自動整列機能',
        'Myアイコン登録',
        'メールサポート',
      ],
    },
    {
      id: 'pro',
      name: 'Proプラン',
      price: '¥528',
      period: '/月（税込）',
      features: [
        'プレミアムアイコン 1,000種類以上',
        'プロテンプレート 100種類以上',
        'カスタムカラーパレット',
        '自動整列機能',
        'Myアイコン登録',
        'メールサポート',
      ],
      limitations: [],
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterpriseプラン',
      price: 'お問い合わせ',
      period: '',
      features: [
        'すべてのPro機能',
        '専任サポート',
        'カスタマイズ対応',
        'SSO連携',
        '利用状況分析',
        '一元管理',
      ],
      limitations: [],
    },
  ];

  const handlePlanChange = async (planId: string) => {
    if (planId === 'enterprise') {
      // Redirect to contact page for enterprise
      window.location.href = '/contact';
      return;
    }
    
    // Check if it's a downgrade
    const currentPlanValue = user?.plan === 'pro' ? 1 : user?.plan === 'enterprise' ? 2 : 0;
    const targetPlanValue = planId === 'pro' ? 1 : planId === 'enterprise' ? 2 : 0;
    
    if (targetPlanValue < currentPlanValue) {
      setTargetPlan(planId);
      setShowDowngradeModal(true);
      return;
    }
    
    if (planId !== 'free' && !hasPaymentMethod) {
      setTargetPlan(planId);
      setShowPaymentModal(true);
      return;
    }

    try {
      await updateUser({ plan: planId as 'free' | 'pro' | 'enterprise' });
      alert(`${getPlanDisplayName(planId)}に変更しました`);
    } catch (error) {
      alert('プラン変更に失敗しました');
    }
  };

  const handleConfirmDowngrade = async () => {
    try {
      await updateUser({ plan: targetPlan as 'free' | 'pro' | 'enterprise' });
      setShowDowngradeModal(false);
      alert(`${getPlanDisplayName(targetPlan)}に変更しました`);
    } catch (error) {
      alert('プラン変更に失敗しました');
    }
  };

  const handlePaymentInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Format card number
    if (name === 'cardNumber') {
      const formatted = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      setPaymentData({ ...paymentData, [name]: formatted });
      return;
    }
    
    // Format expiry date
    if (name === 'expiryDate') {
      const formatted = value.replace(/\D/g, '').replace(/(\d{2})(\d{2})/, '$1/$2');
      setPaymentData({ ...paymentData, [name]: formatted });
      return;
    }
    
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationErrors({});
    setPaymentError('');
    
    // Validation
    const errors: {[key: string]: string} = {};
    
    const cardholderError = validateCardholderName(paymentData.cardholderName);
    if (cardholderError) errors.cardholderName = cardholderError;
    
    const cardNumberError = validateCardNumber(paymentData.cardNumber);
    if (cardNumberError) errors.cardNumber = cardNumberError;
    
    const expiryError = validateExpiryDate(paymentData.expiryDate);
    if (expiryError) errors.expiryDate = expiryError;
    
    const cvvError = validateCVV(paymentData.cvv);
    if (cvvError) errors.cvv = cvvError;
    
    if (!paymentData.billingAddress.trim()) errors.billingAddress = '請求先住所を入力してください';
    if (!paymentData.city.trim()) errors.city = '市区町村を入力してください';
    if (!paymentData.postalCode.trim()) errors.postalCode = '郵便番号を入力してください';
    
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Update user with payment method
      await updateUser({ 
        paymentMethod: true,
        plan: targetPlan as 'free' | 'pro' | 'enterprise' || 'pro'
      });
      
      setShowPaymentModal(false);
      alert(`決済情報を登録し、${getPlanDisplayName(targetPlan || 'pro')}に変更しました`);
    } catch (error) {
      setPaymentError('決済情報の登録に失敗しました。入力内容をご確認ください。');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCancelSubscription = async () => {
    try {
      await updateUser({ plan: 'free' });
      setShowCancelModal(false);
      alert('プランを解約しました');
    } catch (error) {
      alert('解約処理に失敗しました');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">プラン管理</h1>
          <p className="text-gray-600 mt-2">
            現在のプラン: <span className="font-semibold">{
              getPlanDisplayName(user?.plan)
            }</span>
          </p>
        </div>

        {/* Payment Method Warning */}
        {!hasPaymentMethod && user?.plan !== 'free' && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
              <div>
                <h3 className="font-medium text-yellow-800">決済情報が未設定です</h3>
                <p className="text-sm text-yellow-700 mt-1">
                  有料プランを継続するには決済情報の登録が必要です。
                </p>
              </div>
              <button
                onClick={() => setShowPaymentModal(true)}
                className="ml-auto bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                決済情報を登録
              </button>
            </div>
          </div>
        )}

        {/* Current Plan Status */}
        {user?.plan !== 'free' && hasPaymentMethod && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">現在の契約状況</h2>
                <p className="text-gray-600 mt-1">次回請求日: 2024年2月15日</p>
              </div>
              <div className="flex space-x-4">
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium transition-colors">
                  請求履歴
                </button>
                <button
                  onClick={() => setShowCancelModal(true)}
                  className="bg-red-100 hover:bg-red-200 text-red-800 px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  解約する
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Plan Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-lg shadow-sm p-8 relative ${
                plan.popular ? 'ring-2 ring-teal-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    おすすめ
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-1">
                  {plan.price}
                  <span className="text-lg font-normal text-gray-600">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
                {plan.limitations.map((limitation, index) => (
                  <li key={index} className="flex items-center">
                    <X className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                    <span className="text-gray-400">{limitation}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePlanChange(plan.id)}
                disabled={user?.plan === plan.id}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  user?.plan === plan.id
                    ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                    : plan.id === 'free'
                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    : 'bg-teal-600 hover:bg-teal-700 text-white'
                }`}
              >
                {user?.plan === plan.id
                  ? '現在のプラン'
                  : plan.id === 'free'
                  ? 'ダウングレード'
                  : plan.id === 'enterprise'
                  ? 'お問い合わせ'
                  : 'アップグレード'
                }
              </button>
            </div>
          ))}
        </div>

        {/* Payment Method */}
        {hasPaymentMethod && (
          <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">支払い方法</h2>
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <CreditCard className="h-6 w-6 text-gray-400 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">**** **** **** 1234</p>
                  <p className="text-sm text-gray-600">有効期限: 12/25</p>
                </div>
              </div>
              <button 
                onClick={() => setShowPaymentModal(true)}
                className="text-teal-600 hover:text-teal-500 font-medium"
              >
                変更
              </button>
            </div>
          </div>
        )}

        {/* Payment Method Registration Modal */}
        {showPaymentModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full max-h-screen overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">決済情報の登録</h2>
                  <button
                    onClick={() => setShowPaymentModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <Shield className="h-5 w-5 text-teal-600 mr-2" />
                    <h3 className="font-semibold text-teal-900">安全な決済</h3>
                  </div>
                  <p className="text-sm text-teal-800">
                    すべての決済情報はSSL暗号化により保護されています。
                  </p>
                </div>
                
                {paymentError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                      <span className="text-red-800">{paymentError}</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handlePaymentSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="cardholderName" className="block text-sm font-medium text-gray-700 mb-2">
                      カード名義人
                    </label>
                    <input
                      id="cardholderName"
                      name="cardholderName"
                      type="text"
                      required
                      value={paymentData.cardholderName}
                      onChange={handlePaymentInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                        validationErrors.cardholderName ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="YAMADA TARO"
                    />
                    {validationErrors.cardholderName && (
                      <p className="text-red-600 text-sm mt-1">{validationErrors.cardholderName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      カード番号
                    </label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        id="cardNumber"
                        name="cardNumber"
                        type="text"
                        required
                        value={paymentData.cardNumber}
                        onChange={handlePaymentInputChange}
                        maxLength={19}
                        className={`pl-10 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                          validationErrors.cardNumber ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                   {validationErrors.cardNumber && (
                     <p className="text-red-600 text-sm mt-1">{validationErrors.cardNumber}</p>
                   )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-2">
                        有効期限
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          id="expiryDate"
                          name="expiryDate"
                          type="text"
                          required
                          value={paymentData.expiryDate}
                          onChange={handlePaymentInputChange}
                          maxLength={5}
                          className={`pl-10 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                            validationErrors.expiryDate ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="MM/YY"
                        />
                      </div>
                     {validationErrors.expiryDate && (
                       <p className="text-red-600 text-sm mt-1">{validationErrors.expiryDate}</p>
                     )}
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        id="cvv"
                        name="cvv"
                        type="text"
                        required
                        value={paymentData.cvv}
                        onChange={handlePaymentInputChange}
                        maxLength={4}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                          validationErrors.cvv ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="123"
                      />
                     {validationErrors.cvv && (
                       <p className="text-red-600 text-sm mt-1">{validationErrors.cvv}</p>
                     )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="billingAddress" className="block text-sm font-medium text-gray-700 mb-2">
                      請求先住所
                    </label>
                    <input
                      id="billingAddress"
                      name="billingAddress"
                      type="text"
                      required
                      value={paymentData.billingAddress}
                      onChange={handlePaymentInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                        validationErrors.billingAddress ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="東京都渋谷区神宮前1-1-1"
                    />
                   {validationErrors.billingAddress && (
                     <p className="text-red-600 text-sm mt-1">{validationErrors.billingAddress}</p>
                   )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                        市区町村
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        required
                        value={paymentData.city}
                        onChange={handlePaymentInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                          validationErrors.city ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="渋谷区"
                      />
                     {validationErrors.city && (
                       <p className="text-red-600 text-sm mt-1">{validationErrors.city}</p>
                     )}
                    </div>
                    <div>
                      <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-2">
                        郵便番号
                      </label>
                      <input
                        id="postalCode"
                        name="postalCode"
                        type="text"
                        required
                        value={paymentData.postalCode}
                        onChange={handlePaymentInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                          validationErrors.postalCode ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="150-0001"
                      />
                     {validationErrors.postalCode && (
                       <p className="text-red-600 text-sm mt-1">{validationErrors.postalCode}</p>
                     )}
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowPaymentModal(false)}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium transition-colors"
                    >
                      キャンセル
                    </button>
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="flex-1 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                    >
                      {isProcessing ? '処理中...' : '登録する'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Downgrade Confirmation Modal */}
        {showDowngradeModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-yellow-500 mr-3" />
                <h2 className="text-xl font-bold text-gray-900">プランのダウングレード</h2>
              </div>
              <p className="text-gray-600 mb-6">
                {getPlanDisplayName(targetPlan)}にダウングレードすると、一部の機能が利用できなくなります。
                よろしいですか？
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowDowngradeModal(false)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium transition-colors"
                >
                  キャンセル
                </button>
                <button
                  onClick={handleConfirmDowngrade}
                  className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                >
                  ダウングレード
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Cancel Modal */}
        {showCancelModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
                <h2 className="text-xl font-bold text-gray-900">プランの解約</h2>
              </div>
              <p className="text-gray-600 mb-6">
                プランを解約すると、次回請求日以降は無料プランに変更されます。
                プレミアム機能は利用できなくなりますが、よろしいですか？
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowCancelModal(false)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium transition-colors"
                >
                  キャンセル
                </button>
                <button
                  onClick={handleCancelSubscription}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                >
                  解約する
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanManagement;