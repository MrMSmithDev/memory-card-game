const path = require('path')

module.exports = {
    eslint: {
        rules: {
            "indent": ["error", 2],
            "no-console": "off",
            "quotes": ["error", "single"],
            "react/react-in-jsx-scope": "off",
            "semi": ["error", "never"],
            "prettier/prettier": [
                "error",
                {
                    "endOfLine": "off"
                }
            ]
        }
    },
    webpack: {
        alias: {
            '@app': path.resolve(__dirname, './src/app'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@images': path.resolve(__dirname, './src/assets/images'),
            '@components': path.resolve(__dirname, './src/components')
        }
    }
}