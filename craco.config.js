module.exports = {
  babel: {
    plugins: [['import', { libraryName: 'antd', style: true }]],
  },
  webpack: {
    configure: (webpackConfig) => {
      const wasmExtensionRegExp = /\.wasm$/;
      webpackConfig.resolve.extensions.push('.wasm');

      webpackConfig.module.rules.forEach((rule) => {
        (rule.oneOf || []).forEach((oneOf) => {
          if (oneOf.loader && oneOf.loader.indexOf('file-loader') >= 0) {
            oneOf.exclude.push(wasmExtensionRegExp);
          }
        });
      });

      webpackConfig.module.rules.unshift({
        test: wasmExtensionRegExp,
        type: 'webassembly/experimental',
      });

      return webpackConfig;
    },
  },
};
