/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        red: "#F04248",
        black: "#000000",
        gray: "#5F5F5F",
        white: "#FFFFFF",
       
      },
      fontFamily:{
        sans:['IRANSansX', 'sans-serif']
      },
      fontSize: {
        'text-header': '17.96px', // تنظیم اندازه فونت به 17.96px
      },
      fontWeight: {
        'font-medium': 600, // تنظیم وزن فونت به 600
      },
      lineHeight: {
        'line-tight': '1.0', // تنظیم ارتفاع خط به 100%
      },
      letterSpacing: {
        'tracking-tight': '0%', // تنظیم فاصله بین حروف به 0%
      },

    },
  },
  plugins: [require("daisyui")],
};
