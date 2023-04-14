import { describe, expect, it } from 'vitest'

import { getArgs } from './arguments'

/**
 * Test the getArgs function
 */
describe('getArgs', () => {
  it('should return an object', () => {
    const args = getArgs([])
    expect(args).not.toBeNull()
    expect(typeof args).toBe('object')
    expect(JSON.stringify(args)).toBe('{}')
  })

  it('should return an object with a version property', () => {
    const args = getArgs(['--version'])
    expect(args).not.toBeNull()
    expect(typeof args).toBe('object')
    expect(args).toHaveProperty('version')
    expect(JSON.stringify(args)).toBe('{"version":true}')
  })

  it('should return an object with a help property', () => {
    const args = getArgs(['--help'])
    expect(args).not.toBeNull()
    expect(typeof args).toBe('object')
    expect(args).toHaveProperty('help')
    expect(JSON.stringify(args)).toBe('{"help":true}')
  })

  it('should return an object with a skip property', () => {
    const args = getArgs(['--skip'])
    expect(args).not.toBeNull()
    expect(typeof args).toBe('object')
    expect(args).toHaveProperty('skip')
    expect(JSON.stringify(args)).toBe('{"skip":true}')
  })

  it('should handle multiple arguments', () => {
    const args = getArgs(['--version', '--help', '--skip'])
    expect(args).toHaveProperty('version')
    expect(args).toHaveProperty('help')
    expect(args).toHaveProperty('skip')
  })
})
