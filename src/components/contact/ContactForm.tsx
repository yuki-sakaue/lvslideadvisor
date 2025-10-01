import React, { useState } from 'react';
import { Mail, Phone, User, Building, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { validateEmail, validatePhone } from '../../utils/validation';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});
  const [error, setError] = useState('');

  const inquiryTypes = [
    { value: 'general', label: '一般的なお問い合わせ' },
    { value: 'technical', label: '技術的なサポート' },
    { value: 'billing', label: '料金・請求について' },
    { value: 'enterprise', label: '法人契約について' },
    { value: 'feature', label: '機能要望・改善提案' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationErrors({});
    setError('');
    
    // Validation
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) errors.name = 'お名前を入力してください';
    const emailError = validateEmail(formData.email);
    if (emailError) errors.email = emailError;
    const phoneError = validatePhone(formData.phone);
    if (phoneError) errors.phone = phoneError;
    if (!formData.subject.trim()) errors.subject = '件名を入力してください';
    if (!formData.message.trim()) errors.message = 'お問い合わせ内容を入力してください';
    
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch (err) {
      setError('送信に失敗しました。しばらく時間をおいて再度お試しください。');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              お問い合わせを受け付けました
            </h2>
            <p className="text-gray-600 mb-8">
              お問い合わせいただき、ありがとうございます。
              2営業日以内にご返信いたします。
            </p>
            <button
              onClick={() => window.location.href = '/'}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
            >
              トップページに戻る
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            お問い合わせ
          </h1>
          <p className="text-xl text-gray-600">
            ご質問やご要望がございましたら、お気軽にお問い合わせください
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                お問い合わせ先
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-teal-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">メール</h3>
                    <p className="text-gray-600">support@lvslideadvisor.com</p>
                    <p className="text-sm text-gray-500 mt-1">
                      24時間受付・2営業日以内に返信
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-teal-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">電話</h3>
                    <p className="text-gray-600">03-1234-5678</p>
                    <p className="text-sm text-gray-500 mt-1">
                      平日 9:00-18:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageSquare className="h-6 w-6 text-teal-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">チャットサポート</h3>
                    <p className="text-gray-600">リアルタイムサポート</p>
                    <p className="text-sm text-gray-500 mt-1">
                      平日 10:00-17:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-teal-50 rounded-lg">
                <h3 className="font-medium text-teal-900 mb-2">
                  よくあるご質問
                </h3>
                <p className="text-sm text-teal-700">
                  お問い合わせの前に、FAQページもご確認ください。
                  よくある質問と回答を掲載しています。
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {error && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-red-700">{error}</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      お名前 *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`pl-10 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                          validationErrors.name ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="山田 太郎"
                      />
                    </div>
                    {validationErrors.name && (
                      <p className="text-red-600 text-sm mt-1">{validationErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      メールアドレス *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`pl-10 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                          validationErrors.email ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="your@email.com"
                      />
                    </div>
                    {validationErrors.email && (
                      <p className="text-red-600 text-sm mt-1">{validationErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      会社名
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        placeholder="株式会社サンプル"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      電話番号
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`pl-10 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                          validationErrors.phone ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="03-1234-5678"
                      />
                    </div>
                    {validationErrors.phone && (
                      <p className="text-red-600 text-sm mt-1">{validationErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                    お問い合わせ種別 *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    件名 *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                      validationErrors.subject ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="お問い合わせの件名を入力してください"
                  />
                  {validationErrors.subject && (
                    <p className="text-red-600 text-sm mt-1">{validationErrors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    お問い合わせ内容 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                      validationErrors.message ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="詳細な内容をご記入ください"
                  />
                  {validationErrors.message && (
                    <p className="text-red-600 text-sm mt-1">{validationErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  {isLoading ? (
                    '送信中...'
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      お問い合わせを送信
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;