import { Answers } from 'prompts'

import { EAnswer, EFramework, TPKG } from '../types'
import { runCommand } from '../utils/commands'
import { useMakeFile } from '../utils/directories'
import { useSendMessage } from '../utils/messages'

import { handleNuxt } from './nuxt'

/**
 * Controller for the frameworks.
 * @param root Root directory of the project.
 * @param answers Answers from the prompts.
 * @returns void
 * @tests ./frameworks.test.ts
 */
export const useFramework = (root: string, answers: Answers<EAnswer>): void => {
  let pkg: TPKG = {
    name: answers.name ?? `Scaffolding.Coffee ${answers.framework} app`,
    version: '0.0.1',
    author: answers.author ?? 'Your name',
    description: `A ${answers.framework} app built with Scaffolding.Coffee`,
  }

  switch (answers.framework) {
    case EFramework.NUXT:
      pkg = handleNuxt(root, answers, pkg)
      break
    default:
      useSendMessage(`The Package.json will be ${JSON.stringify(pkg)}`)
      break
  }

  useMakeFile(root, 'package.json', JSON.stringify(pkg, null, 2))

  runCommand(root, 'npm', ['install'])
}
