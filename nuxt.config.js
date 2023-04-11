/*!

 =========================================================
 * Nuxt Black Dashboard - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/nuxt-black-dashboard
 * Copyright 2023 Creative Tim (https://www.creative-tim.com)

 * Coded by Creative Tim

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Nuxt Black Dashboard",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800",
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css",
      },
    ],
    bodyAttrs: {
      class: "", // Add `white-content` class here to enable "white" mode.
    },
  },
  router: {
    linkExactActiveClass: "active",
    // middleware: ['auth1']
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "assets/css/demo.css",
    "assets/css/nucleo-icons.css",
    "assets/sass/black-dashboard.scss",
    "perfect-scrollbar/css/perfect-scrollbar.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [`~/plugins/dashboard-plugin.js`, `~/plugins/axios.js`],
  // Auto import components: https://go.nuxtjs.dev/config-components
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/pwa", "nuxt-i18n", "@nuxtjs/axios", "@nuxtjs/bootstrap-vue", '@nuxtjs/auth', "@nuxtjs/auth-next", "cookie-universal-nuxt",],
  i18n: {
    locales: [
      {
        code: "en",
        file: "en.js",
      },
      {
        code: "ar",
        file: "ar.js",
      },
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "en",
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { },
    babel: {
      plugins: [
        [
          "component",
          {
            libraryName: "element-ui",
            styleLibraryName: "theme-chalk",
          },
        ],
      ],
    },
  },
  env: {
    baseApiUrl: process.env.BASE_URL || 'http://192.168.1.107:7654/api/'
  },

};
