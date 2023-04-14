import { describe, expect, it } from 'vitest'

import { EAnswer, EPromptType } from '../types'

import { usePrompt } from './prompts'

/**
 * Test the usePrompt function
 */
describe('usePrompt', () => {
  it('should return an empty array', () => {
    const prompt = usePrompt(null, EAnswer.NAME, '')
    expect(prompt).not.toBeNull()
    expect(Array.isArray(prompt)).toBeTruthy()
    expect(prompt.length).toBe(0)
  })

  it('should return an array with a text prompt with no options', () => {
    const prompt = usePrompt(EPromptType.TEXT, EAnswer.NAME, 'message')
    expect(prompt).not.toBeNull()
    expect(Array.isArray(prompt)).toBeTruthy()
    expect(prompt.length).toBe(1)
    expect(JSON.stringify(prompt)).toBe(
      JSON.stringify([
        {
          type: EPromptType.TEXT,
          name: 'name',
          message: 'message',
          initial: '',
        },
      ]),
    )
  })

  it('should return an array with a text prompt with options', () => {
    const prompt = usePrompt(EPromptType.TEXT, EAnswer.NAME, 'message', {
      initial: 'initial',
      format: (value: string | number | boolean | null) => value as string,
      validate: () => true,
      onState: () => undefined,
    })
    expect(prompt).not.toBeNull()
    expect(Array.isArray(prompt)).toBeTruthy()
    expect(prompt.length).toBe(1)
    expect(JSON.stringify(prompt)).toBe(
      JSON.stringify([
        {
          type: EPromptType.TEXT,
          name: 'name',
          message: 'message',
          initial: 'initial',
          format: (value: string) => value,
          validate: () => true,
          onState: () => undefined,
        },
      ]),
    )
  })

  it('should return an array with a confirm prompt with no options', () => {
    const prompt = usePrompt(EPromptType.CONFIRM, EAnswer.NAME, 'message')
    expect(prompt).not.toBeNull()
    expect(Array.isArray(prompt)).toBeTruthy()
    expect(prompt.length).toBe(1)
    expect(JSON.stringify(prompt)).toBe(
      JSON.stringify([
        {
          type: EPromptType.CONFIRM,
          name: 'name',
          message: 'message',
          initial: false,
        },
      ]),
    )
  })

  it('should return an array with a confirm prompt with options', () => {
    const prompt = usePrompt(EPromptType.CONFIRM, EAnswer.NAME, 'message', {
      initial: true,
    })
    expect(prompt).not.toBeNull()
    expect(Array.isArray(prompt)).toBeTruthy()
    expect(prompt.length).toBe(1)
    expect(JSON.stringify(prompt)).toBe(
      JSON.stringify([
        {
          type: EPromptType.CONFIRM,
          name: 'name',
          message: 'message',
          initial: true,
        },
      ]),
    )
  })

  it('should return an array with a toggle prompt with no options', () => {
    const prompt = usePrompt(EPromptType.TOGGLE, EAnswer.NAME, 'message')
    expect(prompt).not.toBeNull()
    expect(Array.isArray(prompt)).toBeTruthy()
    expect(prompt.length).toBe(1)
    expect(JSON.stringify(prompt)).toBe(
      JSON.stringify([
        {
          type: EPromptType.TOGGLE,
          name: 'name',
          message: 'message',
          initial: false,
          active: 'yes',
          inactive: 'no',
        },
      ]),
    )
  })

  it('should return an array with a toggle prompt with options', () => {
    const prompt = usePrompt(EPromptType.TOGGLE, EAnswer.NAME, 'message', {
      active: 'active',
      inactive: 'inactive',
    })
    expect(prompt).not.toBeNull()
    expect(Array.isArray(prompt)).toBeTruthy()
    expect(prompt.length).toBe(1)
    expect(JSON.stringify(prompt)).toBe(
      JSON.stringify([
        {
          type: EPromptType.TOGGLE,
          name: 'name',
          message: 'message',
          initial: false,
          active: 'active',
          inactive: 'inactive',
        },
      ]),
    )
  })

  it('should return an array with a select prompt with no choices', () => {
    const prompt = usePrompt(EPromptType.SELECT, EAnswer.NAME, 'message')
    expect(prompt).not.toBeNull()
    expect(Array.isArray(prompt)).toBeTruthy()
    expect(prompt.length).toBe(1)
    expect(JSON.stringify(prompt)).toBe(
      JSON.stringify([
        {
          type: EPromptType.SELECT,
          name: 'name',
          message: 'message',
          initial: 0,
          choices: [],
        },
      ]),
    )
  })

  it('should return an array with a select prompt with choices', () => {
    const prompt = usePrompt(EPromptType.SELECT, EAnswer.NAME, 'message', {
      choices: [
        { title: 'title1', value: 'value1' },
        { title: 'title2', value: 'value2' },
      ],
    })
    expect(prompt).not.toBeNull()
    expect(Array.isArray(prompt)).toBeTruthy()
    expect(prompt.length).toBe(1)
    expect(JSON.stringify(prompt)).toBe(
      JSON.stringify([
        {
          type: EPromptType.SELECT,
          name: 'name',
          message: 'message',
          initial: 0,
          choices: [
            { title: 'title1', value: 'value1' },
            { title: 'title2', value: 'value2' },
          ],
        },
      ]),
    )
  })
})
