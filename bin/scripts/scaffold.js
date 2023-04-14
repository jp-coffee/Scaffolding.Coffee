#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arguments_1 = require("../utils/arguments");
const messages_1 = require("../utils/messages");
const help_1 = require("./sub/help");
const version_1 = require("./sub/version");
const init = async () => {
    (0, messages_1.useWelcome)();
    const args = (0, arguments_1.getArgs)(process.argv);
    if (args.version)
        (0, version_1.useVersionScript)();
    if (args.help)
        (0, help_1.useHelpScript)();
};
init().catch((err) => {
    throw new Error(err);
});
//# sourceMappingURL=scaffold.js.map