module.exports = {
  projects: [
    'workspaces/web-app',
    {
      testMatch: ['<rootDir>/dummy']
    }
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'pages/*.js',
    '!**/jest.config.js',
    '!**/_document.js',
    '!**/*.test.js',
    '!**/__mocks__/**.js',
    '!**/node_modules/**',
    '!**/.next/**'
  ],
  coverageReporters: [
    'text-summary',
    'lcov'
  ]
}
