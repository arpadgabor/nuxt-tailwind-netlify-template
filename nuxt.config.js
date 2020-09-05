import path from 'path'

export default {
  mode: 'universal',
  target: 'static',
  generate: {
    fallback: '404.html', // for Netlify
    interval: 50
  },

  head: {
    htmlAttrs: { lang: 'en' },
    title: `Hey there!`,
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#0f1231' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'WIP > Arpad Gabor personal website.' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com/', crossorigin: true },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com/', crossorigin: true },
      { rel: 'preconnect', href: 'https://images.unsplash.com/', crossorigin: true },
    ],
    script: [
      { src: '/scripts/lazysize.js', async: '' },
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
    ]
  },

  css: ['~assets/css/tailwind.css'],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/color-mode'
  ],

  modules: [
    '@nuxt/content',
  ],

  content: {
    markdown: {
      prism: {
        theme: false
      }
    }
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  },

  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'tailwindcss': path.resolve(__dirname, './tailwind.config.js'),
        'postcss-nested': {}
      }
    },
    preset: {
      stage: 1
    }
  }
}
