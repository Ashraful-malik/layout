module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/sass/main.scss";`,
      },
      //   scss: {
      //     additionalData: `@import "~@/assets/sass/main.scss";`,
      //   },
    },
  },
};
