module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jest/recommended",
        "plugin:testing-library/react",
        'plugin:prettier/recommended'
    ],
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: [],
    root: true,
    rules: {
        "indent": ["error", 2],
        "no-console": "off",
        "quotes": ["error", "single"],
        "react/react-in-jsx-scope": "off",
        "semi": ["error", "never"],
        "prettier/prettier": [
            "error", { "endOfLine": "off" }
        ]
    },
    settings: {
        react: {
            version: "detect"
        }
    }
}