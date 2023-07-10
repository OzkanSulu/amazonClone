/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens:{
        xs:"320",
        sm:"375",
        sml:"500px",
        md:"667px",
        mdl:"768",
        lg:"960px",
        lgl:"1024px",
        xl:"1280px",
      },
      colors:{
        amazon_blue:"#131921",
        amazon_light:"#232F3E",
        amazon_yellow:"#febd69",
        lightText:"#ccc",
      },
      fontFamily:{
        bodyFont:['Roboto']
      }
    },
  },
  plugins: [],
}
