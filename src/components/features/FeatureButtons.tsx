import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeatureButtons = () => {
  return (
    <div className="text-center mt-12 sm:mt-16 flex flex-col items-center gap-4 sm:gap-6">
      <a
        href="https://amzn.asia/d/ghIgPyc"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-gold text-navy font-bold rounded-full hover:bg-gold-light transition-colors group"
      >
        Amazonで購入する
        <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
      </a>
      
      <Link
        to="/reviews"
        className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-white text-navy font-bold rounded-full border-2 border-gold hover:bg-gray-200 transition-colors group"
      >
        プロ選手の声
        <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default FeatureButtons;