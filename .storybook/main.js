const path = require('path');

const custom = require('../webpack.config.js');
module.exports = {
  "stories": [
    "../packages/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // https://github.com/storybookjs/storybook/issues/13255
    // "@storybook/preset-create-react-app"
  ],
  "webpackFinal": (config) => {
    // 添加 sass 支持
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    if (custom && custom.module && custom.module.rules) {
      config = {
        ...config,
        module: {
          ...config.module,
          rules: custom.module?.rules || {},
        }
      }
    }
    return config;
  }
};
