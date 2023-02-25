const path = require('path')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

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
      '@characters': path.resolve(__dirname, './src/assets/images/characters'),
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/globalStyles')
    },
    module: {
      rules: {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [{ loader: 'babel-loader' }]
      }
    },
    optimization: {
      minimizer: [
        '...',
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
              plugins: [
                ['gifsicle', { interlaced: true }],
                ['jpegtran', { progressive: true }],
                ['optipng', { optimizationLevel: 5 }],
                [
                  'svgo',
                  {
                    plugins: [
                      {
                        name: 'preset-default',
                        params: {
                          overrides: {
                            removeViewBox: false,
                            addAttributesToSVGElement: {
                              params: {
                                attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }]
                              }
                            }
                          }
                        }
                      }
                    ]
                  }
                ]
              ]
            }
          }
        })
      ]
    }
  }
}
