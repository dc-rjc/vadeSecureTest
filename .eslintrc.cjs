require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
    "plugin:vue/recommended",
    "prettier",
  ],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};