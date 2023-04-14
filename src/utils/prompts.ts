import { PromptObject } from 'prompts'

import { EAnswer, EPromptType, TPromptOptions } from '../types'

import { isRootEmpty } from './directories'

/**
 * Hook for creating prompts.
 * @param type Prompt type.
 * @param name Prompt name.
 * @param message Prompt message.
 * @param options Prompt options.
 * @returns An array of prompts.
 * @tests ./prompts.test.ts
 */
export const usePrompt = (
  type: ((prev: string) => string | null | undefined) | EPromptType | null,
  name: ((prev: string) => string) | EAnswer,
  message: ((prev: string) => string) | string,
  options?: TPromptOptions,
): PromptObject[] => {
  switch (type) {
    case EPromptType.TEXT:
      return [
        {
          type: EPromptType.TEXT,
          name,
          message,
          initial: options?.initial ?? '',
          format: options?.format ?? ((value: string) => value),
          validate: options?.validate ?? (() => true),
          onState: options?.onState ?? (() => undefined),
        },
      ]
    case EPromptType.CONFIRM:
      return [
        {
          type: EPromptType.CONFIRM,
          name,
          message,
          initial: options?.initial ?? false,
        },
      ]
    case EPromptType.TOGGLE:
      return [
        {
          type: EPromptType.TOGGLE,
          name,
          message,
          initial: options?.initial ?? false,
          active: options?.active ?? 'yes',
          inactive: options?.inactive ?? 'no',
        },
      ]
    case EPromptType.SELECT:
      return [
        {
          type: EPromptType.SELECT,
          name,
          message,
          initial: options?.initial ?? 0,
          choices: options?.choices ?? [],
          validate: options?.validate ?? ((value: unknown) => !!value),
        },
      ]

    case EPromptType.TEXTDEPENDENT:
      return [
        {
          type: (prev: string) => (prev ? null : EPromptType.TEXT),
          name,
          message,
          initial: options?.initial ?? '',
          format: options?.format ?? ((value: string) => value),
          validate: options?.validate ?? (() => true),
          onState: options?.onState ?? (() => undefined),
        },
      ]
    case EPromptType.OVERWRITE:
      return [
        {
          type: (prev: string) =>
            isRootEmpty(prev) ? null : EPromptType.CONFIRM,
          name,
          message,
          initial: options?.initial ?? false,
        },
      ]

    default:
      return []
  }
}
