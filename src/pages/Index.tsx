import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import Team from "@/components/Team";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Core ゲーム用指サック",
    "description": "手汗対策に最適なゲーム用指サック。快適な操作性と最高のパフォーマンスを提供します。",
    "brand": {
      "@type": "Brand",
      "name": "Core"
    },
    "offers": {
      "@type": "Offer",
      "price": "1500",
      "priceCurrency": "JPY",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="bg-navy min-h-screen">
      <Helmet>
        <title>最高品質のゲーム用指サック - Core公式サイト</title>
        <meta name="description" content="Coreのゲーム用指サックで手汗問題を解決。快適な操作性と最高のパフォーマンスを実現し、ゲームプレイを向上させます。" />
        <meta name="keywords" content="ゲーム用指サック,指サック,手汗対策,ゲーミングギア,スマホゲーム,操作性向上,Core" />
        <meta property="og:title" content="最高品質のゲーム用指サック - Core公式サイト" />
        <meta property="og:description" content="Coreのゲーム用指サックで手汗問題を解決。快適な操作性と最高のパフォーマンスを実現し、ゲームプレイを向上させます。" />
        <meta property="og:image" content="/lovable-uploads/92f6c11c-45d0-451a-b318-857720b23e06.png" />
        <meta property="og:url" content="https://core-esports.com" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://core-esports.com" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Navigation />
      <main>
        <h1 className="sr-only">最高品質のゲーム用指サック - Core公式サイト</h1>
        <Hero />
        <Features />
        <Reviews />
        <CTASection />
        <Team />
        <About />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
};

export default Index;