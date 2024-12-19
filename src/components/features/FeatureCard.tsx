import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string[];
  description: string[];
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-navy/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg hover:bg-navy/70 transition-colors text-center">
      <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-gold mb-4 sm:mb-6 mx-auto" />
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
        {title.map((line, index) => (
          <span key={index} className="block">
            {line}
          </span>
        ))}
      </h3>
      <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-snug">
        {description.map((line, index) => (
          <span key={index} className="block">
            {line}
          </span>
        ))}
      </p>
    </div>
  );
};

export default FeatureCard;