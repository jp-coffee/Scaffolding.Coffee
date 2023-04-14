import { TPKG } from '../types'

/**
 * DevDependencies for Tailwind CSS package.json.
 * @returns TPKG['devDependencies']
 * @tests ./frameworks.test.ts
 */
export const devDependencies: TPKG['devDependencies'] = {
  sass: 'latest',
  'sass-loader': 'latest',
}
