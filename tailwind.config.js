module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        ssm: "400px",
        // => @media (min-height: 800px) { ... }
      },
    },
  },
  plugins: [],
};
