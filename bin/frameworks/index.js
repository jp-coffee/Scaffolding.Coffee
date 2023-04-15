"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFramework = void 0;
const types_1 = require("../types");
const commands_1 = require("../utils/commands");
const directories_1 = require("../utils/directories");
const messages_1 = require("../utils/messages");
const nuxt_1 = require("./nuxt");
/**
 * Controller for the frameworks.
 * @param root Root directory of the project.
 * @param answers Answers from the prompts.
 * @returns void
 * @tests ./frameworks.test.ts
 */
const useFramework = (root, answers) => {
    var _a, _b;
    let pkg = {
        name: (_a = answers.name) !== null && _a !== void 0 ? _a : `Scaffolding.Coffee ${answers.framework} app`,
        version: '0.0.1',
        author: (_b = answers.author) !== null && _b !== void 0 ? _b : 'Your name',
        description: `A ${answers.framework} app built with Scaffolding.Coffee`,
    };
    switch (answers.framework) {
        case types_1.EFramework.NUXT:
            pkg = (0, nuxt_1.handleNuxt)(root, answers, pkg);
            break;
        default:
            (0, messages_1.useSendMessage)(`The Package.json will be ${JSON.stringify(pkg)}`);
            break;
    }
    (0, directories_1.useMakeFile)(root, 'package.json', JSON.stringify(pkg, null, 2));
    (0, messages_1.useSendMessage)(`\n`);
    (0, messages_1.useSendMessage)(`Your ${answers.framework} app has been scaffolded!`, types_1.EMessageType.SUCCESS);
    (0, messages_1.useSendMessage)(`Installing dependencies. This might take a few minutes...\n`);
    (0, commands_1.runCommand)(root, 'npm', ['install']);
};
exports.useFramework = useFramework;
//# sourceMappingURL=index.js.map