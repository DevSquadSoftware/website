/**
 * @type {import('eslint').Linter.Config}
 */
 module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "unused-imports",
    "simple-import-sort",
    "prettier"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: "module",
    project: ["./tsconfig.json"]
  },
  ignorePatterns: ["*.js"],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    "prettier/prettier": [
      "error",
      // these cannot be overridden by prettier, so must pull them in here explicitly from prettier
      {
        trailingComma: "all",
        singleQuote: true,
        printWidth: 200
      },
      {
        usePrettierrc: false
      }
    ],
    "require-atomic-updates": "warn",
    "no-console": "warn",
    "unused-imports/no-unused-imports": "error",
    "no-useless-escape": "off",
    "no-duplicate-imports": "error",
    "no-tabs": ["error", { allowIndentationTabs: true }],
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-base-to-string": [
      "error",
      {
        ignoredTypeNames: ["BigNumberish"]
      }
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-angle-bracket-type-assertion": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-extraneous-class": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/ban-ts-comment": "warn",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^aurelia", "^@aurelia"],
          ["^(@|lib)(/.*|$)"],
          ["^\\u0000"],
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          ["^.+\\.?(css)$"]
        ]
      }
    ],
    "object-curly-spacing": ["error", "always"]
  },
  overrides: [
    {
      files: ["*.html"],
      plugins: ["@html-eslint"],
      parser: "@html-eslint/parser",
      extends: ["plugin:@html-eslint/recommended"],
    }
  ]
};
