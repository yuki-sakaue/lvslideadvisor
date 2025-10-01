import React from 'react';
import { 
  FileText, 
  Palette, 
  Layers, 
  Zap, 
  Move, 
  Search,
  Download,
  Settings,
  Bookmark,
  Grid,
  ArrowRight
} from 'lucide-react';

const FeaturesPage = () => {
  const mainFeatures = [
    {
      icon: FileText,
      title: 'アイコン・図形挿入機能',
      description: '著作権フリー・商用フリーのアイコン素材を1,000種類以上収録。カテゴリー別検索でお探しのアイコンを素早く見つけ、ワンクリックで挿入できます。',
      image: '/api/placeholder/400/300',
      features: [
        '1,000種類以上のプロ品質アイコン',
        'カテゴリー別・キーワード検索',
        'ワンクリック挿入',
        '商用利用可能',
        'SVG・PNG形式対応'
      ]
    },
    {
      icon: Layers,
      title: 'スライドテンプレート',
      description: 'ビジネスフレームワーク、グラフ・チャートテンプレート、表紙・目次テンプレートなど、コンサルタントが実際に使用するテンプレートを豊富に収録。',
      image: '/api/placeholder/400/300',
      features: [
        'SWOT分析、3C分析等のフレームワーク',
        '各種グラフ・チャートテンプレート',
        'プロフェッショナルな表紙・目次',
        '業界別テンプレート',
        'カスタマイズ可能なレイアウト'
      ]
    },
    {
      icon: Palette,
      title: 'カラーパレット機能',
      description: '企業ブランドカラーの登録、スライド内カラーの自動抽出、カラーセットの保存など、統一感のあるデザインを実現するカラー管理機能。',
      image: '/api/placeholder/400/300',
      features: [
        '企業ブランドカラー登録',
        'スライド内カラー自動抽出',
        'カラーセット保存・共有',
        'カラーバリエーション生成',
        'アクセシビリティチェック'
      ]
    },
    {
      icon: Move,
      title: '自動整列・補正機能',
      description: 'オブジェクトの自動整列、間隔調整、サイズ統一など、手動では時間のかかる調整作業を自動化。プロ品質のレイアウトを瞬時に実現。',
      image: '/api/placeholder/400/300',
      features: [
        'オブジェクト自動整列',
        '間隔自動調整',
        'サイズ統一機能',
        'グリッド配置',
        '複数オブジェクト一括処理'
      ],
      isPro: true
    }
  ];

  const additionalFeatures = [
    {
      icon: Search,
      title: 'スマート検索',
      description: 'アイコンやテンプレートを自然言語で検索。「会議」「成長」「分析」などのキーワードで関連素材を瞬時に発見。'
    },
    {
      icon: Download,
      title: 'バッチダウンロード',
      description: '複数のアイコンやテンプレートを一括でダウンロード。プロジェクトに必要な素材をまとめて取得できます。'
    },
    {
      icon: Settings,
      title: 'カスタム設定',
      description: 'よく使用するサイズ、色、配置設定を保存。個人の作業スタイルに合わせたカスタマイズが可能。'
    },
    {
      icon: Bookmark,
      title: 'お気に入り管理',
      description: '頻繁に使用するアイコンやテンプレートをお気に入りに登録。素早いアクセスで作業効率を向上。'
    },
    {
      icon: Grid,
      title: 'レイアウトアシスト',
      description: 'スライド上のオブジェクト配置をリアルタイムでガイド。美しいレイアウトを簡単に実現。'
    },
    {
      icon: Zap,
      title: 'ショートカット機能',
      description: 'キーボードショートカットで主要機能に素早くアクセス。マウス操作を最小限に抑えて効率化。'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            機能紹介
          </h1>
          <p className="text-xl text-gray-600">
            プロフェッショナルな資料作成を支援する豊富な機能群
          </p>
        </div>

        {/* Main Features */}
        <div className="space-y-24">
          {mainFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <feature.icon className="h-10 w-10 text-teal-600 mr-4" />
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{feature.title}</h2>
                      {feature.isPro && (
                        <span className="inline-block bg-teal-100 text-teal-800 text-xs font-medium px-2 py-1 rounded-full mt-1">
                          Pro版限定
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.features.map((featureItem, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-teal-600 mr-3" />
                        <span className="text-gray-700">{featureItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="w-full max-w-md">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <feature.icon className="h-20 w-20 text-teal-600 mx-auto mb-4" />
                      <div className="text-center">
                        <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-600">機能デモ画面</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              その他の便利機能
            </h2>
            <p className="text-xl text-gray-600">
              作業効率を更に向上させる補助機能
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Section */}
        <div className="mt-24 bg-white rounded-lg shadow-lg p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              シームレスな統合
            </h2>
            <p className="text-xl text-gray-600">
              既存のワークフローを妨げない設計
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">PowerPoint統合</h3>
              <p className="text-gray-600">
                PowerPointのリボンに直接統合。既存の操作感を保ちながら新機能を利用可能。
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">軽量動作</h3>
              <p className="text-gray-600">
                PowerPointのパフォーマンスに影響しない軽量設計。快適な作業環境を維持。
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">高速レスポンス</h3>
              <p className="text-gray-600">
                クラウドベースの高速検索エンジンで、素材の検索・取得を瞬時に実行。
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-teal-600 rounded-lg p-8 lg:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            今すぐ機能を体験
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            14日間の無料トライアルですべての機能をお試しください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-teal-600 px-8 py-3 rounded-lg text-lg font-medium transition-colors">
              無料トライアル開始
            </button>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg text-lg font-medium transition-colors">
              デモ動画を見る
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;