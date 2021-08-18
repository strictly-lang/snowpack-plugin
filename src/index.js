const strictly = require("@strictly-lang/compiler")

module.exports = function (_snowpackConfig, pluginOptions) {
  const compiler = strictly({ cwd: pluginOptions.cwd });

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