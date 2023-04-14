"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArgs = void 0;
/**
 * Gets the arguments from the command line and returns them as an object.
 * @param args The arguments to parse.
 * @returns TArgument
 * @tests ./arguments.test.ts
 */
const getArgs = (args) => {
    const result = {};
    args.forEach((arg) => {
        if (!arg.startsWith('--'))
            return;
        switch (arg) {
            case '--version':
            case '--v':
                result.version = true;
                break;
            case '--help':
            case '--h':
                result.help = true;
                break;
            case '--update':
            case '--u':
                result.update = true;
                break;
            default:
                result[arg.replace('--', '')] = true;
                break;
        }
    });
    return result;
};
exports.getArgs = getArgs;
//# sourceMappingURL=arguments.js.map