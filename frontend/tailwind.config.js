/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
   theme: {
      extend: {
         colors: {
            text: "#e8eaed",
            background: "#121417",
            primary: "#9292e8",
            secondary: "#1d2125",
            accent: "#7a2bca",
            navText: "#a3a3a3",
         },
      },
   },
   plugins: [],
};
