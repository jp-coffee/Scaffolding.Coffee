/**
 * Runs a command in a child process. The command is run in the operators root directory.
 * @param root The root directory to run the command in.
 * @param command The command to run.
 * @param args The arguments to pass to the command.
 * @returns void
 */
export declare const runCommand: (root: string, command: string, args: string[]) => Promise<void>;
