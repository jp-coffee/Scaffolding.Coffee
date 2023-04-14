"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePrompt = void 0;
const types_1 = require("../types");
const directories_1 = require("./directories");
/**
 * Hook for creating prompts.
 * @param type Prompt type.
 * @param name Prompt name.
 * @param message Prompt message.
 * @param options Prompt options.
 * @returns An array of prompts.
 * @tests ./prompts.test.ts
 */
const usePrompt = (type, name, message, options) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    switch (type) {
        case types_1.EPromptType.TEXT:
            return [
                {
                    type: types_1.EPromptType.TEXT,
                    name,
                    message,
                    initial: (_a = options === null || options === void 0 ? void 0 : options.initial) !== null && _a !== void 0 ? _a : '',
                    format: (_b = options === null || options === void 0 ? void 0 : options.format) !== null && _b !== void 0 ? _b : ((value) => value),
                    validate: (_c = options === null || options === void 0 ? void 0 : options.validate) !== null && _c !== void 0 ? _c : (() => true),
                    onState: (_d = options === null || options === void 0 ? void 0 : options.onState) !== null && _d !== void 0 ? _d : (() => undefined),
                },
            ];
        case types_1.EPromptType.CONFIRM:
            return [
                {
                    type: types_1.EPromptType.CONFIRM,
                    name,
                    message,
                    initial: (_e = options === null || options === void 0 ? void 0 : options.initial) !== null && _e !== void 0 ? _e : false,
                },
            ];
        case types_1.EPromptType.TOGGLE:
            return [
                {
                    type: types_1.EPromptType.TOGGLE,
                    name,
                    message,
                    initial: (_f = options === null || options === void 0 ? void 0 : options.initial) !== null && _f !== void 0 ? _f : false,
                    active: (_g = options === null || options === void 0 ? void 0 : options.active) !== null && _g !== void 0 ? _g : 'yes',
                    inactive: (_h = options === null || options === void 0 ? void 0 : options.inactive) !== null && _h !== void 0 ? _h : 'no',
                },
            ];
        case types_1.EPromptType.SELECT:
            return [
                {
                    type: types_1.EPromptType.SELECT,
                    name,
                    message,
                    initial: (_j = options === null || options === void 0 ? void 0 : options.initial) !== null && _j !== void 0 ? _j : 0,
                    choices: (_k = options === null || options === void 0 ? void 0 : options.choices) !== null && _k !== void 0 ? _k : [],
                    validate: (_l = options === null || options === void 0 ? void 0 : options.validate) !== null && _l !== void 0 ? _l : ((value) => !!value),
                },
            ];
        case types_1.EPromptType.TEXTDEPENDENT:
            return [
                {
                    type: (prev) => (prev ? null : types_1.EPromptType.TEXT),
                    name,
                    message,
                    initial: (_m = options === null || options === void 0 ? void 0 : options.initial) !== null && _m !== void 0 ? _m : '',
                    format: (_o = options === null || options === void 0 ? void 0 : options.format) !== null && _o !== void 0 ? _o : ((value) => value),
                    validate: (_p = options === null || options === void 0 ? void 0 : options.validate) !== null && _p !== void 0 ? _p : (() => true),
                    onState: (_q = options === null || options === void 0 ? void 0 : options.onState) !== null && _q !== void 0 ? _q : (() => undefined),
                },
            ];
        case types_1.EPromptType.OVERWRITE:
            return [
                {
                    type: (prev) => (0, directories_1.isRootEmpty)(prev) ? null : types_1.EPromptType.CONFIRM,
                    name,
                    message,
                    initial: (_r = options === null || options === void 0 ? void 0 : options.initial) !== null && _r !== void 0 ? _r : false,
                },
            ];
        default:
            return [];
    }
};
exports.usePrompt = usePrompt;
//# sourceMappingURL=prompts.js.map