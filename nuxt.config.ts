import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "@nuxt/content", "@nuxtjs/seo"],

  site: {
    url: "https://kajetan.io",
    name: "Blog & Portfolio",
    description:
      "This is my personal blog and portfolio website. Here I share my thoughts, experiences and projects.",
    defaultLocale: "en",
  },

  runtimeConfig: {
    public: {},
    private: {
      apiKey: process.env.VITE_BUTTONDOWN_API_KEY,
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === "production"
          ? { preset: ["default", { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },

  css: ["~/assets/css/main.css"],

  newsletter: {
    buttondown: {
      apiKey: process.env.VITE_BUTTONDOWN_API_KEY!!,
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
          src: "https://cdn-cookieyes.com/client_data/f04527b7528b86eaf10d241d/script.js",
        },
      ],
      title: "Blog & Portfolio",
    },
  },

  content: {
    highlight: {
      theme: "github-light",
    },
  },

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },

  vite: {
    plugins: [svgLoader({})],
  },

  compatibilityDate: "2024-10-25",
});