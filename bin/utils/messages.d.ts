import { EMessageType } from '../types';
/**
 * Sends a message to the console for the operator to see based on the type.
 * @param message The message to send.
 * @param type The type of message to send.
 * @returns void
 * @see EMessageType
 * @see consoleLogMessage
 */
export declare const useSendMessage: (message: string, type?: EMessageType) => void;
export declare const useWelcome: () => void;
