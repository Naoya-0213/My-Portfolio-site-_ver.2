// ===== Tailwind CSS 設定ファイル =====
// 📍このファイルは Tailwind CSS の設定を行う

// ESLint のルール (import/no-anonymous-default-export) に従うため、
// 設定オブジェクトを `config` 変数に代入してから export

const config = {
  extend: {
    fontFamily: {
      en: ["Oswald", "serif"],
    },
  },
};

export default config;
