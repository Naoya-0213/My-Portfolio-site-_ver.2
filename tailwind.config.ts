// ===== Tailwind CSS 設定ファイル =====
// 📍このファイルは Tailwind CSS の設定を行う

// ESLint のルール (import/no-anonymous-default-export) に従うため、
// 設定オブジェクトを `config` 変数に代入してから export

// より小さい画面は、max-[350px]:　で表現

const config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // フォント
      fontFamily: {
        en: ["Oswald", "serif"],
      },

      // ブレイクポイント
      screens: {
        sm: { min: "640px" }, // 640px以上
        sp: { max: "767px" }, // 767px以下
        pc: { min: "768px" }, // 768px以上
        tb: { min: "768px", max: "899px" }, // 768〜899px
      },
    },
  },
};

export default config;
