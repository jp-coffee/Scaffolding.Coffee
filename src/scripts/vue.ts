#!/usr/bin/env node

import { EMessageType } from '../types'
import { useSendMessage, useWelcome } from '../utils/messages'

const init = async () => {
  useWelcome()
}

init().catch((err) => {
  useSendMessage(err as string, EMessageType.ERROR)
})
