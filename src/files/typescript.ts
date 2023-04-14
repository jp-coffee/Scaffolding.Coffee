import { EFramework, TPKG } from '../types'

/**
 * Returns the devDependencies for TypeScript.
 * @returns TPKG['devDependencies']
 * @tests ./frameworks.test.ts
 */
export const devDependencies = (): TPKG['devDependencies'] => ({
  typescript: 'latest',
})

/**
 * Returns the tsconfig.json file.
 * @param framework The framework.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export const tsconfig = (framework: EFramework): string => {
  switch (framework) {
    case EFramework.NUXT:
      return `{
	// https://nuxt.com/docs/guide/concepts/typescript
	"extends": "./.nuxt/tsconfig.json"
}
`
      break
    default:
      return `{}`
      break
  }
}
