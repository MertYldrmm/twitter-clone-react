const path = require('path');

module.exports = {
  "stories": ["../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions"
  ],
  "presets": [
    path.resolve(__dirname, './next-preset.js')
  ]
}