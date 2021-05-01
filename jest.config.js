module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [ '**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)' ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.vue',
    '<rootDir>/src/templates/**/*.vue',
    '<rootDir>/src/views/**/*.vue',
    '<rootDir>/src/store/**/*.js',
    '!<rootDir>/src/**/**/index.js',
    '!<rootDir>/src/store/**/state.*.js'
  ],
}
