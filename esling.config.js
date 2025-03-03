import pluginJs from "@eslint/js";

export default [
  pluginJs.configs.recommended,
  {
    rules: {
      "no-usused-vars": "warn",
      "no-undef": "warn",
    },
  },
];
