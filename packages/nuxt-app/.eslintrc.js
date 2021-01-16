module.exports = {
  extends: [
    '../../.eslintrc.json',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  ignorePatterns: ['!**/*', '.eslintrc.js'],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    extraFileExtensions: ['.vue'],
  },
  rules: {},
};
