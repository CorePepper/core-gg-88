import { ArrowRight, Star, Building, Mail, Trophy, TwitterIcon, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Reviews Interface
interface Review {
  name: string;
  rating: number;
  text: string;
  secondImage?: string;
}

// Reviews Data
const reviews = [
  {
    name: "わずぼーん",
    rating: 5,
    text: "タッチ感度が素晴らしく、長時間プレイでも快適です。",
  },
  {
    name: "プロゲーマーB",
    rating: 5,
    text: "大会で使用していますが、パフォーマンスが格段に向上しました。",
  },
  {
    name: "ストリーマーC",
    rating: 5,
    text: "耐久性が高く、長期間使用できるのが魅力です。",
  },
];

// Navigation Component
const Navigation = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveTab(id);
      setIsMenuOpen(false);
    }
  };

  const tabs = [
    { id: "products", label: "Product" },
    { id: "team", label: "Team" },
    { id: "about", label: "Company" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-navy/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/8a96f1e6-ff15-4a15-994a-e0237be603a3.png" 
              alt="Core Logo" 
              className="h-12 w-auto"
            />
            <div className="flex items-center space-x-2">
              <span className="text-gold text-2xl font-bold">CORE</span>
              <span className="text-white text-2xl font-bold">E-Sports</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://x.com/Core_official__"
              target="_blank"
              rel="noopener noreferrer"
              className="text-twitter hover:text-twitter-dark transition-colors"
            >
              <TwitterIcon className="h-6 w-6" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gold transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {isMenuOpen && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" style={{ top: '80px' }}>
              <div className="fixed right-0 top-20 h-[calc(100vh-80px)] w-full max-w-sm bg-[#FFFBEA] shadow-lg">
                <div className="flex flex-col items-center justify-center h-full py-8 space-y-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => scrollToSection(tab.id)}
                      className={`px-6 py-3 text-xl font-bold w-full text-center transition-colors ${
                        activeTab === tab.id ? 'text-[#D4AF37]' : 'text-[#1A202C]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section className="h-[calc(100vh-80px)] bg-navy relative overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-navy/80" />
        <div className="absolute inset-0 bg-[url('/lovable-uploads/5033d188-8ff7-40bd-a808-a8aecc24cdd6.png')] bg-cover bg-center opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-gold font-extrabold mb-6 leading-tight">
            <span className="block md:inline">Pushing the Edge</span>
            <span className="block md:inline md:ml-2">of Excellence,</span>
            <span className="block mt-2">Defining Victory.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
            <span className="block md:inline">ゲームプレイヤーのための</span>
            <span className="block md:inline md:ml-1">最高品質を追求する</span>
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-navy font-bold rounded-full hover:bg-gold-light transition-colors group"
          >
            お問い合わせはこちら
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

// Features Section
const Features = () => {
  return (
    <section id="products" className="py-20 bg-navy-light relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy/80" />
        <div className="absolute inset-0 bg-[url('/lovable-uploads/61ef5862-80bb-417a-ae78-f5d44d392fb4.png')] bg-cover bg-center opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-gold">CORE</span>
          <span className="text-white">開発製品</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl text-gold font-bold mb-4">
              Core指サックプレミアム
            </h3>
            <p className="text-white/80">
              日本一位のチームが開発した最高品質のゲーミング指サック
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-navy/80 backdrop-blur-sm p-6 rounded-lg">
                <feature.icon className="w-12 h-12 text-gold mb-4 mx-auto" />
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://amzn.asia/d/ghIgPyc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gold text-navy font-bold rounded-full hover:bg-gold-light transition-colors group"
            >
              Amazonで購入する
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Company Section (About)
const About = () => {
  return (
    <section id="about" className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy" />
        <div className="absolute inset-0 bg-[url('/lovable-uploads/0f84dfdf-dee5-4ca6-933c-2f5251bbb9e1.png')] bg-cover bg-center opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-gold">CORE</span>
          <span className="text-white"> E-Sports について</span>
        </h2>

        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-navy-light/80 backdrop-blur-sm p-8 rounded-lg mb-8">
            <Building className="w-12 h-12 text-gold mx-auto mb-6" />
            <p className="text-xl text-white mb-8">
              革新を追求し、すべてのゲームプレイヤーに最高品質の体験を届ける
            </p>
            
            <div className="text-white/80 space-y-2">
              <p className="font-semibold text-gold">会社情報</p>
              <p>会社名: 合同会社CORE</p>
              <p>住所: 愛媛県松山市余戸中6-7-9-A</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Team Section
const Team = () => {
  const achievements = [
    "KOPL S4 MIDseason Final 2位",
    "KOPL S4 Play Off 3位",
    "KOPL Grand Final 3位",
    "荒野Championship 決勝 8位",
    "KOPL S5 Play Off 1位",
    "KOPL S5 MIDseason M1 Final 6位",
  ];

  return (
    <section id="team" className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-white">Pro E-Sports Team</span>
          <span className="text-gold md:ml-2">CORE Slay</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-navy-light/80 backdrop-blur-sm p-8 rounded-lg mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gold mb-4 flex items-center justify-center md:justify-start">
                  <Trophy className="mr-2" /> 主な実績
                </h3>
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="text-white flex items-center before:content-[''] before:w-2 before:h-2 before:bg-gold before:rounded-full before:mr-3"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full md:w-64">
                <img
                  src="/lovable-uploads/45af26eb-fd78-4d95-bbea-58374d6d568e.png"
                  alt="Team logo"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-gold text-navy font-semibold rounded-full hover:bg-gold-light transition-colors group"
            >
              <Mail className="mr-2" />
              サポート・コラボ依頼はこちら
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reviews Section
const ReviewSection = () => {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy/80" />
        <div className="absolute inset-0 bg-[url('/lovable-uploads/0f17d324-4e96-4f45-91f4-229883758a92.png')] bg-cover bg-center opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-white">多くのプレイヤーが認めた</span>
          <span className="text-gold">クオリティ</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-navy-light/80 backdrop-blur-sm p-6 rounded-lg hover:transform hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-gold fill-current"
                  />
                ))}
              </div>
              <p className="text-white/80 mb-4">{review.text}</p>
              <p className="text-gold font-semibold">{review.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/reviews"
            className="inline-flex items-center px-8 py-3 bg-gold text-navy font-semibold rounded-full hover:bg-gold-light transition-colors group"
          >
            すべてのレビューを見る
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// Main Index Component
const Index = () => {
  return (
    <div className="bg-navy min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <ReviewSection />
      <Team />
      <About />
    </div>
  );
};

export default Index;