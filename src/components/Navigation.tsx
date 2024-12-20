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
            <li>サイト名: 任意のURLを入力（空欄の場合は自動生成）</li>
          </ul>
          
          <p className="font-semibold mt-4">2. ビルド設定</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>ブランチ: main</li>
            <li>ベースディレクトリ: プロジェクトのルートパス（通常は空欄）</li>
            <li>ビルドコマンド: npm run build</li>
          </ul>
          
          <p className="font-semibold mt-4">3. デプロイ</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>設定を確認後、「Deploy」ボタンをクリック</li>
            <li>ビルドとデプロイが自動的に開始されます</li>
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