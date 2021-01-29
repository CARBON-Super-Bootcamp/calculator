module.exports = {
  collectCoverageFrom: ["<rootDir>/src/lib/todo/reducer.js"],
  testRegex: "(/__tests_/.*|\\.(spec))\\.(js)$",
  coverageReporters: ["html", "text-summary"],
  coverageDirectory: "<rootDir>/coverage",
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};
