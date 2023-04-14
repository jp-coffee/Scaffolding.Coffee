"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viteConfig = exports.devDependencies = exports.scripts = void 0;
/**
 * Scripts for Vitest package.json.
 * @returns TPKG['scripts']
 * @tests ./frameworks.test.ts
 */
exports.scripts = {
    test: 'vitest',
};
/**
 * DevDependencies for Vitest package.json.
 * @returns TPKG['devDependencies']
 * @tests ./frameworks.test.ts
 */
exports.devDependencies = {
    vite: 'latest',
    vitest: 'latest',
};
/**
 * Vitest config file for Vitest.
 * @returns string
 * @tests ./frameworks.test.ts
 */
exports.viteConfig = `import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['**/*.test.ts'],
  },
})
`;
//# sourceMappingURL=vitest.js.map