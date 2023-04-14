/**
 * Validate the root of a project
 * @param name The name of the project
 * @returns A boolean
 * @tests ./validation.test.ts
 */
export const validateRoot = (name: string): boolean => {
  if (name === '.') return true
  if (name === process.cwd()?.split('/').pop()) return true
  return false
}

/**
 * Validate the name of a package
 * @param name The name of the package
 * @returns A boolean or a string
 * @tests ./validation.test.ts
 */
export const validatePackageName = (name: string): string | boolean => {
  if (validateRoot(name)) return true

  const nameRegex = /^[a-z][a-zA-Z0-9-]*[a-zA-Z0-9]+$/

  if (!nameRegex.test(name)) {
    if (!/^[a-z]/.test(name)) {
      return 'The name must start with a lowcase letter'
    }
    if (!/[a-zA-Z0-9]$/.test(name)) {
      return 'The name must end with a letter or a number'
    }
    return 'The name must contain only letters, numbers and dashes'
  }

  return true
}
