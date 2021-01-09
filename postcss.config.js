module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')({
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            menu: {
              DEFAULT: '#001529',
              dark: '#000c17',
              active: '#1890ff'
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
