/** @type {import('eslint').Linter.Config} */

module.exports = {
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true,
  },
  extends: ["@remix-run/eslint-config", "@remix-run/eslint-config/node"],
  plugins: ["unused-imports"],
  rules: {
    "react/display-name": 0,
    "array-callback-return": 0,
    "no-unused-vars": 0,
    "unused-imports/no-unused-imports": 2,
    "unused-imports/no-unused-vars": 1,
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
  },
  ignorePatterns: [".eslintrc.js", "./package.json", "server.js"],
};
