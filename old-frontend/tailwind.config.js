/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				websiteBackground: "#0f172a",
				whiteHeadersColor: "#f1f5f9",
				whiteTextColor: "#94a3b8",
			},
			fontFamily: {
				font: ["Nunito Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
