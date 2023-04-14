import { EFramework, TPKG } from '../types';
/**
 * DevDependencies for Tailwind CSS package.json.
 * @returns TPKG['devDependencies']
 * @tests ./frameworks.test.ts
 */
export declare const devDependencies: TPKG['devDependencies'];
/**
 * Config file for PostCSS.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export declare const postcssConfig = "module.exports = {\n  plugins: [require('tailwindcss'), require('autoprefixer')],\n}\n";
/**
 * Config file for Tailwind CSS.
 * @param framework The framework.
 * @param typescript Whether to include TypeScript.
 * @param spa Whether to include SPA.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export declare const tailwindcssConfig: (framework: EFramework, typescript: boolean, spa: boolean) => string;
