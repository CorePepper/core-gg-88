// src/App.tsx

import { Toaster as Sonner } from "@components/ui/toaster";
import { TooltipProvider } from "@components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ▼ 以下2つのコンポーネントを使う前提。
//    src/pages/Index.tsx と src/pages/Reviews.tsx に置いておきます。
import Index from "./pages/Index";
import Reviews from "./pages/Reviews";

// React Query 用のクライアントを作成
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* トースト通知用コンポーネント（Sonner） */}
        <Sonner />

        <BrowserRouter>
          <Routes>
            {/* 
              "/" にアクセスしたら Index を表示
              "/reviews" にアクセスしたら Reviews を表示
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
