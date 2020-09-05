module.exports = {
  theme: {
    darkSelector: '.dark-mode',

    screens: {
      'sm': '560px',
      'md': '720px',
      'lg': '860px',
      'xl': '1080px',
    },
    container: {
      center: true,
      padding: '1rem'
    },


    extend: {}
  },

  variants: {
    backgroundColor: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd", 'hover'],
    borderColor: ["dark", "dark-focus", "dark-focus-within", 'hover'],
    textColor: ["dark", "dark-hover", "dark-active", 'hover']
  },

  plugins: [
    require('tailwindcss-dark-mode')()
  ],

  future: {
    removeDeprecatedGapUtilities: true,
  },

  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'assets/css/main.css',
      './node_modules/tailwindcss-dark-mode/prefers-dark.js',
    ]
  }
}
