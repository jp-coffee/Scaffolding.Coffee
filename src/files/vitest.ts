import { TPKG } from '../types'

/**
 * Scripts for Vitest package.json.
 * @returns TPKG['scripts']
 * @tests ./frameworks.test.ts
 */
export const scripts: TPKG['scripts'] = {
  test: 'vitest',
}

/**
 * DevDependencies for Vitest package.json.
 * @returns TPKG['devDependencies']
 * @tests ./frameworks.test.ts
 */
export const devDependencies: TPKG['devDependencies'] = {
  vite: 'latest',
  vitest: 'latest',
}

/**
 * Vitest config file for Vitest.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export const viteConfig = `import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['**/*.test.ts'],
  },
})
`
