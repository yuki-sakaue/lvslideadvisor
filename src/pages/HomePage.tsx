import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Palette, 
  Layers, 
  Zap, 
  Users, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Star,
  Play
} from 'lucide-react';

const HomePage = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    if (elements.length > 0) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
            }
          });
        },
        { threshold: 0.1 }
      );

      elements.forEach((el) => observerRef.current?.observe(el));
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const features = [
    {
      icon: FileText,
      title: 'スライドテンプレート挿入',
      description: 'ビジネスフレームワークやチャートテンプレートを瞬時に挿入できます。',
    },
    {
      icon: Palette,
      title: 'アイコン・図形挿入',
      description: '1,000種類以上の商用フリーアイコンをワンクリックで挿入。',
    },
    {
      icon: Layers,
      title: 'カラーパレット機能',
      description: '企業ブランドカラーを登録し、統一感のあるデザインを実現。',
    },
  ];

  const testimonials = [
    {
      name: '田中 太郎',
      role: '戦略コンサルタント',
      company: 'ABC Consulting',
      comment: '資料作成時間が50%短縮されました。クライアントからの評価も向上しています。',
      rating: 5,
    },
    {
      name: '佐藤 花子',
      role: '企画部長',
      company: 'XYZ Corporation',
      comment: 'テンプレートの品質が高く、プロフェッショナルな資料が簡単に作成できます。',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-hero-gradient bg-geometric-pattern min-h-screen flex items-center overflow-hidden">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/20 rotate-45"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-white/20 rotate-12"></div>
          <div className="absolute bottom-40 left-1/4 w-16 h-16 border-2 border-white/20 rotate-45"></div>
          <div className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-white/20 rotate-12"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AIにはできない<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                プロの仕事
              </span>の生産性を高める
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Microsoft 365 Copilotの価値を更に高める<br />
              Microsoft公認の資料作成ツール
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/features"
                className="group bg-electric-blue hover:bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 inline-flex items-center justify-center"
              >
                機能を見る
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-dark-navy px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center"
              >
                プランを見る
              </Link>
            </div>
          </div>
          
          {/* Product Preview */}
          <div className="mt-20 animate-on-scroll">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto border border-white/20">
              <div className="bg-gray-800/50 px-6 py-3 flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-300 text-sm ml-4">Microsoft PowerPoint</span>
              </div>
              <div className="h-80 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center relative">
                <div className="text-center">
                  <FileText className="h-20 w-20 text-electric-blue mx-auto mb-6" />
                  <p className="text-gray-600 text-lg font-medium">LVSlideAdvisor 拡張機能</p>
                  <div className="mt-4 flex items-center justify-center">
                    <Play className="h-6 w-6 text-electric-blue mr-2" />
                    <span className="text-electric-blue font-medium">デモを見る</span>
                  </div>
                </div>
                {/* Floating UI Elements */}
                <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3 animate-bounce">
                  <Palette className="h-6 w-6 text-electric-blue" />
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 animate-bounce" style={{animationDelay: '0.5s'}}>
                  <Layers className="h-6 w-6 text-electric-blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Diagonal Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white transform origin-bottom-left -skew-y-1"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-navy mb-6">
              主要機能
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              外資系コンサルタントのノウハウを詰め込んだ機能群
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group text-center animate-on-scroll" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300 group-hover:shadow-xl">
                  <feature.icon className="h-10 w-10 text-electric-blue" />
                </div>
                <h3 className="text-2xl font-bold text-dark-navy mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Diagonal Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-light-gray-bg transform origin-bottom-right skew-y-1"></div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-24 bg-light-gray-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-navy mb-6">
              シンプルな料金体系
            </h2>
            <p className="text-xl text-gray-600">
              14日間の無料トライアル付き
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl shadow-xl p-8 animate-on-scroll hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-dark-navy mb-4">無料プラン</h3>
                <div className="text-5xl font-bold text-dark-navy mb-4">
                  ¥0<span className="text-xl font-normal text-gray-600">/月</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">基本アイコン 100種類</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">基本テンプレート 10種類</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">FAQサポート</span>
                </li>
              </ul>
              <Link
                to="/register"
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-4 px-6 rounded-full font-medium transition-all duration-300 hover:shadow-lg block text-center"
              >
                無料で始める
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-electric-blue relative animate-on-scroll hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" style={{animationDelay: '0.2s'}}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-electric-blue text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                  おすすめ
                </div>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-dark-navy mb-4">Proプラン</h3>
                <div className="text-5xl font-bold text-dark-navy mb-4">
                  ¥528<span className="text-xl font-normal text-gray-600">/月</span>
                </div>
                <p className="text-sm text-gray-600">税込価格</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">プレミアムアイコン 1,000種類以上</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">プロテンプレート 100種類以上</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">自動整列機能</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">メールサポート</span>
                </li>
              </ul>
              <Link
                to="/register"
                className="w-full bg-electric-blue hover:bg-blue-600 text-white py-4 px-6 rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-0.5 block text-center"
              >
                14日間無料体験
              </Link>
            </div>
          </div>

          <div className="text-center mt-16 animate-on-scroll">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                資料請求
              </Link>
              <Link
                to="/pricing"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                詳細な料金を見る
              </Link>
            </div>
          </div>
        </div>
        
        {/* Diagonal Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white transform origin-bottom-left -skew-y-1"></div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-navy mb-6">
              お客様の声
            </h2>
            <p className="text-xl text-gray-600">
              多くのプロフェッショナルにご利用いただいています
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl animate-on-scroll hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center">
                  <div className="bg-electric-blue/10 rounded-full w-14 h-14 flex items-center justify-center mr-4">
                    <Users className="h-7 w-7 text-electric-blue" />
                  </div>
                  <div>
                    <p className="font-bold text-dark-navy text-lg">{testimonial.name}</p>
                    <p className="text-gray-600">
                      {testimonial.role} - {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Diagonal Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-light-gray-bg transform origin-bottom-right skew-y-1"></div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-light-gray-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
              <Shield className="h-10 w-10 text-electric-blue" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-navy mb-6">
              Microsoft公認の信頼性
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Microsoft AppSourceで認定されたセキュアなPowerPoint拡張機能です。
              企業のデータセキュリティ要件を満たし、安心してご利用いただけます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center animate-on-scroll" style={{animationDelay: '0.1s'}}>
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-dark-navy mb-3">高速動作</h3>
                <p className="text-gray-600">軽量設計でPowerPointの動作を妨げません</p>
              </div>
              <div className="text-center animate-on-scroll" style={{animationDelay: '0.2s'}}>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-electric-blue" />
                </div>
                <h3 className="text-xl font-bold text-dark-navy mb-3">セキュア</h3>
                <p className="text-gray-600">エンタープライズレベルのセキュリティ</p>
              </div>
              <div className="text-center animate-on-scroll" style={{animationDelay: '0.3s'}}>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-dark-navy mb-3">サポート</h3>
                <p className="text-gray-600">専門チームによる迅速なサポート</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Diagonal Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-electric-blue transform origin-bottom-left -skew-y-1"></div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-electric-blue relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-24 h-24 border-2 border-white/30 rotate-45"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white/30 rotate-12"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-white/30 rotate-45"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              今すぐ始めませんか？
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              14日間の無料トライアルで、プロ品質の資料作成を体験してください
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/register"
                className="group bg-white hover:bg-gray-100 text-electric-blue px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center justify-center"
              >
                無料トライアル開始
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;