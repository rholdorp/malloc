module.exports = {
  setupFilesAfterEnv: [
    '<rootDir>/setup-tests.js'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/'
  ]
}
