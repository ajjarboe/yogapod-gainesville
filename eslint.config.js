import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import betterTailwind from "eslint-plugin-better-tailwindcss";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
  { ignores: ["dist", "node_modules", "**/*.css", "scripts/**", "public/**"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "better-tailwindcss": betterTailwind,
    },
    settings: {
      "better-tailwindcss": {
        entryPoint: "src/styles/theme.css",
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": "off",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "better-tailwindcss/no-unknown-classes": "off",
      "better-tailwindcss/enforce-canonical-classes": "off",
      "no-restricted-syntax": [
        "error",
        {
          selector: "Literal[value=/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/]",
          message: "Hex colors belong only in src/styles/palette.css.",
        },
        {
          selector: "JSXAttribute[name.name='className'] Literal[value=/\\[/]",
          message: "No arbitrary Tailwind. Add a token in src/styles/theme.css.",
        },
        {
          selector: "JSXAttribute[name.name='className'] TemplateElement[value.raw=/\\[/]",
          message: "No arbitrary Tailwind. Add a token in src/styles/theme.css.",
        },
      ],
    },
  },
  {
    files: ["src/content/checkout.ts"],
    rules: {
      "no-restricted-syntax": "off",
    },
  },
  {
    files: ["src/pages/**/*.{ts,tsx}", "src/components/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "Literal[value=/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/]",
          message: "Hex colors belong only in src/styles/palette.css.",
        },
        {
          selector: "JSXAttribute[name.name='className'] Literal[value=/\\[/]",
          message: "No arbitrary Tailwind. Add a token in src/styles/theme.css.",
        },
        {
          selector: "CallExpression[callee.name='fetch']",
          message: "Pages and components do not fetch. Use a hook in src/api/.",
        },
        {
          selector: "Literal[value=/app\\.arketa\\.co/]",
          message: "Arketa URLs belong only in src/content/checkout.ts.",
        },
        {
          selector: "TemplateElement[value.raw=/app\\.arketa\\.co/]",
          message: "Arketa URLs belong only in src/content/checkout.ts.",
        },
      ],
    },
  },
);
