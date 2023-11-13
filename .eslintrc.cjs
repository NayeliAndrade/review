module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["google", "prettier", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "require-jsdoc": "off",
    "react/react-in-jsx-scope": "off",
  },
};
