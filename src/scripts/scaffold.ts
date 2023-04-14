#!/usr/bin/env node

import { TArgument } from '../types'
import { getArgs } from '../utils/arguments'
import { useWelcome } from '../utils/messages'

import { useHelpScript } from './sub/help'
import { useVersionScript } from './sub/version'

const init = async () => {
  useWelcome()

  const args: TArgument = getArgs(process.argv)
  if (args.version) useVersionScript()
  if (args.help) useHelpScript()
}

init().catch((err) => {
  throw new Error(err as string)
})
