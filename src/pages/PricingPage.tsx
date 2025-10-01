import React from 'react';
import { CheckCircle, X, ArrowRight } from 'lucide-react';

const PricingPage = () => {
  const features = [
    {
      category: '基本機能',
      items: [
        { name: 'アイコン素材', free: '100種類', pro: '1,000種類以上' },
        { name: 'スライドテンプレート', free: '10種類', pro: '100種類以上' },
        { name: 'カラーパレット', free: '固定', pro: 'カスタマイズ可能' },
        { name: 'ショートカット機能', free: true, pro: true },
      ]
    },
    {
      category: 'プロ機能',
      items: [
        { name: '自動整列機能', free: false, pro: true },
        { name: 'Myアイコン登録', free: false, pro: true },
        { name: 'カスタムテンプレート', free: false, pro: true },
        { name: '一括置換機能', free: false, pro: true },
      ]
    },
    {
      category: 'サポート',
      items: [
        { name: 'FAQ', free: true, pro: true },
        { name: 'メールサポート', free: false, pro: true },
        { name: '優先サポート', free: false, pro: true },
        { name: 'チュートリアル動画', free: false, pro: true },
      ]
    }
  ];

  const renderFeatureValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <CheckCircle className="h-5 w-5 text-green-500" />
      ) : (
        <X className="h-5 w-5 text-gray-300" />
      );
    }
    return <span className="text-sm text-gray-700">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            料金体系
          </h1>
          <p className="text-xl text-gray-600">
            シンプルで分かりやすい料金設定
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">無料プラン</h2>
              <div className="text-5xl font-bold text-gray-900 mb-4">
                ¥0<span className="text-xl font-normal text-gray-600">/月</span>
              </div>
              <p className="text-gray-600">基本機能でお試しいただけます</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">基本アイコン 100種類</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">基本テンプレート 10種類</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">基本カラーパレット</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">FAQサポート</span>
              </div>
              <div className="flex items-center">
                <X className="h-5 w-5 text-gray-300 mr-3" />
                <span className="text-gray-400">自動整列機能</span>
              </div>
              <div className="flex items-center">
                <X className="h-5 w-5 text-gray-300 mr-3" />
                <span className="text-gray-400">Myアイコン登録</span>
              </div>
            </div>

            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-medium transition-colors">
              無料で始める
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-teal-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                おすすめ
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Proプラン</h2>
              <div className="text-5xl font-bold text-gray-900 mb-4">
                ¥528<span className="text-xl font-normal text-gray-600">/月</span>
              </div>
              <p className="text-gray-600">税込価格・すべての機能が利用可能</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">プレミアムアイコン 1,000種類以上</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">プロテンプレート 100種類以上</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">カスタムカラーパレット</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">自動整列機能</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Myアイコン登録</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">メールサポート</span>
              </div>
            </div>

            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center">
              14日間無料体験
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900">機能比較表</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-6 font-medium text-gray-900">機能</th>
                  <th className="text-center py-3 px-6 font-medium text-gray-900">無料プラン</th>
                  <th className="text-center py-3 px-6 font-medium text-gray-900">Proプラン</th>
                </tr>
              </thead>
              <tbody>
                {features.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <tr className="bg-gray-100">
                      <td colSpan={3} className="py-3 px-6 font-semibold text-gray-900">
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((item, itemIndex) => (
                      <tr key={itemIndex} className="border-b border-gray-200">
                        <td className="py-3 px-6 text-gray-700">{item.name}</td>
                        <td className="py-3 px-6 text-center">
                          {renderFeatureValue(item.free)}
                        </td>
                        <td className="py-3 px-6 text-center">
                          {renderFeatureValue(item.pro)}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Free Trial Section */}
        <div className="bg-teal-50 rounded-lg p-8 mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            14日間無料体験
          </h3>
          <p className="text-gray-600 mb-6">
            クレジットカードの登録が必要ですが、体験期間中はいつでもキャンセル可能です。
            自動更新される前に通知メールをお送りします。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-teal-600 font-bold text-lg mb-2">STEP 1</div>
              <h4 className="font-semibold text-gray-900 mb-2">アカウント作成</h4>
              <p className="text-sm text-gray-600">メールアドレスとパスワードを入力</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-teal-600 font-bold text-lg mb-2">STEP 2</div>
              <h4 className="font-semibold text-gray-900 mb-2">ダウンロード</h4>
              <p className="text-sm text-gray-600">お使いのOSに合わせてダウンロード</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-teal-600 font-bold text-lg mb-2">STEP 3</div>
              <h4 className="font-semibold text-gray-900 mb-2">インストール</h4>
              <p className="text-sm text-gray-600">簡単なセットアップで即座に利用開始</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            料金に関するよくあるご質問
          </h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">
                無料体験期間中にキャンセルした場合、料金は発生しますか？
              </h4>
              <p className="text-gray-600">
                はい、無料体験期間中にキャンセルされた場合、料金は一切発生いたしません。
                体験期間終了の2日前に確認メールをお送りします。
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">
                支払い方法は何がありますか？
              </h4>
              <p className="text-gray-600">
                クレジットカード（Visa、MasterCard、JCB、American Express）、
                PayPal、銀行振込（法人のみ）に対応しています。
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">
                プランの変更はできますか？
              </h4>
              <p className="text-gray-600">
                はい、いつでもプランの変更が可能です。アップグレードは即座に反映され、
                ダウングレードは次回の請求サイクルから適用されます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;