module.exports = {
  displayName: 'nuxt-app',
  preset: '../../jest.preset.js',
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  coverageDirectory: '../../coverage/packages/nuxt-app',
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
  ],
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js',
  },
  globals: {
    'ts-jest': { tsConfig: '<rootDir>/test/tsconfig.json' },
    'vue-jest': { tsConfig: 'packages/nuxt-app/test/tsconfig.json' },
  },
};
