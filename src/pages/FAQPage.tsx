import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Search, HelpCircle, Download, CreditCard, Settings, AlertCircle, Building } from 'lucide-react';
import { normalizeSearchTerm } from '../utils/validation';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'すべて', icon: HelpCircle },
    { id: 'installation', name: 'インストール', icon: Download },
    { id: 'pricing', name: '料金・支払い', icon: CreditCard },
    { id: 'features', name: '機能について', icon: Settings },
    { id: 'troubleshooting', name: 'トラブル', icon: AlertCircle },
    { id: 'enterprise', name: '法人契約', icon: Building },
  ];

  const faqs = [
    {
      id: 1,
      category: 'installation',
      question: 'LVSlideAdvisorをインストールするにはどうすればよいですか？',
      answer: '公式サイトからお使いのOS（Windows/Mac）に対応したインストーラーをダウンロードし、管理者権限で実行してください。詳細な手順は「インストール手順」ページをご確認ください。',
    },
    {
      id: 2,
      category: 'installation',
      question: 'PowerPointのどのバージョンに対応していますか？',
      answer: 'Windows版はPowerPoint 2016以降、Mac版はPowerPoint for Mac 2016以降に対応しています。Microsoft 365版での利用を推奨します。',
    },
    {
      id: 3,
      category: 'installation',
      question: 'インストール後にPowerPointでタブが表示されません',
      answer: 'PowerPointを完全に終了し、再起動してください。それでも表示されない場合は、ファイル > オプション > アドインから手動でLVSlideAdvisorを有効化してください。',
    },
    {
      id: 4,
      category: 'pricing',
      question: '無料プランと有料プランの違いは何ですか？',
      answer: '無料プランは基本的なアイコン100種類とテンプレート10種類が利用できます。有料プランではプレミアムアイコン1,000種類以上、自動整列機能、Myアイコン登録機能などが追加されます。',
    },
    {
      id: 5,
      category: 'pricing',
      question: '無料体験期間はありますか？',
      answer: 'はい、Proプランを14日間無料でお試しいただけます。体験期間中はすべての機能をご利用いただけます。',
    },
    {
      id: 6,
      category: 'pricing',
      question: '支払い方法を教えてください',
      answer: 'クレジットカード（Visa、MasterCard、JCB、American Express）、PayPal、銀行振込（法人のみ）に対応しています。',
    },
    {
      id: 7,
      category: 'pricing',
      question: 'プランの変更はできますか？',
      answer: 'はい、いつでもプランの変更が可能です。アップグレードは即座に反映され、ダウングレードは次回の請求サイクルから適用されます。',
    },
    {
      id: 8,
      category: 'features',
      question: 'アイコンは商用利用可能ですか？',
      answer: 'はい、LVSlideAdvisorで提供されるすべてのアイコンは商用利用可能です。著作権表示は不要ですが、再配布は禁止されています。',
    },
    {
      id: 9,
      category: 'features',
      question: '自分のアイコンを追加できますか？',
      answer: 'Proプランでは「Myアイコン」機能により、独自のアイコンを登録・管理できます。SVG、PNG形式のファイルをアップロードしてください。',
    },
    {
      id: 10,
      category: 'features',
      question: 'オフラインでも使用できますか？',
      answer: '基本機能はオフラインでも利用できますが、アイコンの検索・ダウンロード、新しいテンプレートの取得にはインターネット接続が必要です。',
    },
    {
      id: 11,
      category: 'features',
      question: 'チーム内でテンプレートを共有できますか？',
      answer: 'Enterpriseプランでは、チーム専用のテンプレートライブラリを作成し、組織内で共有することができます。',
    },
    {
      id: 12,
      category: 'troubleshooting',
      question: 'アイコンがダウンロードできません',
      answer: 'ファイアウォールやプロキシ設定でアクセスがブロックされている可能性があります。IT管理者に確認するか、サポートまでお問い合わせください。',
    },
    {
      id: 13,
      category: 'troubleshooting',
      question: 'PowerPointが重くなりました',
      answer: 'LVSlideAdvisorは軽量設計ですが、多数のアイコンを同時に挿入すると動作が重くなる場合があります。不要なアイコンを削除するか、PowerPointを再起動してください。',
    },
    {
      id: 14,
      category: 'troubleshooting',
      question: 'ライセンス認証に失敗します',
      answer: 'インターネット接続を確認し、正しいアカウント情報を入力してください。それでも失敗する場合は、一度ログアウトしてから再度ログインしてください。',
    },
    {
      id: 15,
      category: 'enterprise',
      question: '法人契約の場合、どのような支払い方法がありますか？',
      answer: '法人契約では、請求書払い、銀行振込、クレジットカード決済をご利用いただけます。年間契約の場合は割引が適用されます。',
    },
    {
      id: 16,
      category: 'enterprise',
      question: '複数のユーザーライセンスを管理できますか？',
      answer: 'はい、Enterpriseプランでは管理者コンソールから複数のユーザーライセンスを一元管理できます。ユーザーの追加・削除、権限設定などが可能です。',
    },
    {
      id: 17,
      category: 'enterprise',
      question: 'SSO（シングルサインオン）に対応していますか？',
      answer: 'Enterpriseプランでは、SAML 2.0およびOIDCによるSSO連携に対応しています。Azure AD、Google Workspace、Oktaなどとの連携が可能です。',
    },
    {
      id: 18,
      category: 'enterprise',
      question: '導入時のサポートはありますか？',
      answer: 'Enterpriseプランでは専任のカスタマーサクセスマネージャーが導入から運用まで一貫してサポートします。オンボーディングトレーニングも提供しています。',
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = React.useMemo(() => {
    return faqs.filter(faq => {
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
      
      if (searchTerm === '') return matchesCategory;
      
      const normalizedSearchTerm = normalizeSearchTerm(searchTerm.toLowerCase());
      const normalizedQuestion = normalizeSearchTerm(faq.question.toLowerCase());
      const normalizedAnswer = normalizeSearchTerm(faq.answer.toLowerCase());
      
      const matchesSearch = normalizedQuestion.includes(normalizedSearchTerm) ||
                           normalizedAnswer.includes(normalizedSearchTerm);
      
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            よくあるご質問
          </h1>
          <p className="text-xl text-gray-600">
            LVSlideAdvisorに関するよくある質問と回答
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="質問内容を検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                カテゴリー
              </h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-teal-100 text-teal-800'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <category.icon className="h-4 w-4 mr-3" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg">
              {filteredFAQs.length === 0 ? (
                <div className="p-8 text-center">
                  <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    検索条件に一致するFAQが見つかりませんでした。
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {filteredFAQs.map((faq) => (
                    <div key={faq.id} className="p-6">
                      <button
                        onClick={() => toggleItem(faq.id)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        {openItems.includes(faq.id) ? (
                          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      {openItems.includes(faq.id) && (
                        <div className="mt-4 pr-8">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-12 bg-teal-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            解決しない問題がありますか？
          </h2>
          <p className="text-gray-600 mb-6">
            お困りの場合は、サポートチームまでお気軽にお問い合わせください。
            専門スタッフが迅速に対応いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              サポートに問い合わせ
            </button>
            <button className="bg-white hover:bg-gray-50 text-teal-600 border border-teal-600 px-6 py-3 rounded-lg font-medium transition-colors">
              チャットサポート
            </button>
          </div>
        </div>

        {/* Popular Resources */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Download className="h-8 w-8 text-teal-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              インストールガイド
            </h3>
            <p className="text-gray-600 mb-4">
              詳細なインストール手順を確認
            </p>
            <button className="text-teal-600 hover:text-teal-700 font-medium">
              ガイドを見る →
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Settings className="h-8 w-8 text-teal-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              機能紹介
            </h3>
            <p className="text-gray-600 mb-4">
              すべての機能を詳しく解説
            </p>
            <button className="text-teal-600 hover:text-teal-700 font-medium">
              機能を見る →
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <CreditCard className="h-8 w-8 text-teal-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              料金プラン
            </h3>
            <p className="text-gray-600 mb-4">
              最適なプランを選択
            </p>
            <button className="text-teal-600 hover:text-teal-700 font-medium">
              プランを見る →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;