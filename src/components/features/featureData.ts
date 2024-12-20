import { Star, ThumbsUp, Zap } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string[];
  description: string[];
}

export const features: Feature[] = [
  {
    icon: Star,
    title: ["30万個突破の実績"],
    description: [
      "多くのプロプレイヤーに",
      "選ばれ続ける信頼の品質"
    ]
  },
  {
    icon: ThumbsUp,
    title: ["Amazonで高評価"],
    description: [
      "レビュー4.5以上の",
      "高い満足度を獲得"
    ]
  },
  {
    icon: Zap,
    title: [
      "プロ仕様の",
      "最高品質"
    ],
    description: [
      "特殊素材による最速の",
      "反応速度と完璧なフィット感"
    ]
  }
];