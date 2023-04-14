module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        alias: {
          '@screen': './src/ui/screen',
          '@color': './src/style/color',
          '@component': './src/ui/component',
          '@util': './src/util',
          '@interface': './src/types/interface',
          '@enums': './src/types/enums',
        },
        extensions: ['.js', '.ts'],
      },
    ],
  ],
};
