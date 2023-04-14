"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const arguments_1 = require("./arguments");
/**
 * Test the getArgs function
 */
(0, vitest_1.describe)('getArgs', () => {
    (0, vitest_1.it)('should return an object', () => {
        const args = (0, arguments_1.getArgs)([]);
        (0, vitest_1.expect)(args).not.toBeNull();
        (0, vitest_1.expect)(typeof args).toBe('object');
        (0, vitest_1.expect)(JSON.stringify(args)).toBe('{}');
    });
    (0, vitest_1.it)('should return an object with a version property', () => {
        const args = (0, arguments_1.getArgs)(['--version']);
        (0, vitest_1.expect)(args).not.toBeNull();
        (0, vitest_1.expect)(typeof args).toBe('object');
        (0, vitest_1.expect)(args).toHaveProperty('version');
        (0, vitest_1.expect)(JSON.stringify(args)).toBe('{"version":true}');
    });
    (0, vitest_1.it)('should return an object with a help property', () => {
        const args = (0, arguments_1.getArgs)(['--help']);
        (0, vitest_1.expect)(args).not.toBeNull();
        (0, vitest_1.expect)(typeof args).toBe('object');
        (0, vitest_1.expect)(args).toHaveProperty('help');
        (0, vitest_1.expect)(JSON.stringify(args)).toBe('{"help":true}');
    });
    (0, vitest_1.it)('should return an object with a skip property', () => {
        const args = (0, arguments_1.getArgs)(['--skip']);
        (0, vitest_1.expect)(args).not.toBeNull();
        (0, vitest_1.expect)(typeof args).toBe('object');
        (0, vitest_1.expect)(args).toHaveProperty('skip');
        (0, vitest_1.expect)(JSON.stringify(args)).toBe('{"skip":true}');
    });
    (0, vitest_1.it)('should handle multiple arguments', () => {
        const args = (0, arguments_1.getArgs)(['--version', '--help', '--skip']);
        (0, vitest_1.expect)(args).toHaveProperty('version');
        (0, vitest_1.expect)(args).toHaveProperty('help');
        (0, vitest_1.expect)(args).toHaveProperty('skip');
    });
});
//# sourceMappingURL=arguments.test.js.map