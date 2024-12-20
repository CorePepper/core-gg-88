import FeatureCard from "./features/FeatureCard";
import FeatureHeader from "./features/FeatureHeader";
import FeatureButtons from "./features/FeatureButtons";
import { features } from "./features/featureData";

const Features = () => {
  return (
    <section id="products" className="py-16 sm:py-20 bg-navy-light relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy/80 z-10" />
        <div className="absolute inset-0 bg-[url('/lovable-uploads/61ef5862-80bb-417a-ae78-f5d44d392fb4.png')] bg-cover bg-center opacity-30 scale-90" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
          <span className="text-gold">CORE</span>
          <span className="text-white">開発製品</span>
        </h2>
        
        <FeatureHeader 
          title="Core指サックプレミアム"
          subtitle="日本一位のチームが開発した最高品質のゲーミング指サック"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              heading={feature.heading}
            />
          ))}
        </div>

        <FeatureButtons />
      </div>
    </section>
  );
};

export default Features;