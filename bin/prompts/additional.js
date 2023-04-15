"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAdditionalPrompts = void 0;
const types_1 = require("../types");
const prompts_1 = require("../utils/prompts");
/**
 * Hook for creating additional prompts.
 * @returns An array of prompts.
 * @tests ./prompts.test.ts
 */
const useAdditionalPrompts = () => [
    ...(0, prompts_1.usePrompt)(types_1.EPromptType.TOGGLE, types_1.EAnswer.MPA, 'What is the size of the project?', {
        initial: true,
        active: 'Multiple Page Application',
        inactive: 'Single Page Application',
    }),
    ...(0, prompts_1.usePrompt)(types_1.EPromptType.TOGGLE, types_1.EAnswer.TYPESCRIPT, 'Do you want to use TypeScript for type safety?', {
        initial: true,
    }),
    ...(0, prompts_1.usePrompt)(types_1.EPromptType.TOGGLE, types_1.EAnswer.ESLINT, 'Do you want to use ESLint for code quailty?', {
        initial: true,
    }),
    ...(0, prompts_1.usePrompt)(types_1.EPromptType.TOGGLE, types_1.EAnswer.VITEST, 'Do you want to use Vite Test for unit testing?', {
        initial: true,
    }),
    ...(0, prompts_1.usePrompt)(types_1.EPromptType.TOGGLE, types_1.EAnswer.SCSS, 'Do you want to use SCSS for styling?', {
        initial: true,
    }),
    ...(0, prompts_1.usePrompt)(types_1.EPromptType.TOGGLE, types_1.EAnswer.TAILWINDCSS, 'Do you want to use Tailwind CSS for styling?', {
        initial: true,
    }),
];
exports.useAdditionalPrompts = useAdditionalPrompts;
//# sourceMappingURL=additional.js.map