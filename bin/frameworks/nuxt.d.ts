import { Answers } from 'prompts';
import { EAnswer, TPKG } from '../types';
/**
 * Handle Nuxt scaffolding.
 * @param root Root directory of the project.
 * @param answers Answers from the prompts.
 * @param pkg The package.json object.
 * @returns TPKG
 * @tests ./frameworks.test.ts
 */
export declare const handleNuxt: (root: string, answers: Answers<EAnswer>, pkg: TPKG) => TPKG;
