import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
  },
  {
    ignores: ["dist/*", "src/migrations/*", "src/seeders/*"]
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { rules: {
      "no-extra-boolean-cast": "off",
      "object-curly-spacing": ["warn", "always"],
      "space-in-parens": ["warn", "never"],
      "semi": ["error", "always"],
    }
  },
];
