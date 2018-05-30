module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "./coverage",
  coveragePathIgnorePatterns: ["./node_modules", "./jest.setup.js"],
  setupFiles: ["./jest.setup.js"],
  transform: {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  }
};
