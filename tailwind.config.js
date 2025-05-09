module.exports = {
    content: ["./src/**/*.{html,js}"], // Files to scan for classes
    theme: {
      extend: {
        colors: {
          'custom-blue': '#1e40af', // Add custom colors
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // Custom font
        },
      },
    },
    plugins: [],
  }

  module.exports = {
    theme: {
      extend: {
        gridTemplateRows: {
          // Simple 16 row grid
          '16': 'repeat(16, minmax(0, 1fr))',
  
          // Complex site-specific row configuration
          'layout': '200px minmax(900px, 1fr) 100px',
        }
      }
    }
  }