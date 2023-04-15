import { EFramework, TPKG } from '../types'

/**
 * DevDependencies for Tailwind CSS package.json.
 * @returns TPKG['devDependencies']
 * @tests ./frameworks.test.ts
 */
export const devDependencies: TPKG['devDependencies'] = {
  autoprefixer: 'latest',
  postcss: 'latest',
  tailwindcss: 'latest',
}

/**
 * Config file for PostCSS.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export const postcssConfig = `module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer')],
}
`

/**
 * Config file for Tailwind CSS.
 * @param framework The framework.
 * @param typescript Whether to include TypeScript.
 * @param spa Whether to include SPA.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export const tailwindcssConfig = (
  framework: EFramework,
  typescript: boolean,
  spa: boolean,
): string => {
  switch (framework) {
    case EFramework.NUXT:
      return `${
        typescript
          ? `/** @type {import('tailwindcss').Config} */

`
          : ''
      }export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',${
      spa
        ? ``
        : `
    './pages/**/*.vue',`
    }
    './app.vue',
    './**/*.vue',
    './**/*.scss',
    './**/*css',
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
`
      break
    default:
      return ``
      break
  }
}
