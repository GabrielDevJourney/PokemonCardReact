import type { Config } from 'jest';

const config: Config = {
    rootDir: './',

    // Use the full module name for clarity and compatibility with Jest 28+
    testEnvironment: 'jest-environment-jsdom',

    setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],

    transform: {
        '^.+\\.tsx?$': ['ts-jest', { useESM: true }],
    },

    // Keep this if you use ESM imports in ts/tsx files
    extensionsToTreatAsEsm: ['.ts', '.tsx'],

    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/mocks/fileMock.js',
    },
};

export default config;
