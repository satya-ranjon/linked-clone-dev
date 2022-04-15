module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        tall: { raw: "(min-height: 800px)" },
        // => @media (min-height: 800px) { ... }
      },
    },
  },
  plugins: [],
};
