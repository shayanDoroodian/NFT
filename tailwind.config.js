const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
     
        dark1: "rgb(11,15,18)",
        gray1: "rgb(151,155,158)",
        darkgreen:"rgb(0,52,20)"
     
      },
      fontFamily: {
        inter: ["inter", ...defaultTheme.fontFamily.sans],
        lobster: ["lobster", ...defaultTheme.fontFamily.sans],
      },
      rotate: { 135: "135deg", 45: "45deg  " },
      backgroundImage: {
        "gradient-gray":
          "linear-gradient(180deg, rgba(112, 130, 70, 0) 30%, rgba(112, 130, 70, 0.1) 100%)",
      
       
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
    
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem',
      },
      screens: {
        xs: "100%",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
