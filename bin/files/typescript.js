"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsconfig = exports.devDependencies = void 0;
const types_1 = require("../types");
/**
 * Returns the devDependencies for TypeScript.
 * @returns TPKG['devDependencies']
 * @tests ./frameworks.test.ts
 */
const devDependencies = () => ({
    typescript: 'latest',
});
exports.devDependencies = devDependencies;
/**
 * Returns the tsconfig.json file.
 * @param framework The framework.
 * @returns string
 * @tests ./frameworks.test.ts
 */
const tsconfig = (framework) => {
    switch (framework) {
        case types_1.EFramework.NUXT:
            return `{
	// https://nuxt.com/docs/guide/concepts/typescript
	"extends": "./.nuxt/tsconfig.json"
}
`;
            break;
        default:
            return `{}`;
            break;
    }
};
exports.tsconfig = tsconfig;
//# sourceMappingURL=typescript.js.map