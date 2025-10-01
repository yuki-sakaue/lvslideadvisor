import React, { useState } from 'react';
import { 
  Download, 
  Smartphone, 
  Monitor, 
  CheckCircle, 
  AlertCircle, 
  Play,
  FileText,
  Settings,
  Key
} from 'lucide-react';

const InstallationPage = () => {
  const [selectedOS, setSelectedOS] = useState<'windows' | 'mac'>('windows');

  const systemRequirements = {
    windows: [
      'Windows 10 以降',
      'Microsoft PowerPoint 2016 以降',
      'Microsoft 365 (推奨)',
      '.NET Framework 4.7.2 以降',
      '最低 2GB の空き容量'
    ],
    mac: [
      'macOS 10.14 以降',
      'Microsoft PowerPoint for Mac 2016 以降',
      'Microsoft 365 for Mac (推奨)',
      '最低 2GB の空き容量'
    ]
  };

  const windowsSteps = [
    {
      title: 'ダウンロード',
      description: '公式サイトからインストーラーをダウンロードします',
      details: [
        '「Windows版ダウンロード」ボタンをクリック',
        'ダウンロード完了まで待機',
        'ダウンロードファイルの場所を確認'
      ]
    },
    {
      title: 'インストール実行',
      description: 'ダウンロードしたファイルを実行してインストール開始',
      details: [
        'ダウンロードしたファイルを右クリック',
        '「管理者として実行」を選択',
        'ユーザーアカウント制御で「はい」をクリック'
      ]
    },
    {
      title: 'インストール設定',
      description: 'インストール設定を確認・選択します',
      details: [
        'インストール先フォルダの確認',
        'ライセンス規約への同意',
        '「インストール」ボタンをクリック'
      ]
    },
    {
      title: 'PowerPoint再起動',
      description: 'PowerPointを再起動してアドインを有効化',
      details: [
        'PowerPointを完全に終了',
        'PowerPointを再起動',
        'リボンにLVSlideAdvisorタブが表示されることを確認'
      ]
    },
    {
      title: 'ライセンス認証',
      description: 'ライセンスキーまたはアカウントでログイン',
      details: [
        'LVSlideAdvisorタブをクリック',
        '「ログイン」ボタンをクリック',
        'アカウント情報を入力してログイン'
      ]
    }
  ];

  const macSteps = [
    {
      title: 'ダウンロード',
      description: '公式サイトからMac版をダウンロードします',
      details: [
        '「Mac版ダウンロード」ボタンをクリック',
        'ダウンロード完了まで待機',
        'ダウンロードフォルダでファイルを確認'
      ]
    },
    {
      title: 'セキュリティ設定',
      description: 'macOSのセキュリティ設定を確認',
      details: [
        'システム環境設定 > セキュリティとプライバシー',
        '「ダウンロードしたアプリケーションの実行許可」を確認',
        '必要に応じて設定を変更'
      ]
    },
    {
      title: 'インストール実行',
      description: 'インストールパッケージを実行',
      details: [
        'ダウンロードしたファイルをダブルクリック',
        'インストーラーの指示に従って進行',
        '管理者パスワードを入力'
      ]
    },
    {
      title: 'PowerPoint統合',
      description: 'PowerPointでアドインを有効化',
      details: [
        'PowerPointを起動',
        '挿入タブ > アドイン > マイアドイン',
        'LVSlideAdvisorを選択して追加'
      ]
    },
    {
      title: 'ライセンス認証',
      description: 'アカウントでログインして認証完了',
      details: [
        'ホームタブにLVSlideAdvisorボタンが表示されることを確認',
        'ボタンをクリックしてログイン',
        'アカウント情報を入力'
      ]
    }
  ];

  const troubleshooting = [
    {
      problem: 'インストール時に「権限がありません」エラーが表示される',
      solution: 'インストーラーを右クリックして「管理者として実行」を選択してください。',
      icon: AlertCircle
    },
    {
      problem: 'PowerPoint再起動後にタブが表示されない',
      solution: 'PowerPointのアドイン管理から手動でLVSlideAdvisorを有効化してください。',
      icon: AlertCircle
    },
    {
      problem: 'ライセンス認証に失敗する',
      solution: 'インターネット接続を確認し、正しいアカウント情報を入力してください。',
      icon: AlertCircle
    },
    {
      problem: 'アイコンが表示されない・ダウンロードできない',
      solution: 'ファイアウォールやプロキシ設定でアクセスがブロックされている可能性があります。',
      icon: AlertCircle
    }
  ];

  const steps = selectedOS === 'windows' ? windowsSteps : macSteps;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            インストール手順
          </h1>
          <p className="text-xl text-gray-600">
            簡単な手順でLVSlideAdvisorをご利用いただけます
          </p>
        </div>

        {/* OS Selection */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            お使いのOSを選択してください
          </h2>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setSelectedOS('windows')}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedOS === 'windows'
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Monitor className="h-5 w-5 mr-2" />
              Windows
            </button>
            <button
              onClick={() => setSelectedOS('mac')}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedOS === 'mac'
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Smartphone className="h-5 w-5 mr-2" />
              Mac
            </button>
          </div>
        </div>

        {/* System Requirements */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            システム要件
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                必要なソフトウェア
              </h3>
              <ul className="space-y-2">
                {systemRequirements[selectedOS].map((requirement, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                推奨環境
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  高速インターネット接続
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  4GB以上のRAM
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  管理者権限
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Installation Steps */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {selectedOS === 'windows' ? 'Windows' : 'Mac'}版インストール手順
          </h2>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 bg-teal-600 text-white rounded-full font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="ml-6 flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Buttons */}
        <div className="bg-teal-50 rounded-lg p-8 mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ダウンロード
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
              <Download className="h-5 w-5 mr-2" />
              {selectedOS === 'windows' ? 'Windows版' : 'Mac版'}ダウンロード
            </button>
            <button className="bg-white hover:bg-gray-50 text-teal-600 border border-teal-600 px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
              <Play className="h-5 w-5 mr-2" />
              インストール動画を見る
            </button>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            トラブルシューティング
          </h2>
          <div className="space-y-6">
            {troubleshooting.map((item, index) => (
              <div key={index} className="border-l-4 border-yellow-400 pl-6">
                <div className="flex items-start">
                  <item.icon className="h-5 w-5 text-yellow-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {item.problem}
                    </h3>
                    <p className="text-gray-600">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support */}
        <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            サポートが必要ですか？
          </h2>
          <p className="text-gray-300 mb-6">
            インストールでお困りの場合は、お気軽にサポートチームまでご連絡ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors">
              サポートに問い合わせ
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              FAQを見る
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationPage;