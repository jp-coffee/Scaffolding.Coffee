import { green, red, yellow } from 'kolorist'

import { EMessageType } from '../types'

/**
 * Sends a message to the console for the operator to see.
 * @param message The message to send.
 * @returns void
 */
const consoleLogMessage = (message: string): void => {
  // eslint-disable-next-line no-console
  console.log(message)
}

/**
 * Sends a message to the console for the operator to see based on the type.
 * @param message The message to send.
 * @param type The type of message to send.
 * @returns void
 * @see EMessageType
 * @see consoleLogMessage
 */
export const useSendMessage = (message: string, type?: EMessageType): void => {
  switch (type) {
    case 'error':
      consoleLogMessage(`${red('✖')} ${message}`)
      break
    case 'warning':
      consoleLogMessage(`${yellow('⚠')} ${message}`)
      break
    case 'success':
      consoleLogMessage(green('✔') + ` ${message}`)
      break
    case 'info':
      consoleLogMessage(`${yellow('ℹ')} ${message}`)
      break
    default:
      consoleLogMessage(message)
      break
  }
}

export const useWelcome = (): void =>
  useSendMessage(
    yellow(`
███████╗ ██████╗ █████╗ ███████╗███████╗ ██████╗ ██╗     ██████╗ ██╗███╗   ██╗ ██████╗     ██████╗ ██████╗ ███████╗███████╗███████╗███████╗
██╔════╝██╔════╝██╔══██╗██╔════╝██╔════╝██╔═══██╗██║     ██╔══██╗██║████╗  ██║██╔════╝    ██╔════╝██╔═══██╗██╔════╝██╔════╝██╔════╝██╔════╝
███████╗██║     ███████║█████╗  █████╗  ██║   ██║██║     ██║  ██║██║██╔██╗ ██║██║  ███╗   ██║     ██║   ██║█████╗  █████╗  █████╗  █████╗  
╚════██║██║     ██╔══██║██╔══╝  ██╔══╝  ██║   ██║██║     ██║  ██║██║██║╚██╗██║██║   ██║   ██║     ██║   ██║██╔══╝  ██╔══╝  ██╔══╝  ██╔══╝  
███████║╚██████╗██║  ██║██║     ██║     ╚██████╔╝███████╗██████╔╝██║██║ ╚████║╚██████╔╝██╗╚██████╗╚██████╔╝██║     ██║     ███████╗███████╗
╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝     ╚═╝      ╚═════╝ ╚══════╝╚═════╝ ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝     ╚══════╝╚══════╝

`),
  )
