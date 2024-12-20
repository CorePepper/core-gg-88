import React, { useState } from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import NetlifyDeployInstructions from "./NetlifyDeployInstructions";

const Navigation = () => {
  const { toast } = useToast();
  const [showDeployInstructions, setShowDeployInstructions] = useState(true);

  const handleExportToGithub = () => {
    window.open("https://github.com/new", "_blank");
  };

  const handleCustomDomain = () => {
    toast({
      title: "Netlifyでのデプロイ手順",
      description: showDeployInstructions ? <NetlifyDeployInstructions /> : null,
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
                    {showDeployInstructions && (
                      <Button 
                        variant="outline" 
                        className="w-full justify-start"
                        onClick={handleCustomDomain}
                      >
                        Netlifyデプロイ手順
                      </Button>
                    )}
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