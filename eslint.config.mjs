import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // BB: The 'next/core-web-vitals' config usually includes all the TypeScript rules you need!
  ...compat.extends("next/core-web-vitals"),
  
  // BB: Here is our new rule override! Right in its own object.
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },

  // This part stays the same
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;