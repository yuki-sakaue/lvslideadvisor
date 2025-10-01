import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Download, Monitor, Smartphone, CheckCircle, AlertCircle } from 'lucide-react';
import { getPlanDisplayName } from '../../utils/validation';

const DownloadPage = () => {
  const { user } = useAuth();
  const [selectedOS, setSelectedOS] = useState<'windows' | 'mac'>('windows');
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState('');

  const handleDownload = (os: 'windows' | 'mac') => {
    setIsDownloading(true);
    setDownloadError('');
    
    // Simulate download process
    setTimeout(() => {
      try {
        // In a real app, this would trigger the actual download
        const filename = os === 'windows' ? 'LVSlideAdvisor-Setup.exe' : 'LVSlideAdvisor-Setup.dmg';
        console.log(`Downloading ${filename}...`);
        
        setDownloadStarted(true);
        setIsDownloading(false);
        
        // Hide success message after 5 seconds
        setTimeout(() => setDownloadStarted(false), 5000);
      } catch (error) {
        setDownloadError('ダウンロードに失敗しました。しばらく時間をおいて再度お試しください。');
        setIsDownloading(false);
      }
    }, 2000);
  };

  const downloadOptions = [
    {
      os: 'windows' as const,
      name: 'Windows版',
      icon: Monitor,
      requirements: [
        'Windows 10 以降',
        'Microsoft PowerPoint 2016 以降',
        '.NET Framework 4.7.2 以降',
      ],
      filename: 'LVSlideAdvisor-Setup.exe',
      size: '45.2 MB',
    },
    {
      os: 'mac' as const,
      name: 'Mac版',
      icon: Smartphone,
      requirements: [
        'macOS 10.14 以降',
        'Microsoft PowerPoint for Mac 2016 以降',
        '64bit Intel または Apple Silicon',
      ],
      filename: 'LVSlideAdvisor-Setup.dmg',
      size: '52.8 MB',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">ソフトウェアダウンロード</h1>
          <p className="text-gray-600 mt-2">
            お使いのOSに対応したLVSlideAdvisorをダウンロードしてください
          </p>
        </div>

        {/* Plan Status */}
        <div className={`mb-8 p-4 rounded-lg border ${
          user?.plan === 'free' 
            ? 'bg-yellow-50 border-yellow-200' 
            : 'bg-green-50 border-green-200'
        }`}>
          <div className="flex items-center">
            {user?.plan === 'free' ? (
              <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
            ) : (
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
            )}
            <span className={user?.plan === 'free' ? 'text-yellow-800' : 'text-green-800'}>
              {user?.plan === 'free' 
                ? '無料プランでは基本機能のみご利用いただけます' 
                : 'すべての機能をご利用いただけます'
              }
            </span>
          </div>
        </div>

        {/* Download Success Message */}
        {downloadStarted && (
          <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center">
              <Download className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-800">ダウンロードを開始しました</span>
            </div>
          </div>
        )}
        
        {/* Download Error Message */}
        {downloadError && (
          <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
              <span className="text-red-800">{downloadError}</span>
            </div>
          </div>
        )}

        {/* OS Selection */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            お使いのOSを選択してください
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloadOptions.map((option) => (
              <div
                key={option.os}
                className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                  selectedOS === option.os
                    ? 'border-teal-500 bg-teal-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedOS(option.os)}
              >
                <div className="flex items-center mb-4">
                  <option.icon className="h-8 w-8 text-gray-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {option.name}
                  </h3>
                </div>
                
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">システム要件:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {option.requirements.map((req, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>ファイル名: {option.filename}</span>
                  <span>サイズ: {option.size}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Button */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {selectedOS === 'windows' ? 'Windows版' : 'Mac版'}をダウンロード
            </h2>
            <p className="text-gray-600 mb-6">
              最新バージョン v2.1.0 (2024年1月15日リリース)
            </p>
            <button
              onClick={() => handleDownload(selectedOS)}
              disabled={isDownloading}
              className="bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
            >
              <Download className="h-5 w-5 mr-2" />
              {isDownloading ? 'ダウンロード中...' : 'ダウンロード開始'}
            </button>
          </div>
        </div>

        {/* Installation Guide */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            インストール手順
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                1
              </div>
              <div>
                <h3 className="font-medium text-gray-900">ダウンロードしたファイルを実行</h3>
                <p className="text-gray-600 text-sm">
                  {selectedOS === 'windows' 
                    ? '管理者権限で実行してください' 
                    : 'セキュリティ設定で実行を許可してください'
                  }
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                2
              </div>
              <div>
                <h3 className="font-medium text-gray-900">インストールウィザードに従って進行</h3>
                <p className="text-gray-600 text-sm">
                  ライセンス規約に同意し、インストール先を選択してください
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                3
              </div>
              <div>
                <h3 className="font-medium text-gray-900">PowerPointを再起動</h3>
                <p className="text-gray-600 text-sm">
                  インストール完了後、PowerPointを再起動してアドインを有効化してください
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                4
              </div>
              <div>
                <h3 className="font-medium text-gray-900">ライセンス認証</h3>
                <p className="text-gray-600 text-sm">
                  アカウント情報でログインして、ライセンスを有効化してください
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            インストールでお困りの場合は、サポートチームまでお気軽にお問い合わせください。
          </p>
          <div className="space-x-4">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-medium transition-colors">
              インストールガイドを見る
            </button>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-medium transition-colors">
              サポートに問い合わせ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;