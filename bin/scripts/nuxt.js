#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompts_1 = __importDefault(require("prompts"));
const frameworks_1 = require("../frameworks");
const additional_1 = require("../prompts/additional");
const base_1 = require("../prompts/base");
const types_1 = require("../types");
const arguments_1 = require("../utils/arguments");
const directories_1 = require("../utils/directories");
const messages_1 = require("../utils/messages");
const validation_1 = require("../utils/validation");
const help_1 = require("./sub/help");
const version_1 = require("./sub/version");
const init = async () => {
    var _a, _b, _c, _d;
    (0, messages_1.useWelcome)();
    const args = (0, arguments_1.getArgs)(process.argv);
    if (args.version)
        (0, version_1.useVersionScript)();
    if (args.help)
        (0, help_1.useHelpScript)(types_1.EFramework.NUXT);
    const defaultName = (_c = (_b = (_a = process === null || process === void 0 ? void 0 : process.cwd()) === null || _a === void 0 ? void 0 : _a.split('/')) === null || _b === void 0 ? void 0 : _b.pop()) !== null && _c !== void 0 ? _c : 'nuxt-app';
    let answers;
    let root = (_d = process.cwd()) !== null && _d !== void 0 ? _d : '';
    try {
        answers = (await (0, prompts_1.default)([...(0, base_1.useBasePrompts)(defaultName), ...(0, additional_1.useAdditionalPrompts)()], {
            onCancel: () => {
                (0, messages_1.useSendMessage)('Cancelled', types_1.EMessageType.ERROR);
                process.exit(0);
            },
        }));
    }
    catch (err) {
        (0, messages_1.useSendMessage)(err, types_1.EMessageType.ERROR);
    }
    answers = {
        ...answers,
        framework: types_1.EFramework.NUXT,
    };
    if (!(0, validation_1.validateRoot)(answers.name))
        root = `${root}/${answers.name}`;
    answers.overwrite ? (0, directories_1.useEmptyDir)(root) : (0, directories_1.useMakeDir)(root);
    (0, frameworks_1.useFramework)(root, answers);
    (0, messages_1.useSendMessage)(`Creating a new Nuxt app in ${root} with the answers: ${JSON.stringify(answers)}`);
};
init().catch((err) => {
    throw new Error(err);
});
//# sourceMappingURL=nuxt.js.map