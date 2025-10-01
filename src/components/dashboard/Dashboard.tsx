import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { 
  Download, 
  CreditCard, 
  Settings, 
  Bell, 
  FileText, 
  BarChart,
  Crown,
  Calendar
} from 'lucide-react';
import { getPlanDisplayName, formatDate } from '../../utils/validation';

const Dashboard = () => {
  const { user } = useAuth();

  const quickActions = [
    {
      title: 'ソフトウェアダウンロード',
      description: 'LVSlideAdvisorをダウンロード',
      icon: Download,
      link: '/download',
      color: 'bg-blue-500',
    },
    {
      title: 'プラン管理',
      description: 'プランの変更・解約',
      icon: CreditCard,
      link: '/plan-management',
      color: 'bg-green-500',
    },
    {
      title: 'アカウント設定',
      description: '個人情報の編集',
      icon: Settings,
      link: '/account-settings',
      color: 'bg-purple-500',
    },
    {
      title: 'お知らせ',
      description: '最新情報を確認',
      icon: Bell,
      link: '/notifications',
      color: 'bg-orange-500',
    },
  ];

  const stats = [
    {
      title: '利用開始日',
      value: formatDate(user?.createdAt),
      icon: Calendar,
    },
    {
      title: '現在のプラン',
      value: getPlanDisplayName(user?.plan),
      icon: Crown,
    },
    {
      title: 'ダウンロード回数',
      value: '3回',
      icon: Download,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                ダッシュボード
              </h1>
              <p className="text-gray-600">
                こんにちは、{user?.name || 'ゲスト'}さん
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                user?.plan === 'free' 
                  ? 'bg-gray-100 text-gray-800'
                  : user?.plan === 'pro'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-purple-100 text-purple-800'
              }`}>
                {getPlanDisplayName(user?.plan)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add padding top to account for fixed header */}
        <div className="pt-4">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="bg-teal-100 rounded-lg p-3 mr-4">
                  <stat.icon className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">クイックアクション</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.link}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className={`${action.color} rounded-lg w-12 h-12 flex items-center justify-center mb-4`}>
                  <action.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {action.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {action.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">最近のアクティビティ</h2>
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="bg-blue-100 rounded-full p-2 mr-4">
                <Download className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">ソフトウェアをダウンロードしました</p>
                <p className="text-sm text-gray-600">2024年1月15日 14:30</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="bg-green-100 rounded-full p-2 mr-4">
                <CreditCard className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Proプランにアップグレードしました</p>
                <p className="text-sm text-gray-600">2024年1月10日 10:15</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="bg-purple-100 rounded-full p-2 mr-4">
                <Settings className="h-5 w-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">アカウント情報を更新しました</p>
                <p className="text-sm text-gray-600">2024年1月5日 16:45</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;