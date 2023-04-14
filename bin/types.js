"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESize = exports.EFramework = exports.EPromptType = exports.EAnswer = exports.EMessageType = void 0;
/**
 * Message type enum for useSendMessage.
 * @see useSendMessage
 */
var EMessageType;
(function (EMessageType) {
    EMessageType["ERROR"] = "error";
    EMessageType["WARNING"] = "warning";
    EMessageType["SUCCESS"] = "success";
    EMessageType["INFO"] = "info";
})(EMessageType = exports.EMessageType || (exports.EMessageType = {}));
/**
 * Answer type enum for prompts.
 */
var EAnswer;
(function (EAnswer) {
    EAnswer["NAME"] = "name";
    EAnswer["AUTHOR"] = "author";
    EAnswer["OVERWRITE"] = "overwrite";
    EAnswer["FRAMEWORK"] = "framework";
    EAnswer["MPA"] = "mpa";
    EAnswer["TYPESCRIPT"] = "typescript";
    EAnswer["ESLINT"] = "eslint";
    EAnswer["VITEST"] = "vitest";
    EAnswer["SCSS"] = "scss";
    EAnswer["TAILWINDCSS"] = "tailwindcss";
    EAnswer["GITHUB"] = "github";
    EAnswer["GITHUBACTION"] = "githubAction";
})(EAnswer = exports.EAnswer || (exports.EAnswer = {}));
/**
 * Prompt type enum for usePrompt.
 * @see usePrompt
 */
var EPromptType;
(function (EPromptType) {
    EPromptType["TEXT"] = "text";
    EPromptType["CONFIRM"] = "confirm";
    EPromptType["TOGGLE"] = "toggle";
    EPromptType["SELECT"] = "select";
    /**
     * Custom prompt type for usePrompt.
     */
    EPromptType["TEXTDEPENDENT"] = "textDependent";
    EPromptType["OVERWRITE"] = "overwrite";
})(EPromptType = exports.EPromptType || (exports.EPromptType = {}));
/**
 * Framework type enum for usePrompt.
 */
var EFramework;
(function (EFramework) {
    EFramework["VUE"] = "vue";
    EFramework["REACT"] = "react";
    EFramework["SVELTE"] = "svelte";
    EFramework["NUXT"] = "nuxt";
    EFramework["NEXT"] = "next";
    EFramework["SVELTEKIT"] = "sveltekit";
    EFramework["VITE"] = "vite";
    EFramework["NODE"] = "node";
})(EFramework = exports.EFramework || (exports.EFramework = {}));
/**
 * Size type enum for usePrompt.
 */
var ESize;
(function (ESize) {
    ESize["SPA"] = "spa";
    ESize["MPA"] = "mpa";
})(ESize = exports.ESize || (exports.ESize = {}));
//# sourceMappingURL=types.js.map