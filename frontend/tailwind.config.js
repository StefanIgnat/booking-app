/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        brown:{800: '#874F41',},
        pink:{800: '#FFA2B6',},
        grey:{800: '#E9E9E1',},
        orange:{800: '#E43D12',},
        yellow:{800:'#EFB11D',},
      },
    },
    container: {
      padding: {
        md: "10rem",
      },
    },
  },
  plugins: [],
};

