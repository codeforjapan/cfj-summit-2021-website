module.exports = {
  plugins: ['prettier'],
  extends: [
    '../../.eslintrc.json',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/vue',
    'plugin:prettier/recommended',
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
