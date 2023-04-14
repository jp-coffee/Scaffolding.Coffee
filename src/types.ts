import { PromptObject } from 'prompts'

/**
 * Message type enum for useSendMessage.
 * @see useSendMessage
 */
export enum EMessageType {
  ERROR = 'error',
  WARNING = 'warning',
  SUCCESS = 'success',
  INFO = 'info',
}

/**
 * Answer type enum for prompts.
 */
export enum EAnswer {
  NAME = 'name',
  AUTHOR = 'author',
  OVERWRITE = 'overwrite',

  FRAMEWORK = 'framework',

  MPA = 'mpa',
  TYPESCRIPT = 'typescript',
  ESLINT = 'eslint',
  VITEST = 'vitest',
  SCSS = 'scss',
  TAILWINDCSS = 'tailwindcss',

  GITHUB = 'github',
  GITHUBACTION = 'githubAction',
}

/**
 * Prompt type enum for usePrompt.
 * @see usePrompt
 */
export enum EPromptType {
  TEXT = 'text',
  CONFIRM = 'confirm',
  TOGGLE = 'toggle',
  SELECT = 'select',

  /**
   * Custom prompt type for usePrompt.
   */
  TEXTDEPENDENT = 'textDependent',
  OVERWRITE = 'overwrite',
}

/**
 * Framework type enum for usePrompt.
 */
export enum EFramework {
  VUE = 'vue',
  REACT = 'react',
  SVELTE = 'svelte',
  NUXT = 'nuxt',
  NEXT = 'next',
  SVELTEKIT = 'sveltekit',
  VITE = 'vite',
  NODE = 'node',
}

/**
 * Size type enum for usePrompt.
 */
export enum ESize {
  SPA = 'spa',
  MPA = 'mpa',
}

/**
 * Argument type for getArgs
 * @see getArgs
 */
export type TArgument = {
  [key: string]: string | boolean | number | undefined
}

export type TPromptOptions = {
  initial?: string | number | boolean | null
  choices?: PromptObject['choices']
  active?: string
  inactive?: string
  format?: (value: string | number | boolean | null) => string
  validate?: (state: string) => boolean | string
  onState?: (state: string | number | boolean | null) => void | undefined
}

/**
 * Version type.
 */
export type TVersion = {
  major: number
  minor: number
  patch: number
}

export type TPKG = {
  name: string
  version: string
  description: string
  author: string
  [key: string]: string | { [key: string]: string } | undefined
  scripts?: {
    [key: string]: string
  }
  dependencies?: {
    [key: string]: string
  }
  devDependencies?: {
    [key: string]: string
  }
}

export type TJSON = {
  [key: string]: string | { [key: string]: string } | undefined
}
