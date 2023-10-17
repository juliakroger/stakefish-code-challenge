module.exports = {
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "json", "node"],
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jsdom",
};
