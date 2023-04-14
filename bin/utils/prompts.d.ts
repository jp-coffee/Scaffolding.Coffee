import { PromptObject } from 'prompts';
import { EAnswer, EPromptType, TPromptOptions } from '../types';
/**
 * Hook for creating prompts.
 * @param type Prompt type.
 * @param name Prompt name.
 * @param message Prompt message.
 * @param options Prompt options.
 * @returns An array of prompts.
 * @tests ./prompts.test.ts
 */
export declare const usePrompt: (type: EPromptType | ((prev: string) => string | null | undefined) | null, name: EAnswer | ((prev: string) => string), message: string | ((prev: string) => string), options?: TPromptOptions) => PromptObject[];
