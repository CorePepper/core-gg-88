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
        <span className="block md:inline">{subtitle.split(" ").slice(0, 4).join(" ")}</span>
        <span className="block md:inline md:ml-2">
          {subtitle.split(" ").slice(4).join(" ")}
        </span>
      </p>
    </div>
  );
};

export default FeatureHeader;