export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    extensionsToTreatAsEsm: ['.ts'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    coverageReporters: ["lcov", "text", "html"],
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.ts", // Include the relevant source files
        "!src/**/*.spec.ts",
        "!src/serviceWorkerRegistration.ts",
        "!src/service-worker.ts",
        "!src/**/*.d.{ts,ts}",
        "!src/setupTests.ts",
        "!src/reportWebVitals.ts"// Exclude test files
    ],
    coverageDirectory: "<rootDir>/testCoverage",
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    "coverageThreshold": {
        "global": {
            "branches": 80,
            "functions": 80,
            "lines": 80,
            "statements": 80
        }
    }

};
