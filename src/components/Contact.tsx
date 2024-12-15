import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "送信完了",
      description: "お問い合わせありがとうございます。担当者より返信させていただきます。",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-navy-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-white">お仕事の</span>
          <span className="text-gold">ご依頼</span>
          <span className="text-white">はこちら</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">
                お名前
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-navy border border-gold/30 text-white focus:border-gold focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-2">
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-navy border border-gold/30 text-white focus:border-gold focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-2">
                メッセージ
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-navy border border-gold/30 text-white focus:border-gold focus:outline-none"
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gold text-navy font-semibold rounded-full hover:bg-gold-light transition-colors"
              >
                送信する
              </button>
            </div>
          </form>

          <div className="mt-12 text-center text-white/80">
            <p className="mb-2">合同会社CORE</p>
            <p>愛媛県松山市余戸中6-7-9-A</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;