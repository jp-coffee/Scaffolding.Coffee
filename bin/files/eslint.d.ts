import { EFramework, TPKG } from '../types';
/**
 * Scripts for ESLint.
 * @returns TPKG['scripts']
 * @tests ./frameworks.test.ts
 */
export declare const scripts: TPKG['scripts'];
/**
 * Returns the devDependencies for ESLint.
 * @param typescript Whether to include TypeScript.
 * @returns TPKG['devDependencies']
 * @tests ./frameworks.test.ts
 */
export declare const devDependencies: (typescript: boolean) => TPKG['devDependencies'];
/**
 * Returns the .eslintrc.js file.
 * @param framework The framework.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export declare const eslintrc: (framework: EFramework) => string;
