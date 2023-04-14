"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBasePrompts = void 0;
const types_1 = require("../types");
const directories_1 = require("../utils/directories");
const prompts_1 = require("../utils/prompts");
const validation_1 = require("../utils/validation");
/**
 * Hook for creating base prompts.
 * @param defaultName Default name of the project.
 * @returns An array of prompts.
 * @tests ./prompts.test.ts
 */
const useBasePrompts = (defaultName) => [
    ...(0, prompts_1.usePrompt)(types_1.EPromptType.TEXT, types_1.EAnswer.NAME, 'What is the name of the project?', {
        initial: defaultName !== null && defaultName !== void 0 ? defaultName : '',
        validate: (name) => (0, validation_1.validatePackageName)(name),
    }),
    ...(0, prompts_1.usePrompt)(types_1.EPromptType.OVERWRITE, types_1.EAnswer.OVERWRITE, (prev) => `The directory ${prev} is not empty. Do you want to overwrite it?`, {
        initial: true,
    }),
    ...(0, prompts_1.usePrompt)(types_1.EPromptType.TEXTDEPENDENT, types_1.EAnswer.NAME, 'What is the new name of the project?', {
        initial: defaultName !== null && defaultName !== void 0 ? defaultName : '',
        validate: (name) => {
            const pkgName = (0, validation_1.validatePackageName)(name);
            if (pkgName !== true)
                return pkgName;
            if (!(0, directories_1.isRootEmpty)(name))
                return 'The directory is not empty. Please choose another name or delete the directory.';
            return true;
        },
    }),
    ...(0, prompts_1.usePrompt)(types_1.EPromptType.TEXT, types_1.EAnswer.AUTHOR, 'Who is the author of the project?'),
];
exports.useBasePrompts = useBasePrompts;
//# sourceMappingURL=base.js.map