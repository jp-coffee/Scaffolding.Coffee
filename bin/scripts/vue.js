#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const messages_1 = require("../utils/messages");
const init = async () => {
    (0, messages_1.useWelcome)();
};
init().catch((err) => {
    (0, messages_1.useSendMessage)(err, types_1.EMessageType.ERROR);
});
//# sourceMappingURL=vue.js.map