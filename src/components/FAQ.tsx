import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "ゲーム用指サックはどんな効果がありますか？",
    answer: "手汗による操作ミスを防ぎ、スマートフォンやタブレットでのゲームプレイ時の操作性を向上させます。特に、FPSやMOBAなどの競技性の高いゲームで効果を発揮します。"
  },
  {
    question: "指サックのサイズ選びのコツを教えてください",
    answer: "指の太さに合わせて、きつすぎず緩すぎない適度なフィット感のものを選びましょう。当社の指サックは伸縮性に優れており、多くの方に適合するユニバーサルサイズを採用しています。"
  },
  {
    question: "手汗が多い人でも快適に使えますか？",
    answer: "はい、特殊な吸汗素材を使用しているため、手汗の多い方でも快適にご使用いただけます。通気性も考慮した設計で、長時間のプレイでも蒸れにくい特徴があります。"
  },
  {
    question: "洗濯や手入れの方法は？",
    answer: "中性洗剤を使用した手洗いがおすすめです。洗濯後は陰干しで自然乾燥させてください。定期的なお手入れにより、長期間快適にご使用いただけます。"
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-gold">よくある</span>
          <span className="text-white">ご質問</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-navy-light/80 backdrop-blur-sm rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-white font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gold flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gold flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-white/80">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;