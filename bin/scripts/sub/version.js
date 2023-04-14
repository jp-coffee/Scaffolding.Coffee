"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useVersionScript = void 0;
const messages_1 = require("../../utils/messages");
/**
 * Version script for the CLI
 * @returns void
 */
const useVersionScript = () => {
    const v = {
        major: 0,
        minor: 0,
        patch: 0,
    };
    const msg = `${v.major < 1 && v.minor < 1
        ? 'alpha '
        : v.major < 1 && v.minor > 0
            ? 'beta '
            : ''}v${v.major}.${v.minor}.${v.patch}`;
    (0, messages_1.useSendMessage)(msg);
    process.exit(0);
};
exports.useVersionScript = useVersionScript;
//# sourceMappingURL=version.js.map