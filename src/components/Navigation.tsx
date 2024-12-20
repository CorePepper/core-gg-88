import { useState, useEffect } from "react";
import { TwitterIcon, Menu, Share } from "lucide-react";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // スクロール制御
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveTab(id);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setActiveTab(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setActiveTab(hash);
    }
  }, []);

  const tabs = [
    { id: "products", label: "Product" },
    { id: "team", label: "Team" },
    { id: "about", label: "Company" },
    { id: "contact", label: "Contact" }
  ];

  const handleShare = () => {
    // Lovableのシェア機能を使用するためのメッセージ
    console.log('Lovableのシェア機能を使用してください。画面右上の「Publish」ボタンからGitHubにエクスポートできます。');
    alert('Lovableのシェア機能を使用してください。画面右上の「Publish」ボタンからGitHubにエクスポートできます。');
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-navy/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Text Container */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <img 
              src="/lovable-uploads/8a96f1e6-ff15-4a15-994a-e0237be603a3.png" 
              alt="Core Logo" 
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="text-gold text-xl sm:text-2xl lg:text-3xl font-extrabold">CORE</span>
              <span className="text-white text-xl sm:text-2xl lg:text-3xl font-extrabold">E-Sports</span>
            </div>
          </div>
          
          {/* Twitter, Share and Hamburger Menu Icons Container */}
          <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
            <a
              href="https://x.com/Core_official__"
              target="_blank"
              rel="noopener noreferrer"
              className="text-twitter hover:text-twitter-dark transition-colors p-1.5 sm:p-2"
            >
              <TwitterIcon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 fill-current" />
            </a>
            <button
              onClick={handleShare}
              className="text-white hover:text-gold transition-colors p-1.5 sm:p-2"
              aria-label="Share project"
            >
              <Share className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gold transition-colors p-1.5 sm:p-2"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" style={{ top: '80px' }}>
              <div 
                className={`fixed right-0 top-20 h-[calc(100vh-80px)] w-full max-w-sm bg-[#FFFBEA] shadow-lg transform transition-transform duration-300 ease-in-out ${
                  isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
              >
                <div className="flex flex-col items-center justify-center h-full py-8 space-y-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => scrollToSection(tab.id)}
                      className={`px-6 py-3 text-xl sm:text-2xl font-extrabold w-full text-center transition-colors border-b-2 border-black/20 ${
                        activeTab === tab.id 
                          ? 'text-[#D4AF37]' 
                          : 'text-[#1A202C] hover:text-[#D4AF37]'
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

export default Navigation;