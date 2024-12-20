import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string[];
  description: string[];
  heading: string;
}

const FeatureCard = ({ icon: Icon, title, description, heading }: FeatureCardProps) => {
  return (
    <div className="bg-navy-light/90 backdrop-blur-sm p-6 sm:p-8 rounded-lg hover:bg-navy-light/80 transition-colors text-center border border-gold/10">
      <h2 className="text-2xl font-bold text-gold mb-4">{heading}</h2>
      <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-gold mb-4 sm:mb-6 mx-auto" />
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
        {title.map((line, index) => (
          <span key={index} className="block">
            {line}
          </span>
        ))}
      </h3>
      <p className="text-white/80 text-xs sm:text-sm lg:text-base leading-tight">
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