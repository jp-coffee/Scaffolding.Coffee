"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tailwindcssConfig = exports.postcssConfig = exports.devDependencies = void 0;
const types_1 = require("../types");
/**
 * DevDependencies for Tailwind CSS package.json.
 * @returns TPKG['devDependencies']
 * @tests ./frameworks.test.ts
 */
exports.devDependencies = {
    autoprefixer: 'latest',
    postcss: 'latest',
    tailwindcss: 'latest',
};
/**
 * Config file for PostCSS.
 * @returns string
 * @tests ./frameworks.test.ts
 */
exports.postcssConfig = `module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer')],
}
`;
/**
 * Config file for Tailwind CSS.
 * @param framework The framework.
 * @param typescript Whether to include TypeScript.
 * @param spa Whether to include SPA.
 * @returns string
 * @tests ./frameworks.test.ts
 */
const tailwindcssConfig = (framework, typescript, spa) => {
    switch (framework) {
        case types_1.EFramework.NUXT:
            return `${typescript
                ? `/** @type {import('tailwindcss').Config} */

`
                : ''}export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',${spa
                ? ``
                : `
    './pages/**/*.vue',`}
    './app.vue',
    './**/*.vue',
    './**/*.scss',
    './**/*css'
  ],
  theme: {
    extend: {
      colors: {
        'mine-shaft': {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#313131',
          950: '#242424',
        },
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
`;
            break;
        default:
            return ``;
            break;
    }
};
exports.tailwindcssConfig = tailwindcssConfig;
//# sourceMappingURL=tailwindcss.js.map