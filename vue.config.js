module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/assets/scss/scoped.scss";
          `,
      },
    },
  },
  lintOnSave: true
}
