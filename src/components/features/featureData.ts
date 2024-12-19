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
    title: ["累計10万個突破の信頼品質"],
    description: [
      "多くのプレイヤーに選ばれ",
      "続ける実績が証明する品質"
    ]
  },
  {
    icon: ThumbsUp,
    title: ["Amazonベストセラー獲得"],
    description: [
      "ユーザーレビューで高評価を",
      "獲得し続けています"
    ]
  },
  {
    icon: Zap,
    title: [
      "耐久性・快適さ",
      "最速反応を実現"
    ],
    description: [
      "特殊素材による最速の",
      "タッチ反応と完璧なフィット感"
    ]
  }
];