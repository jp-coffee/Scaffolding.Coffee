import { EFramework, TPKG } from '../types';
/**
 * Returns the devDependencies for TypeScript.
 * @returns TPKG['devDependencies']
 * @tests ./frameworks.test.ts
 */
export declare const devDependencies: () => TPKG['devDependencies'];
/**
 * Returns the tsconfig.json file.
 * @param framework The framework.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export declare const tsconfig: (framework: EFramework) => string;
