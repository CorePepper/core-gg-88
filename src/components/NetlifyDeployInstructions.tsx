import { Check, ChevronRight } from "lucide-react";

const NetlifyDeployInstructions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-navy-light rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gold mb-6">Netlifyデプロイ手順</h2>
      
      <div className="space-y-8">
        {/* Step 1 */}
        <div className="bg-navy/50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-navy font-bold">1</div>
            <h3 className="text-xl font-semibold text-white">Netlifyにログイン</h3>
          </div>
          <div className="pl-11">
            <p className="text-white/80 mb-2">
              <ChevronRight className="inline w-4 h-4 mr-2" />
              <a href="https://app.netlify.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                Netlify（https://app.netlify.com）
              </a>
              にアクセス
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-navy/50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-navy font-bold">2</div>
            <h3 className="text-xl font-semibold text-white">新しいサイトを追加</h3>
          </div>
          <div className="pl-11 space-y-2">
            <p className="text-white/80">
              <ChevronRight className="inline w-4 h-4 mr-2" />
              「Add new site」をクリック
            </p>
            <p className="text-white/80">
              <ChevronRight className="inline w-4 h-4 mr-2" />
              「Import an existing project」を選択
            </p>
            <p className="text-white/80">
              <ChevronRight className="inline w-4 h-4 mr-2" />
              「Deploy with GitHub」をクリック
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-navy/50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-navy font-bold">3</div>
            <h3 className="text-xl font-semibold text-white">デプロイ設定</h3>
          </div>
          <div className="pl-11 space-y-2">
            <div className="bg-navy/30 p-4 rounded-lg space-y-3">
              <p className="text-white/80 flex items-center">
                <Check className="w-4 h-4 text-gold mr-2" />
                Team: "CORE"
              </p>
              <p className="text-white/80 flex items-center">
                <Check className="w-4 h-4 text-gold mr-2" />
                Branch: main
              </p>
              <p className="text-white/80 flex items-center">
                <Check className="w-4 h-4 text-gold mr-2" />
                Build command: npm run build
              </p>
              <p className="text-white/80 flex items-center">
                <Check className="w-4 h-4 text-gold mr-2" />
                Publish directory: dist
              </p>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="bg-navy/50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-navy font-bold">4</div>
            <h3 className="text-xl font-semibold text-white">デプロイ開始</h3>
          </div>
          <div className="pl-11">
            <p className="text-white/80">
              <ChevronRight className="inline w-4 h-4 mr-2" />
              「Deploy site」をクリックしてデプロイを開始
            </p>
          </div>
        </div>

        {/* Final Step */}
        <div className="bg-navy/50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-navy font-bold">5</div>
            <h3 className="text-xl font-semibold text-white">確認</h3>
          </div>
          <div className="pl-11 space-y-2">
            <p className="text-white/80">
              <ChevronRight className="inline w-4 h-4 mr-2" />
              デプロイが完了したら、生成されたURLにアクセスして確認
            </p>
            <p className="text-white/80">
              <ChevronRight className="inline w-4 h-4 mr-2" />
              サイトが正しく表示されることを確認
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetlifyDeployInstructions;