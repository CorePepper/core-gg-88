import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import Team from "@/components/Team";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CTASection from "@/components/CTASection";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Core ゲーム用指サック",
    "description": "Coreのゲーム用指サックは、快適な操作性と最高のパフォーマンスを提供します。",
    "image": "https://core-esports.com/lovable-uploads/92f6c11c-45d0-451a-b318-857720b23e06.png",
    "brand": "Core",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "JPY",
      "price": "1500",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="bg-navy min-h-screen">
      <Helmet>
        <title>最高品質のゲーム用指サック - Core</title>
        <meta name="description" content="Coreのゲーム用指サックは、快適な操作性と最高のパフォーマンスを提供します。指サック選びならCore製品。" />
        <meta name="keywords" content="ゲーム用指サック,指サック,Eスポーツ,快適,操作性" />
        <meta property="og:title" content="最高品質のゲーム用指サック - Core" />
        <meta property="og:description" content="Coreのゲーム用指サックは、快適な操作性と最高のパフォーマンスを提供します。指サック選びならCore製品。" />
        <meta property="og:image" content="/lovable-uploads/92f6c11c-45d0-451a-b318-857720b23e06.png" />
        <meta property="og:url" content="https://core-esports.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://core-esports.com" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Navigation />
      <main>
        <h1 className="sr-only">最高品質のゲーム用指サック - Core</h1>
        <Hero />
        <Features />
        <Reviews />
        <CTASection />
        <Team />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Index;