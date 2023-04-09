module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@screen': './src/ui/screen',
          '@color': './src/style/color',
          '@component': './src/ui/component',
          '@util': './src/util',
          '@enums': './src/enums',
        },
        extensions: ['.js', '.ts'],
      },
    ],
  ],
};
