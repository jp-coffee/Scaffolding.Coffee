"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const types_1 = require("../types");
const prompts_1 = require("./prompts");
/**
 * Test the usePrompt function
 */
(0, vitest_1.describe)('usePrompt', () => {
    (0, vitest_1.it)('should return an empty array', () => {
        const prompt = (0, prompts_1.usePrompt)(null, types_1.EAnswer.NAME, '');
        (0, vitest_1.expect)(prompt).not.toBeNull();
        (0, vitest_1.expect)(Array.isArray(prompt)).toBeTruthy();
        (0, vitest_1.expect)(prompt.length).toBe(0);
    });
    (0, vitest_1.it)('should return an array with a text prompt with no options', () => {
        const prompt = (0, prompts_1.usePrompt)(types_1.EPromptType.TEXT, types_1.EAnswer.NAME, 'message');
        (0, vitest_1.expect)(prompt).not.toBeNull();
        (0, vitest_1.expect)(Array.isArray(prompt)).toBeTruthy();
        (0, vitest_1.expect)(prompt.length).toBe(1);
        (0, vitest_1.expect)(JSON.stringify(prompt)).toBe(JSON.stringify([
            {
                type: types_1.EPromptType.TEXT,
                name: 'name',
                message: 'message',
                initial: '',
            },
        ]));
    });
    (0, vitest_1.it)('should return an array with a text prompt with options', () => {
        const prompt = (0, prompts_1.usePrompt)(types_1.EPromptType.TEXT, types_1.EAnswer.NAME, 'message', {
            initial: 'initial',
            format: (value) => value,
            validate: () => true,
            onState: () => undefined,
        });
        (0, vitest_1.expect)(prompt).not.toBeNull();
        (0, vitest_1.expect)(Array.isArray(prompt)).toBeTruthy();
        (0, vitest_1.expect)(prompt.length).toBe(1);
        (0, vitest_1.expect)(JSON.stringify(prompt)).toBe(JSON.stringify([
            {
                type: types_1.EPromptType.TEXT,
                name: 'name',
                message: 'message',
                initial: 'initial',
                format: (value) => value,
                validate: () => true,
                onState: () => undefined,
            },
        ]));
    });
    (0, vitest_1.it)('should return an array with a confirm prompt with no options', () => {
        const prompt = (0, prompts_1.usePrompt)(types_1.EPromptType.CONFIRM, types_1.EAnswer.NAME, 'message');
        (0, vitest_1.expect)(prompt).not.toBeNull();
        (0, vitest_1.expect)(Array.isArray(prompt)).toBeTruthy();
        (0, vitest_1.expect)(prompt.length).toBe(1);
        (0, vitest_1.expect)(JSON.stringify(prompt)).toBe(JSON.stringify([
            {
                type: types_1.EPromptType.CONFIRM,
                name: 'name',
                message: 'message',
                initial: false,
            },
        ]));
    });
    (0, vitest_1.it)('should return an array with a confirm prompt with options', () => {
        const prompt = (0, prompts_1.usePrompt)(types_1.EPromptType.CONFIRM, types_1.EAnswer.NAME, 'message', {
            initial: true,
        });
        (0, vitest_1.expect)(prompt).not.toBeNull();
        (0, vitest_1.expect)(Array.isArray(prompt)).toBeTruthy();
        (0, vitest_1.expect)(prompt.length).toBe(1);
        (0, vitest_1.expect)(JSON.stringify(prompt)).toBe(JSON.stringify([
            {
                type: types_1.EPromptType.CONFIRM,
                name: 'name',
                message: 'message',
                initial: true,
            },
        ]));
    });
    (0, vitest_1.it)('should return an array with a toggle prompt with no options', () => {
        const prompt = (0, prompts_1.usePrompt)(types_1.EPromptType.TOGGLE, types_1.EAnswer.NAME, 'message');
        (0, vitest_1.expect)(prompt).not.toBeNull();
        (0, vitest_1.expect)(Array.isArray(prompt)).toBeTruthy();
        (0, vitest_1.expect)(prompt.length).toBe(1);
        (0, vitest_1.expect)(JSON.stringify(prompt)).toBe(JSON.stringify([
            {
                type: types_1.EPromptType.TOGGLE,
                name: 'name',
                message: 'message',
                initial: false,
                active: 'yes',
                inactive: 'no',
            },
        ]));
    });
    (0, vitest_1.it)('should return an array with a toggle prompt with options', () => {
        const prompt = (0, prompts_1.usePrompt)(types_1.EPromptType.TOGGLE, types_1.EAnswer.NAME, 'message', {
            active: 'active',
            inactive: 'inactive',
        });
        (0, vitest_1.expect)(prompt).not.toBeNull();
        (0, vitest_1.expect)(Array.isArray(prompt)).toBeTruthy();
        (0, vitest_1.expect)(prompt.length).toBe(1);
        (0, vitest_1.expect)(JSON.stringify(prompt)).toBe(JSON.stringify([
            {
                type: types_1.EPromptType.TOGGLE,
                name: 'name',
                message: 'message',
                initial: false,
                active: 'active',
                inactive: 'inactive',
            },
        ]));
    });
    (0, vitest_1.it)('should return an array with a select prompt with no choices', () => {
        const prompt = (0, prompts_1.usePrompt)(types_1.EPromptType.SELECT, types_1.EAnswer.NAME, 'message');
        (0, vitest_1.expect)(prompt).not.toBeNull();
        (0, vitest_1.expect)(Array.isArray(prompt)).toBeTruthy();
        (0, vitest_1.expect)(prompt.length).toBe(1);
        (0, vitest_1.expect)(JSON.stringify(prompt)).toBe(JSON.stringify([
            {
                type: types_1.EPromptType.SELECT,
                name: 'name',
                message: 'message',
                initial: 0,
                choices: [],
            },
        ]));
    });
    (0, vitest_1.it)('should return an array with a select prompt with choices', () => {
        const prompt = (0, prompts_1.usePrompt)(types_1.EPromptType.SELECT, types_1.EAnswer.NAME, 'message', {
            choices: [
                { title: 'title1', value: 'value1' },
                { title: 'title2', value: 'value2' },
            ],
        });
        (0, vitest_1.expect)(prompt).not.toBeNull();
        (0, vitest_1.expect)(Array.isArray(prompt)).toBeTruthy();
        (0, vitest_1.expect)(prompt.length).toBe(1);
        (0, vitest_1.expect)(JSON.stringify(prompt)).toBe(JSON.stringify([
            {
                type: types_1.EPromptType.SELECT,
                name: 'name',
                message: 'message',
                initial: 0,
                choices: [
                    { title: 'title1', value: 'value1' },
                    { title: 'title2', value: 'value2' },
                ],
            },
        ]));
    });
});
//# sourceMappingURL=prompts.test.js.map