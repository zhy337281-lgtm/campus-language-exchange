export const translations = {
  en: {
    siteName: "LinkCampus Community",
    home: "Home",
    friends: "Friends",
    chats: "Chats",
    profile: "Profile",
    login: "Login",
    logout: "Logout",

    welcomeTitle: "Welcome to LinkCampus Community",
    welcomeDesc: "Connect with students, practice languages, and build your campus community.",
    features: "Features",

    languageExchangeTitle: "Language Exchange",
    languageExchangeDesc: "Find language partners, create exchange posts, manage requests, and build cross-cultural connections.",
    enterLanguageExchange: "Enter Language Exchange",

    communityTitle: "Campus Community",
    communityDesc: "Share campus life, ideas, food tips, events, daily moments, and interact with students through community posts and replies.",
    enterCommunity: "Enter Community",

    marketplaceTitle: "Marketplace",
    marketplaceDesc: "Buy, sell, and exchange useful items inside your student community. This module can be expanded later.",
    enterMarketplace: "Enter Marketplace",

    footerText: "Built for students at universities starting from Science Tokyo to the world."
  },

  ja: {
    siteName: "LinkCampus Community",
    home: "ホーム",
    friends: "友達",
    chats: "チャット",
    profile: "プロフィール",
    login: "ログイン",
    logout: "ログアウト",

    welcomeTitle: "キャンパス言語交流へようこそ",
    welcomeDesc: "学生とつながり、言語を練習し、キャンパスコミュニティを築きましょう。",
    features: "機能",

    languageExchangeTitle: "言語交流",
    languageExchangeDesc: "言語パートナーを見つけ、交流投稿を作成し、リクエストを管理して、異文化交流のつながりを広げましょう。",
    enterLanguageExchange: "言語交流へ",

    communityTitle: "キャンパスコミュニティ",
    communityDesc: "キャンパス生活、アイデア、食べ物のおすすめ、イベント、日常の出来事を共有し、投稿や返信を通して学生同士で交流できます。",
    enterCommunity: "コミュニティへ",

    marketplaceTitle: "マーケットプレイス",
    marketplaceDesc: "学生コミュニティの中で便利な物を売買・交換できます。この機能は今後さらに拡張できます。",
    enterMarketplace: "マーケットへ",

    footerText: "Science Tokyoから世界へ広がる学生のためのコミュニティです。"
  }
};

export function getCurrentLanguage() {
  return localStorage.getItem("siteLanguage") || "en";
}

export function setCurrentLanguage(lang) {
  localStorage.setItem("siteLanguage", lang);
}