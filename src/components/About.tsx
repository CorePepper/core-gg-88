import { Building, Mail } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy" />
        <div className="absolute inset-0 bg-[url('/lovable-uploads/0f84dfdf-dee5-4ca6-933c-2f5251bbb9e1.png')] bg-cover bg-center opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span><span className="text-gold">CORE</span><span className="text-white"> E-Sports について</span></span>
        </h2>

        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-navy-light/80 backdrop-blur-sm p-8 rounded-lg mb-8">
            <Building className="w-12 h-12 text-gold mx-auto mb-6" />
            <p className="text-xl text-white mb-8">
              革新を追求し、すべてのゲームプレイヤーに最高品質の体験を届ける
            </p>
            
            <div className="text-white/80 space-y-4">
              <p className="font-semibold text-gold">会社情報</p>
              <div className="space-y-2">
                <p>会社名: 合同会社CORE</p>
                <p>住所: 愛媛県松山市余戸中6-7-9-A</p>
                <a 
                  href="mailto:info@core-gg.com"
                  className="inline-flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@core-gg.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;