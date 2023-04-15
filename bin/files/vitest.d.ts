import { TPKG } from '../types';
/**
 * Scripts for Vitest package.json.
 * @returns TPKG['scripts']
 * @tests ./frameworks.test.ts
 */
export declare const scripts: TPKG['scripts'];
/**
 * DevDependencies for Vitest package.json.
 * @returns TPKG['devDependencies']
 * @tests ./frameworks.test.ts
 */
export declare const devDependencies: TPKG['devDependencies'];
/**
 * Vitest config file for Vitest.
 * @param typescript Whether to include TypeScript.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export declare const viteConfig: (typescript: boolean) => string;
