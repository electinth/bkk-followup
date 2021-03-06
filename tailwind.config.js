module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false,
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1025px",
      // => @media (min-width: 1025px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      white: {
        default: "#FFFFFF",
      },
      black: {
        default: "#000000",
      },
      blue: {
        lightest: "#D0E2FF",
        light: "#609EFF",
        default: "#1570FF",
        dark: "#0F52BB",
      },
      green: {
        lightest: "#CCF4DD",
        light: "#7AE2A6",
        default: "#00C853",
        dark: "#007832",
      },
      orange: {
        lightest: "#FFECCF",
        light: "#FFCD81",
        default: "#FF9E0D",
        dark: "#CC7E0A",
      },
      pink: {
        lightest: "#FFE8F3",
        light: "#F4B8CA",
        default: "#DF3A6B",
        dark: "#B22E56",
      },
      blueGray: {
        lightest: "#DAE1E8",
        light: "#9FB2C3",
        default: "#476A8B",
        dark: "#344E66",
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
};
