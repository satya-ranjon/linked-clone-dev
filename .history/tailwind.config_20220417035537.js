module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        ssm: "400px",
        llg: "1080px",
        xxl: "1380px",
        xxxl: "1380px",
        // => @media (min-height: 800px) { ... }
      },
    },
  },
  plugins: [],
};
