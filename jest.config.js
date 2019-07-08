module.exports = {
  moduleFileExtensions: [
    "ts",
    "js",
    "vue"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    ".*\\.(vue)$": "vue-jest"
  },
  globals: {
    "vue-jest": {
      "babelConfig": false
    }
  },
  testRegex: "(src/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  testPathIgnorePatterns: [
    "/node_modules/",
    "src/__tests__/test-helper",
    "dist",
    ".nuxt"
  ],
  moduleNameMapper: {
    "^@assets/(.*)$": "<rootDir>/src/assets/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@core/(.*)$": "<rootDir>/src/core/$1",
    "^@middleware/(.*)$": "<rootDir>/src/middleware/$1",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@store/(.*)$": "<rootDir>/src/store/$1",
    "^@type/(.*)$": "<rootDir>/src/types/$1",
  },
  snapshotSerializers: [
    "jest-serializer-vue"
  ],
  coverageReporters: ["text"]
};
