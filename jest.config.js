module.exports = {
  verbose: true,
  collectCoverage: true,
  setupTestFrameworkScriptFile: '<rootDir>/src/tests/setupTests.js',
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/*.{config}.{js}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/vendor/**',
    '!**/coverage/**',
    '!**/src/assets/**',
    '!**/semantic/**',
    '!**/src/index.js',
    '!**/cypress/**',
    '!**/src/components/App.js',
    '!**/src/config.js'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/cypress/',
    '<rootDir>/node_modules/'
  ],
  'moduleNameMapper': {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  'transform': {
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/jest.fileTransformer.config.js'
  }
}
