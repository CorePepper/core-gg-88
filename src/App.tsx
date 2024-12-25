// src/App.tsx

import { Toaster as Sonner } from "@components/ui/toaster";
import { TooltipProvider } from "@components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ▼ 以下の2つを「src/pages/」に置いている前提。
//    もしフォルダ名が違う場合は importパスを調整してください。
import Index from "./pages/Index";
import Reviews from "./pages/Reviews";

// React Query 用のクライアントを生成
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* トースト通知用コンポーネント (Sonner) */}
        <Sonner />

        <BrowserRouter>
          <Routes>
            {/* 
              path="/" でアクセスしたときは <Index /> を表示 
              path="/reviews" なら <Reviews /> を表示
            */}
            <Route path="/" element={<Index />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
