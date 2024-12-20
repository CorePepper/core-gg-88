import { Star, ThumbsUp, Zap } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string[];
  description: string[];
  heading: string;
}

export const features: Feature[] = [
  {
    icon: Star,
    heading: "耐久性",
    title: ["累計30万個突破の信頼品質"],
    description: [
      "多くのプレイヤーに選ばれ",
      "続ける実績が証明する品質"
    ]
  },
  {
    icon: ThumbsUp,
    heading: "耐久性",
    title: ["Amazonベストセラー獲得"],
    description: [
      "ユーザーレビューで高評価を",
      "獲得し続けています"
    ]
  },
  {
    icon: Zap,
    heading: "耐久性",
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