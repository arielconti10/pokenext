/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  collectCoverageFrom: ['src/**/*.ts(x)?'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', 'src/graphql/'],
  collectCoverage: true,
  modulePaths: ['<rootDir>/src/'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  verbose: true,
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.jest.json',
    },
  },
}
