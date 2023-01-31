module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      fontSize: {
        extraSmall: ['10px', '12px'],
        xs: ['12px', '14px'],
        sm: ['14px', '16px'],
        md: ['16px', '18px'],
        lg: ['18px', '20px'],
        xl: ['22px', '24px']
      },

      screens: {
        'phone': '320px',
        // => @media (min-width: 320px) { ... }

        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },

      extend: {
        colors: {
          "black": "#000000",
          "lightgrey": "#EAEAEA",
          "darkgrey": "#5C5C5C",
          "white": "#FFFFFF"
        }
      },

      fontFamily: {
        "nunito": ["Nunito"]
      },

      maxWidth: {
        "14em": "14em",
        "phone-card": "12rem",
        "tablet-card": "16rem",
        "xs": "20rem",
        "prose": "40ch",
        "screen-xl": "1280px"
      }
    },
    plugins: [],
  }