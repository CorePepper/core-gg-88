import { useState, useEffect } from "react";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("about");

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
    { id: "about", label: "会社概要" },
    { id: "products", label: "Coreゲーム製品" },
    { id: "team", label: "E-Sports Team紹介" },
    { id: "contact", label: "お問い合わせ" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-navy/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-gold text-xl font-bold">CORE</div>
          
          {/* タブメニュー */}
          <div className="flex justify-center flex-1">
            <div className="flex space-x-8">
              {tabs.map((tab) => (
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