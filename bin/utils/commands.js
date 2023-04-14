"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCommand = void 0;
const child_process_1 = require("child_process");
/**
 * Runs a command in a child process. The command is run in the operators root directory.
 * @param root The root directory to run the command in.
 * @param command The command to run.
 * @param args The arguments to pass to the command.
 * @returns void
 */
const runCommand = async (root, command, args) => {
    const cRoot = process.cwd();
    if (root !== cRoot)
        process.chdir(root);
    const child = (0, child_process_1.spawn)(command, args, {
        cwd: root,
        stdio: 'inherit',
        shell: true,
    });
    await new Promise((resolve, reject) => {
        child.on('close', (code) => {
            root !== cRoot && process.chdir(cRoot);
            if (code !== 0) {
                reject(new Error(`Command failed: ${command} ${args.join(' ')}`));
            }
        });
    });
};
exports.runCommand = runCommand;
//# sourceMappingURL=commands.js.map