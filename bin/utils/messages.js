"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWelcome = exports.useSendMessage = void 0;
const kolorist_1 = require("kolorist");
/**
 * Sends a message to the console for the operator to see.
 * @param message The message to send.
 * @returns void
 */
const consoleLogMessage = (message) => {
    // eslint-disable-next-line no-console
    console.log(message);
};
/**
 * Sends a message to the console for the operator to see based on the type.
 * @param message The message to send.
 * @param type The type of message to send.
 * @returns void
 * @see EMessageType
 * @see consoleLogMessage
 */
const useSendMessage = (message, type) => {
    switch (type) {
        case 'error':
            consoleLogMessage(`${(0, kolorist_1.red)('✖')} ${message}`);
            break;
        case 'warning':
            consoleLogMessage(`${(0, kolorist_1.yellow)('⚠')} ${message}`);
            break;
        case 'success':
            consoleLogMessage((0, kolorist_1.green)('✔') + ` ${message}`);
            break;
        case 'info':
            consoleLogMessage(`${(0, kolorist_1.yellow)('ℹ')} ${message}`);
            break;
        default:
            consoleLogMessage(message);
            break;
    }
};
exports.useSendMessage = useSendMessage;
const useWelcome = () => (0, exports.useSendMessage)((0, kolorist_1.yellow)(`
███████╗ ██████╗ █████╗ ███████╗███████╗ ██████╗ ██╗     ██████╗ ██╗███╗   ██╗ ██████╗     ██████╗ ██████╗ ███████╗███████╗███████╗███████╗
██╔════╝██╔════╝██╔══██╗██╔════╝██╔════╝██╔═══██╗██║     ██╔══██╗██║████╗  ██║██╔════╝    ██╔════╝██╔═══██╗██╔════╝██╔════╝██╔════╝██╔════╝
███████╗██║     ███████║█████╗  █████╗  ██║   ██║██║     ██║  ██║██║██╔██╗ ██║██║  ███╗   ██║     ██║   ██║█████╗  █████╗  █████╗  █████╗  
╚════██║██║     ██╔══██║██╔══╝  ██╔══╝  ██║   ██║██║     ██║  ██║██║██║╚██╗██║██║   ██║   ██║     ██║   ██║██╔══╝  ██╔══╝  ██╔══╝  ██╔══╝  
███████║╚██████╗██║  ██║██║     ██║     ╚██████╔╝███████╗██████╔╝██║██║ ╚████║╚██████╔╝██╗╚██████╗╚██████╔╝██║     ██║     ███████╗███████╗
╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝     ╚═╝      ╚═════╝ ╚══════╝╚═════╝ ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝     ╚══════╝╚══════╝

`));
exports.useWelcome = useWelcome;
//# sourceMappingURL=messages.js.map