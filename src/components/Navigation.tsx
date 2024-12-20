import React from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const { toast } = useToast();

  const handleExportToGithub = () => {
    window.open("https://github.com/new", "_blank");
  };

  const handleCustomDomain = () => {
    toast({
      title: "Netlifyでのデプロイ手順",
      description: (
        <div className="space-y-2">

          <p className="font-semibold">1. 基本設定</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>チーム選択: "CORE" を選択</li>
            <li>サイト名: プロジェクトの一時的なURL名を入力
              <ul className="list-disc pl-4 mt-1 text-sm text-gray-600">
                <li>例: my-core-project （.netlify.app が自動的に追加されます）</li>
                <li>空欄の場合は自動生成されます</li>
                <li>※カスタムドメインの設定は後のステップで行います</li>
              </ul>
            </li>
          </ul>
          
          <p className="font-semibold mt-4">2. ビルド設定</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>デプロイするブランチ: 
              <ul className="list-disc pl-4 mt-1 text-sm text-gray-600">
                <li>「main」を選択（デフォルトで選択されています）</li>
                <li>これはGitHubの主要ブランチです</li>
              </ul>
            </li>
            <li>ベースディレクトリ:
              <ul className="list-disc pl-4 mt-1 text-sm text-gray-600">
                <li>空欄のままで問題ありません</li>
                <li>プロジェクトのルートフォルダが自動的に認識されます</li>
              </ul>
            </li>
            <li>ビルドコマンド:
              <ul className="list-disc pl-4 mt-1 text-sm text-gray-600">
                <li>「npm run build」と入力してください</li>
                <li>このコマンドでプロジェクトが本番用にビルドされます</li>
                <li>package.jsonに定義されている標準的なビルドコマンドです</li>
              </ul>
            </li>
            <li>Publish directory:
              <ul className="list-disc pl-4 mt-1 text-sm text-gray-600">
                <li>「dist」と入力してください</li>
                <li>これはViteプロジェクトのビルド出力先フォルダです</li>
                <li>ビルドされたファイルがここに生成されます</li>
              </ul>
            </li>
            <li>Functions directory:
              <ul className="list-disc pl-4 mt-1 text-sm text-gray-600">
                <li>現時点では空欄のままで問題ありません</li>
                <li>サーバーレス関数を使用する場合のみ設定が必要です</li>
              </ul>
            </li>
          </ul>

          <p className="font-semibold mt-4">3. デプロイ開始</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>設定を確認後、「Deploy」ボタンをクリック</li>
            <li>ビルドとデプロイが自動的に開始されます</li>
          </ul>

          <p className="font-semibold mt-4">4. カスタムドメインの設定</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>デプロイ完了後、「Domain settings」→「Add custom domain」から設定可能</li>
            <li>購入済みのドメインをここで設定します</li>
          </ul>
          
          <p className="mt-4">詳しくは<a href="https://docs.netlify.com/site-deploys/create-deploys/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Netlifyのドキュメント</a>をご覧ください</p>

        </div>
      ),
      duration: 30000,
    });
  };

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>CORE E-Sports</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <div className="space-y-4">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={handleExportToGithub}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Export to GitHub
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={handleCustomDomain}
                    >
                      Netlifyデプロイ手順
                    </Button>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navigation;
