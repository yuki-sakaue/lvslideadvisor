import React, { useState } from 'react';
import { 
  Building, 
  Users, 
  Shield, 
  HeadphonesIcon, 
  Settings, 
  BarChart, 
  CheckCircle, 
  ArrowRight,
  Mail,
  Phone,
  User
} from 'lucide-react';

const EnterprisePage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    employees: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const enterpriseFeatures = [
    {
      icon: Users,
      title: 'ボリュームディスカウント',
      description: 'ユーザー数に応じた大幅な割引価格でご提供。50ユーザー以上で最大40%割引。',
      details: ['50-99ユーザー: 20%割引', '100-499ユーザー: 30%割引', '500ユーザー以上: 40%割引']
    },
    {
      icon: HeadphonesIcon,
      title: '専任サポート',
      description: '専任のカスタマーサクセスマネージャーが導入から運用まで一貫サポート。',
      details: ['専任担当者の配置', '導入トレーニング', '定期的なフォローアップ', '優先技術サポート']
    },
    {
      icon: Settings,
      title: 'カスタマイズ対応',
      description: '企業独自のテンプレートやアイコンセットの作成・統合をサポート。',
      details: ['企業ブランド対応', 'カスタムテンプレート', '独自アイコンセット', 'ワークフロー連携']
    },
    {
      icon: Shield,
      title: 'エンタープライズセキュリティ',
      description: 'SOC2準拠、SSO連携、監査ログなど企業レベルのセキュリティ機能を提供。',
      details: ['SOC2 Type II準拠', 'SSO連携（SAML/OIDC）', '監査ログ', 'データ暗号化']
    },
    {
      icon: BarChart,
      title: '利用状況分析',
      description: '組織全体の利用状況をダッシュボードで可視化。ROI測定をサポート。',
      details: ['利用状況ダッシュボード', 'ROI分析レポート', 'ユーザー行動分析', '定期レポート配信']
    },
    {
      icon: Building,
      title: '一元管理',
      description: '管理者コンソールでユーザー管理、ライセンス配布、設定管理を一元化。',
      details: ['ユーザー管理', 'ライセンス管理', '設定一元化', 'グループ管理']
    }
  ];

  const caseStudies = [
    {
      company: 'A コンサルティング',
      industry: '経営コンサルティング',
      employees: '200名',
      challenge: 'プレゼンテーション品質の標準化と作成時間の短縮',
      solution: 'カスタムテンプレートの導入と全社員への利用促進',
      results: ['資料作成時間を平均40%短縮', 'クライアント満足度15%向上', '年間500時間のコスト削減'],
      quote: '統一感のある高品質なプレゼンテーションが短時間で作成できるようになり、コンサルタントの生産性が大幅に向上しました。'
    },
    {
      company: 'B テクノロジー',
      industry: 'IT・ソフトウェア',
      employees: '150名',
      challenge: '営業資料の品質向上と作成工数削減',
      solution: '営業チーム向けカスタムアイコンセットとテンプレートの提供',
      results: ['営業資料作成時間30%削減', '提案書の視覚的品質向上', '受注率12%向上'],
      quote: '技術的な内容を分かりやすく伝える資料が効率的に作成でき、顧客への提案力が向上しました。'
    },
    {
      company: 'C ファイナンシャル',
      industry: '金融・保険',
      employees: '500名',
      challenge: 'コンプライアンス遵守と資料品質の標準化',
      solution: 'ブランドガイドライン準拠のテンプレートとガバナンス機能の活用',
      results: ['ブランド準拠率100%達成', '資料レビュー時間50%短縮', '規制要件への対応力向上'],
      quote: '規制の厳しい金融業界において、コンプライアンスを保ちながら効率的な資料作成が実現できています。'
    }
  ];

  const stats = [
    { number: '500+', label: '導入企業数' },
    { number: '50,000+', label: 'アクティブユーザー' },
    { number: '99.9%', label: 'サービス稼働率' },
    { number: '24/7', label: 'サポート体制' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Enterpriseプラン
          </h1>
          <p className="text-xl text-gray-600">
            大規模組織向けの包括的なソリューション
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enterprise Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise専用機能
            </h2>
            <p className="text-xl text-gray-600">
              大企業のニーズに応える専用機能とサービス
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <feature.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              導入事例
            </h2>
            <p className="text-xl text-gray-600">
              様々な業界での成功事例をご紹介
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <Building className="h-6 w-6 text-teal-600 mr-2" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {study.company}
                      </h3>
                      <span className="ml-4 text-sm text-gray-600">
                        {study.industry} | {study.employees}
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">課題</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">ソリューション</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">成果</h4>
                        <ul className="space-y-1">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-gray-600">
                              <ArrowRight className="h-4 w-4 text-teal-600 mr-2" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">お客様の声</h4>
                    <blockquote className="text-gray-700 italic">
                      "{study.quote}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              お問い合わせ
            </h2>
            <p className="text-xl text-gray-600">
              Enterprise導入のご相談・デモのご依頼はこちら
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                お気軽にご相談ください
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-teal-600 mr-3" />
                  <span className="text-gray-700">03-1234-5678</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-teal-600 mr-3" />
                  <span className="text-gray-700">enterprise@lvslideadvisor.com</span>
                </div>
                <div className="flex items-start">
                  <Building className="h-5 w-5 text-teal-600 mr-3 mt-1" />
                  <div className="text-gray-700">
                    <p>平日 9:00-18:00</p>
                    <p>土日祝日・年末年始を除く</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-teal-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">
                  無料デモ・相談会実施中
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 貴社の課題に合わせたカスタムデモ</li>
                  <li>• 導入プロセスと費用のご説明</li>
                  <li>• ROI試算とコスト削減効果の分析</li>
                  <li>• 他社事例のご紹介</li>
                </ul>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                  会社名 *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                  ご担当者名 *
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  required
                  value={formData.contactName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
                  従業員数
                </label>
                <select
                  id="employees"
                  name="employees"
                  value={formData.employees}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="">選択してください</option>
                  <option value="1-49">1-49名</option>
                  <option value="50-99">50-99名</option>
                  <option value="100-499">100-499名</option>
                  <option value="500-999">500-999名</option>
                  <option value="1000+">1000名以上</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="ご質問やご要望をお聞かせください"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
              >
                お問い合わせを送信
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterprisePage;