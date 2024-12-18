import { useState, useEffect } from "react";
import { TwitterIcon } from "lucide-react";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("products");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveTab(id);
    }
  };

  // URLのハッシュが変更された時にアクティブタブを更新
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

  // 初期表示時にURLのハッシュをチェック
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

  return (
    <nav className="fixed top-0 left-0 w-full bg-navy/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/8a96f1e6-ff15-4a15-994a-e0237be603a3.png" 
              alt="Core Logo" 
              className="h-10 w-auto mr-2 object-contain"
            />
            <div className="text-gold text-xl font-bold">CORE</div>
          </div>
          
          <div className="flex justify-end flex-1">
            <div className="flex space-x-8 items-center">
              <div className="flex items-center">
                <a
                  href="https://x.com/Core_official__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-twitter hover:text-twitter-dark transition-colors mr-4"
                >
                  <TwitterIcon className="h-5 w-5 fill-current" />
                </a>
                <button
                  onClick={() => scrollToSection("products")}
                  className={`relative px-1 py-2 transition-colors ${
                    activeTab === "products" ? "text-gold" : "text-white/80 hover:text-white"
                  }`}
                >
                  {tabs[0].label}
                  {activeTab === "products" && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gold" />
                  )}
                </button>
              </div>
              {tabs.slice(1).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`relative px-1 py-2 transition-colors ${
                    activeTab === tab.id ? "text-gold" : "text-white/80 hover:text-white"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gold" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;