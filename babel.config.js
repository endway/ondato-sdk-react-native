module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@ondato/assets': './assets',
          '@ondato/api': './src/api',
          '@ondato/components': './src/components',
          '@ondato/config': './src/config',
          '@ondato/core': './src/core',
          '@ondato/hooks': './src/hooks',
          '@ondato/i18n': './src/i18n',
          '@ondato/modules': './src/modules',
          '@ondato/navigation': './src/navigation',
          '@ondato/screens': './src/screens',
          '@ondato/theme': './src/theme',
          '@ondato/utils': './src/utils',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@ondato/env',
        path: '.env',
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
