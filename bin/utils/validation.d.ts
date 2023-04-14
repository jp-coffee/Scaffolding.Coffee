/**
 * Validate the root of a project
 * @param name The name of the project
 * @returns A boolean
 * @tests ./validation.test.ts
 */
export declare const validateRoot: (name: string) => boolean;
/**
 * Validate the name of a package
 * @param name The name of the package
 * @returns A boolean or a string
 * @tests ./validation.test.ts
 */
export declare const validatePackageName: (name: string) => string | boolean;
