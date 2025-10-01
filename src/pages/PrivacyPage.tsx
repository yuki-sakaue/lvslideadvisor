import React from 'react';
import { Shield, Calendar, Lock, Eye, Database, UserCheck } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-12">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              プライバシーポリシー
            </h1>
            <div className="flex items-center justify-center text-gray-600">
              <Calendar className="h-4 w-4 mr-2" />
              <span>最終更新日: 2024年1月1日</span>
            </div>
          </div>

          <div className="prose max-w-none">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <Lock className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    個人情報保護への取り組み
                  </h3>
                  <p className="text-blue-800">
                    株式会社LVSlideAdvisorは、お客様の個人情報の保護を重要な責務と考え、
                    個人情報保護法および関連法令を遵守し、適切な取り扱いに努めています。
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 個人情報の定義</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 個人情報の収集方法</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社は、個人情報を収集する際は、適法かつ公正な手段により、以下の方法で収集いたします。
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>会員登録時にお客様が入力される情報</li>
                <li>お問い合わせフォームから送信される情報</li>
                <li>サービス利用時に自動的に収集される情報（IPアドレス、Cookie等）</li>
                <li>アンケートやキャンペーンへの参加時に提供される情報</li>
                <li>カスタマーサポートとのやり取りで提供される情報</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 個人情報の利用目的</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社は、お客様の個人情報を以下の目的で利用いたします。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <UserCheck className="h-5 w-5 text-teal-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">サービス提供</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• アカウント管理</li>
                    <li>• ライセンス認証</li>
                    <li>• ソフトウェアの提供</li>
                    <li>• 技術サポート</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Eye className="h-5 w-5 text-teal-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">コミュニケーション</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• お問い合わせ対応</li>
                    <li>• 重要なお知らせ</li>
                    <li>• アップデート通知</li>
                    <li>• マーケティング情報</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Database className="h-5 w-5 text-teal-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">サービス改善</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 利用状況分析</li>
                    <li>• 品質向上</li>
                    <li>• 新機能開発</li>
                    <li>• 統計データ作成</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Shield className="h-5 w-5 text-teal-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">法的対応</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 法令遵守</li>
                    <li>• 不正利用防止</li>
                    <li>• 紛争解決</li>
                    <li>• 権利保護</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 個人情報の第三者提供</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社は、以下の場合を除いて、あらかじめお客様の同意を得ることなく、第三者に個人情報を提供することはありません。
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難である場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難である場合</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 個人情報の委託</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社は、利用目的の達成に必要な範囲において、個人情報の取扱いの全部または一部を第三者に委託することがあります。この場合、委託先の選定を適切に行い、委託契約等において個人情報の適切な取扱いを求めるとともに、適切な監督を行います。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. 個人情報の開示・訂正・削除</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                お客様は、当社の保有する自己の個人情報について、開示、訂正、追加、削除、利用停止、消去および第三者提供の停止を希望される場合には、本人確認を実施した上で、合理的な範囲ですみやかに対応いたします。
              </p>
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <h4 className="font-semibold text-teal-900 mb-2">お問い合わせ先</h4>
                <p className="text-teal-800 text-sm">
                  個人情報に関するお問い合わせは、以下までご連絡ください。<br />
                  メール: privacy@lvslideadvisor.com<br />
                  電話: 03-1234-5678（平日 9:00-18:00）
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. 個人情報の安全管理</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社は、個人情報の漏洩、滅失または毀損の防止および是正のため、必要かつ適切な安全管理措置を講じます。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">技術的安全管理措置</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• SSL/TLS暗号化通信</li>
                    <li>• ファイアウォール設置</li>
                    <li>• アクセス制御</li>
                    <li>• 定期的なセキュリティ監査</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">物理的安全管理措置</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 入退室管理</li>
                    <li>• 機器の盗難防止</li>
                    <li>• 清机清画の徹底</li>
                    <li>• 機器の適切な廃棄</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookie等の利用</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社は、お客様により良いサービスを提供するため、Cookie及びこれに類する技術を利用することがあります。これらの技術は、お客様がサイトを再訪問された際の利便性向上やサイト利用状況の統計的な把握等に利用されます。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookieの受け入れを希望されない場合は、ブラウザの設定でCookieを無効にすることができますが、一部のサービス機能が制限される場合があります。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. アクセス解析ツール</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社は、サービスの利用状況を把握し、サービス向上に役立てるため、Google Analyticsなどのアクセス解析ツールを利用しています。これらのツールはCookieを使用してデータを収集しますが、個人を特定する情報は含まれません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. 個人情報の保存期間</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社は、個人情報を利用目的の達成に必要な期間に限り保存し、その後は適切に削除または匿名化いたします。ただし、法令により保存が義務付けられている場合は、当該期間中保存いたします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. 未成年者の個人情報</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社は、未成年者から個人情報を収集する場合、保護者の同意を得た上で収集いたします。未成年者の個人情報については、特に慎重に取り扱います。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. プライバシーポリシーの変更</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社は、必要に応じて本プライバシーポリシーを変更することがあります。重要な変更については、サイト上での告知やメール等により、お客様にお知らせいたします。
              </p>
            </section>

            <div className="bg-gray-50 rounded-lg p-6 mt-12">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-teal-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  お問い合わせ窓口
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                本プライバシーポリシーに関するご質問、個人情報の取扱いに関するお問い合わせは、以下までご連絡ください。
              </p>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>株式会社LVSlideAdvisor 個人情報保護責任者</strong></p>
                <p>住所: 〒150-0001 東京都渋谷区神宮前1-1-1</p>
                <p>メール: privacy@lvslideadvisor.com</p>
                <p>電話: 03-1234-5678</p>
                <p>受付時間: 平日 9:00-18:00（土日祝日・年末年始を除く）</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;