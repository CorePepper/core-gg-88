export const siteConfig = {
  title: import.meta.env.VITE_SITE_TITLE || "CORE E-Sports",
  description: import.meta.env.VITE_SITE_DESCRIPTION || "ゲームプレイヤーのための最高品質を追求する",
  url: import.meta.env.VITE_SITE_URL || "https://core-esports.com",
  ogImage: import.meta.env.VITE_OG_IMAGE || "/og-image.png",
  links: {
    twitter: "https://x.com/Core_official__",
    amazon: "https://amzn.asia/d/ghIgPyc"
  }
};