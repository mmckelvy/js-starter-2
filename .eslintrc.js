module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ]
}
