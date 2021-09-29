module.exports = {
  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/styles/global.sass"`,
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Safety Score Calculator";
      return args;
    });
  },
};
