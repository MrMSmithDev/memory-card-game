const path = require('path')

module.exports = {
  eslint: {
    rules: {
      indent: ['error', 2],
      'no-console': 'off',
      quotes: ['error', 'single'],
      'react/react-in-jsx-scope': 'off',
      semi: ['error', 'never'],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto'
        }
      ]
    }
  },
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, './src/app'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@fonts': path.resolve(__dirname, './public/static/fonts'),
      '@images': path.resolve(__dirname, './public/static/images'),
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/globalStyles')
    },
    module: {
      rules: {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [{ loader: 'babel-loader' }]
      }
    }
  }
}
