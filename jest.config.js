module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  setupFiles: ['./__tests__/setup/jest.setup.js'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    './node_modules/(?!(@react-native|react-native|react-native-.*|react-navigation-.*|@react-navigation|react-navigation|@react-native-.*)/)',
  ],
};
