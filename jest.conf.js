const path = require('path')

module.exports = {
  verbose: true,
  moduleFileExtensions: [
    'js',
    'vue'
  ],
  testURL: "http://localhost/",
  testEnvironment: 'jest-environment-jsdom-global',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/water/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/setup'],
  "testRegex": "\\.test\\.(js)$",
  collectCoverage: true,
  collectCoverageFrom: [
    'water/**/*.vue'
  ]
}
