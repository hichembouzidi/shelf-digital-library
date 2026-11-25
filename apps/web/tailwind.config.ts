import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: { ink: "#172033", muted: "#667085", brand: "#6258e8", paper: "#f7f7fb" }, boxShadow: { soft: "0 12px 40px rgba(24, 32, 55, .07)" } } },
  plugins: []
};
export default config;
