export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxthq/studio",
    "@vueuse/nuxt",
    "nuxt-newsletter",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  newsletter: {
    buttondown: {
      apiKey: process.env.VITE_BUTTONDOWN_API_KEY,
      component: true, // optional
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased bg-white dark:bg-black min-h-screen",
      },
      script: [
        {
          src: "https://cdn-cookieyes.com/client_data/825c9ba7763a5f79a48f4ce7/script.js",
        },
      ],
    },
  },
  content: {
    highlight: {
      theme: "github-dark",
    },
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },
});
