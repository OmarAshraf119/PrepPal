module.exports = function(api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        [
          'module-resolver',
          {
            alias: {
              '@components': './components', // Example alias for components
              '@assets': './assets',            // Example alias for assets
              '@screens': './screens',
              '@services': './services',

              // Add more aliases as needed
            },
            extensions: [
                '.js',
                '.jsx',
                '.ts',
                '.tsx',
                '.android.js',
                '.ios.js',
                '.web.js'
              ]
          },
        ],
      ],
    };
  };