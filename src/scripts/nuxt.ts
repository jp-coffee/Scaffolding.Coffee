#!/usr/bin/env node

import prompts, { Answers } from 'prompts'

import { useFramework } from '../frameworks'
import { useAdditionalPrompts } from '../prompts/additional'
import { useBasePrompts } from '../prompts/base'
import { EAnswer, EFramework, EMessageType, TArgument } from '../types'
import { getArgs } from '../utils/arguments'
import { useEmptyDir, useMakeDir } from '../utils/directories'
import { useSendMessage, useWelcome } from '../utils/messages'
import { validateRoot } from '../utils/validation'

import { useHelpScript } from './sub/help'
import { useVersionScript } from './sub/version'

const init = async () => {
  useWelcome()

  const args: TArgument = getArgs(process.argv)
  if (args.version) useVersionScript()
  if (args.help) useHelpScript(EFramework.NUXT)

  const defaultName: string = process?.cwd()?.split('/')?.pop() ?? 'nuxt-app'
  let answers: Answers<EAnswer> | undefined
  let root: string = process.cwd() ?? ''

  try {
    answers = (await prompts(
      [...useBasePrompts(defaultName), ...useAdditionalPrompts()],
      {
        onCancel: () => {
          useSendMessage('Cancelled', EMessageType.ERROR)
          process.exit(0)
        },
      },
    )) as Answers<EAnswer> | undefined
  } catch (err) {
    useSendMessage(err as string, EMessageType.ERROR)
  }

  answers = {
    ...answers,
    framework: EFramework.NUXT,
  } as Answers<EAnswer>

  if (!validateRoot(answers.name)) root = `${root}/${answers.name}`

  answers.overwrite ? useEmptyDir(root) : useMakeDir(root)

  useFramework(root, answers)

  useSendMessage(
    `Creating a new Nuxt app in ${root} with the answers: ${JSON.stringify(
      answers,
    )}`,
  )
}

init().catch((err) => {
  throw new Error(err as string)
})
