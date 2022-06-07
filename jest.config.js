/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ["__mocks__"],
  moduleNameMapper:{
    "\\.(css|less|sass|scss)$": "<rootDir>/src/__test__/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/src/__test__/__mocks__/fileMock.js"
}
};