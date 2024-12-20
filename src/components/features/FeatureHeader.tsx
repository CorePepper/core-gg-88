interface FeatureHeaderProps {
  title: string;
  subtitle: string;
}

const FeatureHeader = ({ title, subtitle }: FeatureHeaderProps) => {
  return (
    <div className="text-center mb-10 sm:mb-12 mt-12 sm:mt-16">
      <h3 className="text-3xl sm:text-4xl md:text-5xl text-gold font-bold mb-4 sm:mb-6 animate-glow drop-shadow-lg">
        {title}
      </h3>
      <p className="text-base sm:text-lg md:text-xl text-white/80 px-4">
        {/* Desktop view - single line */}
        <span className="hidden md:block">
          {subtitle}
        </span>
        {/* Mobile view - two lines */}
        <span className="block md:hidden">
          <span className="block">プロゲーマーが開発した</span>
          <span className="block mt-1">最高品質の指サック</span>
        </span>
      </p>
    </div>
  );
};

export default FeatureHeader;