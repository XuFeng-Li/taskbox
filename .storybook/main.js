module.exports = {
  "stories": [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // https://github.com/storybookjs/storybook/issues/13255
    // "@storybook/preset-create-react-app"
  ]
}
