// tailwind.config.js

module.exports = {
  content: [
    // Next.js Page Router의 페이지 파일 경로
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    // 컴포넌트 파일 경로
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],

  // ... 생략

  theme: {
    extend: {
      colors: {
        /*
          Primary Color Palette (메인 컬러)
        */
        "dev-primary": "#4C79FF", // Primary Color (#4C79FF)

        "dev-primary-hover": "rgba(76, 121, 255, 0.9)", // Primary State Hover

        "dev-primary-active": "rgba(76, 121, 255, 0.9)", // Active State (Hover B10%, Active B10%와 유사하나 명확한 코드를 사용)

        "dev-secondary-bg": "rgba(76, 121, 255, 0.1)", // 버튼 배경 10% 투명도

        "dev-primary-light": "#78B0FF", // Secondary Color (#78B0FF)

        "dev-primary-trans-30": "rgba(76, 121, 255, 0.3)", // 30% 투명도

        "dev-primary-gradient-start": "#4C79FF",

        "dev-primary-gradient-end": "#023E99",

        /*

Status/Secondary Color Palette (상태 컬러)

*/

        // Informative (정보/안내 - 파란색 계열)

        "dev-indigo-dark": "#023E99", // Indigo Dark

        "dev-indigo-light": "#A3C3FF", // Indigo Light

        "dev-informative-dark": "#2563EB", // Informative (짙은 파랑)

        "dev-informative-light": "#53B2FF", // Informative Light (하늘색)

        // Negative (에러/위험 - 빨간색 계열)

        "dev-negative-dark": "#DC2626", // Negative Dark

        "dev-negative-light": "#FF6363", // Negative Light

        // Notice (경고/주의 - 노란색 계열)

        "dev-notice-dark": "#FBBF24", // Notice Dark

        "dev-notice-light": "#FFDB7F", // Notice Light

        // Positive (성공/긍정 - 초록색 계열)

        "dev-positive-dark": "#22C55E", // Positive Dark

        "dev-positive-light": "#62EC95", // Positive Light

        // Fuchsia (임시/포커스 하이라이트 등)

        "dev-fuchsia-dark": "#FD28EC", // Fuchsia Dark

        "dev-fuchsia-light": "#FF87F5", // Fuchsia Light

        /*

Gray Scale (Gray/Slate 컬러)

*/

        "dev-gray-white": "#FFFFFF", // White

        "dev-gray-50": "#F9FAFB", // Input 배경/Gray 50

        "dev-gray-100": "#F0F2F5",

        "dev-gray-200": "#E5E7EB",

        "dev-gray-300": "#CCD0D6", // Border/Placeholder/Gray 300

        "dev-gray-400": "#969DA8", // Disabled/Gray 400

        "dev-gray-500": "#717887",

        "dev-gray-600": "#4B5563", // Label/Text/Gray 600

        "dev-gray-700": "#394252",

        "dev-gray-800": "#1F2937", // 가장 진한 텍스트/Gray 800

        "dev-disabled": "#969DA8", // Disabled State (#969DA8)

        "dev-dim-50": "rgba(0, 0, 0, 0.5)", // Dim1 B50%

        "dev-dim-70": "rgba(0, 0, 0, 0.7)", // Dim2 B70%

        "dev-focus-border": "#FD28EC", // Focus Border (Fuchsia Dark를 재사용 가능)
      },

      ringColor: {
        "dev-focus-ring": "#4C79FF",
      },

      backgroundImage: {
        "dev-primary-gradient": "linear-gradient(119.36deg, #4C79FF 0%, #023E99 100%)",
      },
    },
  },
};
