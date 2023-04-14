"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePackageName = exports.validateRoot = void 0;
/**
 * Validate the root of a project
 * @param name The name of the project
 * @returns A boolean
 * @tests ./validation.test.ts
 */
const validateRoot = (name) => {
    var _a;
    if (name === '.')
        return true;
    if (name === ((_a = process.cwd()) === null || _a === void 0 ? void 0 : _a.split('/').pop()))
        return true;
    return false;
};
exports.validateRoot = validateRoot;
/**
 * Validate the name of a package
 * @param name The name of the package
 * @returns A boolean or a string
 * @tests ./validation.test.ts
 */
const validatePackageName = (name) => {
    if ((0, exports.validateRoot)(name))
        return true;
    const nameRegex = /^[a-z][a-zA-Z0-9-]*[a-zA-Z0-9]+$/;
    if (!nameRegex.test(name)) {
        if (!/^[a-z]/.test(name)) {
            return 'The name must start with a lowcase letter';
        }
        if (!/[a-zA-Z0-9]$/.test(name)) {
            return 'The name must end with a letter or a number';
        }
        return 'The name must contain only letters, numbers and dashes';
    }
    return true;
};
exports.validatePackageName = validatePackageName;
//# sourceMappingURL=validation.js.map