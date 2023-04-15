"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eslintrc = exports.devDependencies = exports.scripts = void 0;
const types_1 = require("../types");
/**
 * Scripts for ESLint.
 * @returns TPKG['scripts']
 * @tests ./frameworks.test.ts
 */
exports.scripts = {
    lint: 'eslint --ext .js,.vue,.ts .',
    'lint:fix': 'eslint --ext .js,.vue,.ts . --fix',
};
/**
 * Returns the devDependencies for ESLint.
 * @param typescript Whether to include TypeScript.
 * @returns TPKG['devDependencies']
 * @tests ./frameworks.test.ts
 */
const devDependencies = (typescript) => {
    const deps = {
        eslint: 'latest',
        'eslint-config-prettier': 'latest',
        'eslint-formatter-pretty': 'latest',
        'eslint-plugin-import': 'latest',
        'eslint-plugin-prettier': 'latest',
        'eslint-plugin-vitest': 'latest',
        'eslint-plugin-vue': 'latest',
        prettier: 'latest',
    };
    if (typescript) {
        deps['@typescript-eslint/eslint-plugin'] = 'latest';
        deps['@typescript-eslint/parser'] = 'latest';
    }
    return deps;
};
exports.devDependencies = devDependencies;
/**
 * Returns the .eslintrc.js file.
 * @param framework The framework.
 * @param typescript Whether to include TypeScript.
 * @returns string
 * @tests ./frameworks.test.ts
 */
const eslintrc = (framework, typescript) => {
    switch (framework) {
        case types_1.EFramework.NUXT:
            return `{
  "root": true,
  "env": {
    "browser": false,
    "es2020": false,
    "node": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",${typescript
                ? `
    "plugin:@typescript-eslint/recommended",
    `
                : ''}
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": [${typescript ? `"@typescript-eslint", ` : ''}"prettier", "import", "vue", "vitest"],
  "parser": "vue-eslint-parser",
  "parserOptions": {${typescript
                ? `
"parser": "@typescript-eslint/parser",`
                : ``}
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "overrides": [
    {
      "files": ["*.vue", "*.ts"]
    }
  ],
  "ignorePatterns": ["node_modules/", "dist/", "build/", "coverage/", "public/"],
  "rules": {
    "vue/multi-word-component-names": "off",
    "prettier/prettier": ["error", {
      "semi": false,
      "singleQuote": true,
      "trailingComma": "all",
      "proseWrap": "always",
      "endOfLine": "auto",
      "tabWidth": 2
    }],
  ${typescript
                ? `"@typescript-eslint/explicit-function-return-type": "off",`
                : ''}
    "no-debugger": "error",
    "no-console": ["warn", { "allow": ["warn", "error", "debug"]}],
    "no-warning-comments": ["warn", { "terms": ["todo", "fixme", "xxx"], "location": "anywhere" }],
    "sort-imports": [
      "error",
      {
        "ignoreCase": false,
        "ignoreDeclarationSort": true,
        "ignoreMemberSort": false
      }
    ],
    "import/order": [
      "error",
      {
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always"
      }
    ]
  }
}
`;
            break;
        default:
            return `{}`;
            break;
    }
};
exports.eslintrc = eslintrc;
//# sourceMappingURL=eslint.js.map