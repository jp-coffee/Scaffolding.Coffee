import { type ChildProcess, spawn } from 'child_process'

/**
 * Runs a command in a child process. The command is run in the operators root directory.
 * @param root The root directory to run the command in.
 * @param command The command to run.
 * @param args The arguments to pass to the command.
 * @returns void
 */
export const runCommand = async (
  root: string,
  command: string,
  args: string[],
): Promise<void> => {
  const cRoot = process.cwd()
  if (root !== cRoot) process.chdir(root)
  const child: ChildProcess = spawn(command, args, {
    cwd: root,
    stdio: 'inherit',
    shell: true,
  })

  await new Promise((resolve, reject) => {
    child.on('close', (code) => {
      root !== cRoot && process.chdir(cRoot)
      if (code !== 0) {
        reject(new Error(`Command failed: ${command} ${args.join(' ')}`))
      }
    })
  })
}
