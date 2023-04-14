import { PromptObject } from 'prompts'

import { EAnswer, EPromptType } from '../types'
import { isRootEmpty } from '../utils/directories'
import { usePrompt } from '../utils/prompts'
import { validatePackageName } from '../utils/validation'

/**
 * Hook for creating base prompts.
 * @param defaultName Default name of the project.
 * @returns An array of prompts.
 * @tests ./prompts.test.ts
 */
export const useBasePrompts = (defaultName: string): PromptObject[] => [
  ...usePrompt(
    EPromptType.TEXT,
    EAnswer.NAME,
    'What is the name of the project?',
    {
      initial: defaultName ?? '',
      validate: (name: string) => validatePackageName(name),
    },
  ),
  ...usePrompt(
    EPromptType.OVERWRITE,
    EAnswer.OVERWRITE,
    (prev: string) =>
      `The directory ${prev} is not empty. Do you want to overwrite it?`,
    {
      initial: true,
    },
  ),
  ...usePrompt(
    EPromptType.TEXTDEPENDENT,
    EAnswer.NAME,
    'What is the new name of the project?',
    {
      initial: defaultName ?? '',
      validate: (name: string) => {
        const pkgName = validatePackageName(name)
        if (pkgName !== true) return pkgName
        if (!isRootEmpty(name))
          return 'The directory is not empty. Please choose another name or delete the directory.'
        return true
      },
    },
  ),
  ...usePrompt(
    EPromptType.TEXT,
    EAnswer.AUTHOR,
    'Who is the author of the project?',
  ),
]
