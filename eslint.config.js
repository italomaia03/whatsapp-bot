import pluginJs from "@eslint/js";

export default ts.cofig(
  pluginJs.configs.recommended,
  ...ts.configs.recommended,
  prettier,
  {
    languageOptions: {
      globals: globals.node,
    }
  },
  {
    rules: {
      "no-usused-vars": "warn",
      "no-undef": "warn",
    },
  },
);
