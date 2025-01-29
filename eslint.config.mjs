import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    parser: "@babel/eslint-parser", // Add this parser
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: "module", // Ensure this is here
    },
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        window: "readonly", 
        document: "readonly",
        navigator: "readonly",
        console: "readonly",
        process: "readonly",
        module: "readonly",
        require: "readonly",
      },
    },
    rules: {
      // Custom ESLint rules
    },
  },
];

export default eslintConfig;
