import { Answers } from 'prompts';
import { EAnswer } from '../types';
/**
 * Controller for the frameworks.
 * @param root Root directory of the project.
 * @param answers Answers from the prompts.
 * @returns void
 * @tests ./frameworks.test.ts
 */
export declare const useFramework: (root: string, answers: Answers<EAnswer>) => void;
