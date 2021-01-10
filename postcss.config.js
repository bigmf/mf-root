module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')({
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            theme: {
              light: '#fff',
              dark: '#001529'
            }
          },
          keyframes: {
            wiggle: {
              '0%, 100%': { transform: 'rotate(-3deg)' },
              '50%': { transform: 'rotate(3deg)' }
            }
          },
          animation: {
            wiggle: 'wiggle 1s ease-in-out infinite'
          }
        }
      }
    }),
    require('postcss-preset-env')({ stage: 1 })
  ]
}
