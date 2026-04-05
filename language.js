export const translations = {
  en: {
    home: "Home",
    profile: "Profile",
    friends: "Friends",
    chats: "Chats",
    languageExchange: "Language Exchange",
    community: "Community",
    welcomeTitle: "Welcome to Campus Language Exchange",
    findPartners: "Find Partners",
    createPost: "Create Post"
  },
  ja: {
    home: "ホーム",
    profile: "プロフィール",
    friends: "友達",
    chats: "チャット",
    languageExchange: "Language Exchange",
    community: "コミュニティ",
    welcomeTitle: "キャンパス言語交流へようこそ",
    findPartners: "パートナーを探す",
    createPost: "投稿を作成"
  }
};

export function getCurrentLanguage() {
  return localStorage.getItem("siteLanguage") || "en";
}

export function setCurrentLanguage(lang) {
  localStorage.setItem("siteLanguage", lang);
}