import { Trophy, Mail, ArrowRight } from "lucide-react";

const achievements = [
  "KOPL S4 MIDseason Final 2位",
  "KOPL S4 Play Off 3位",
  "KOPL Grand Final 3位",
  "荒野Championship 決勝 8位",
  "KOPL S5 Play Off 1位",
  "KOPL S5 MIDseason M1 Final 6位",
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-navy relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-white">Pro E-Sports Team</span>
          <span className="text-gold"> CORE Slay</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-navy-light/80 backdrop-blur-sm p-8 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gold mb-4 flex items-center">
                  <Trophy className="mr-2" /> 主な実績
                </h3>
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="text-white flex items-center before:content-[''] before:w-2 before:h-2 before:bg-gold before:rounded-full before:mr-3"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              <img
                src="/lovable-uploads/45af26eb-fd78-4d95-bbea-58374d6d568e.png"
                alt="Team logo"
                className="w-64 h-auto ml-8 object-contain"
              />
            </div>
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-gold text-navy font-semibold rounded-full hover:bg-gold-light transition-colors group"
            >
              <Mail className="mr-2" />
              サポート・コラボ依頼はこちら
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;