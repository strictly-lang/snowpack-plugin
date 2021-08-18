const strictly = require("@strictly-lang/compiler")

module.exports = function (_snowpackConfig, _pluginOptions) {
  const compiler = strictly({ cwd: __dirname });

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