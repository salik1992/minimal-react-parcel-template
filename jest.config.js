module.exports = {
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    setupFilesAfterEnv: [
        '<rootDir>/setupTests.js',
    ],
};
