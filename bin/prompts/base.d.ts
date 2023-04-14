import { PromptObject } from 'prompts';
/**
 * Hook for creating base prompts.
 * @param defaultName Default name of the project.
 * @returns An array of prompts.
 * @tests ./prompts.test.ts
 */
export declare const useBasePrompts: (defaultName: string) => PromptObject[];
