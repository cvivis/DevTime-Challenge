/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind가 클래스명을 탐색할 파일 경로들
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Pages Router 사용 시 필수
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // 컴포넌트 폴더
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // src 폴더를 쓴다면 필수
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
