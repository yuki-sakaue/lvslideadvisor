import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="h-8 w-8 text-teal-400" />
              <span className="text-xl font-bold">LVSlideAdvisor</span>
            </div>
            <p className="text-gray-300 mb-4">
              Microsoft公認のPowerPoint拡張ツールで、プロフェッショナルな資料作成を効率化します。
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-teal-400" />
                <span className="text-gray-300">info@lvslideadvisor.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-teal-400" />
                <span className="text-gray-300">03-1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-teal-400" />
                <span className="text-gray-300">東京都渋谷区</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">サービス</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-gray-300 hover:text-teal-400 transition-colors">
                  機能紹介
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-teal-400 transition-colors">
                  料金体系
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Enterpriseプラン
                </Link>
              </li>
              <li>
                <Link to="/installation" className="text-gray-300 hover:text-teal-400 transition-colors">
                  インストール手順
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">サポート</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-teal-400 transition-colors">
                  よくあるご質問
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-teal-400 transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-teal-400 transition-colors">
                  利用規約
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-teal-400 transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 LVSlideAdvisor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;