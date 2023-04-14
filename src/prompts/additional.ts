import { PromptObject } from 'prompts'

import { EAnswer, EPromptType } from '../types'
import { usePrompt } from '../utils/prompts'

/**
 * Hook for creating additional prompts.
 * @returns An array of prompts.
 * @tests ./prompts.test.ts
 */
export const useAdditionalPrompts = (): PromptObject[] => [
  ...usePrompt(
    EPromptType.TOGGLE,
    EAnswer.MPA,
    'What is the size of the project?',
    {
      active: 'Multiple Page Application',
      inactive: 'Single Page Application',
    },
  ),
  ...usePrompt(
    EPromptType.TOGGLE,
    EAnswer.TYPESCRIPT,
    'Do you want to use TypeScript for type safety?',
  ),
  ...usePrompt(
    EPromptType.TOGGLE,
    EAnswer.ESLINT,
    'Do you want to use ESLint for code quailty?',
  ),
  ...usePrompt(
    EPromptType.TOGGLE,
    EAnswer.VITEST,
    'Do you want to use Vite Test for unit testing?',
  ),
  ...usePrompt(
    EPromptType.TOGGLE,
    EAnswer.SCSS,
    'Do you want to use SCSS for styling?',
  ),
  ...usePrompt(
    EPromptType.TOGGLE,
    EAnswer.TAILWINDCSS,
    'Do you want to use Tailwind CSS for styling?',
  ),
]
