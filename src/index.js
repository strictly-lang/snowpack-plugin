const strictly = require("@strictly-lang/compiler")

module.exports = function (snowpackConfig,  _pluginOptions) {
  const compiler = strictly({ cwd: snowpackConfig.root });

  return {
    name: 'strictly-plugin',
    resolve: {
      input: ['.sly'],
      output: ['.js'],
    },
    load({ filePath }) {
      return compiler({ filePath })
    },
  };
};