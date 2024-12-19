import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/81ce5d7c-84fc-4ec3-a921-a993f06bb5ae.png')] bg-cover bg-center opacity-10" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            <span className="block md:inline">今すぐプロのフィーリングを</span>
            <span className="block md:inline">体感しよう</span>
          </h2>
          
          <a
            href="https://amzn.asia/d/ghIgPyc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gold text-navy font-semibold rounded-full hover:bg-gold-light transition-colors group"
          >
            Amazonで購入する
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;