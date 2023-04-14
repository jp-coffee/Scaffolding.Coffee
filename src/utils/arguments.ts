import { TArgument } from '../types'

/**
 * Gets the arguments from the command line and returns them as an object.
 * @param args The arguments to parse.
 * @returns TArgument
 * @tests ./arguments.test.ts
 */
export const getArgs = (args: string[]): TArgument => {
  const result: TArgument = {}

  args.forEach((arg) => {
    if (!arg.startsWith('--')) return
    switch (arg) {
      case '--version':
      case '--v':
        result.version = true
        break
      case '--help':
      case '--h':
        result.help = true
        break
      case '--update':
      case '--u':
        result.update = true
        break
      default:
        result[arg.replace('--', '')] = true
        break
    }
  })

  return result
}
