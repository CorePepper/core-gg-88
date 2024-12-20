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
      title: "カスタムドメインの設定手順",
      description: (
        <div className="space-y-2">
          <p>1. Netlifyにサインアップまたはログインします</p>
          <p>2. 「Add new site」→「Import an existing project」を選択</p>
          <p>3. GitHubからリポジトリを選択してデプロイ</p>
          <p>4. 「Domain settings」→「Add custom domain」をクリック</p>
          <p>5. お持ちのドメインを入力して「Verify」</p>
          <p>6. DNSプロバイダーでNetlifyのネームサーバーを設定</p>
          <p>詳しくは<a href="https://docs.lovable.dev/tips-tricks/custom-domain/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">カスタムドメインのドキュメント</a>をご覧ください</p>
        </div>
      ),
      duration: 15000,
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
                      カスタムドメインを設定
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