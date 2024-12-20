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
  return (
    <div className="bg-navy min-h-screen">
      <Helmet>
        <title>プロEスポーツギア - Core</title>
        <meta name="description" content="Core製品の最高品質ゲーミングギアを体感してください。プロゲーマーが開発に携わった究極の指サックで、ゲームプレイの限界に挑戦しましょう。" />
        <meta name="keywords" content="ゲーミングギア,Eスポーツ,高品質指サック,ゲーミング指サック,プロゲーマー,Core,ゲーム周辺機器" />
        <meta property="og:title" content="プロEスポーツギア - Core" />
        <meta property="og:description" content="Core製品の最高品質ゲーミングギアを体感してください。プロゲーマーが開発に携わった究極の指サックで、ゲームプレイの限界に挑戦しましょう。" />
        <meta property="og:image" content="/lovable-uploads/92f6c11c-45d0-451a-b318-857720b23e06.png" />
        <meta property="og:url" content="https://core-esports.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://core-esports.com" />
      </Helmet>
      <Navigation />
      <main>
        <h1 className="sr-only">プロEスポーツギア - Core</h1>
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