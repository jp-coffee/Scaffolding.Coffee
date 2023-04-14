import { TVersion } from '../../types'
import { useSendMessage } from '../../utils/messages'

/**
 * Version script for the CLI
 * @returns void
 */
export const useVersionScript = (): void => {
  const v: TVersion = {
    major: 0,
    minor: 0,
    patch: 0,
  }

  const msg = `${
    v.major < 1 && v.minor < 1
      ? 'alpha '
      : v.major < 1 && v.minor > 0
      ? 'beta '
      : ''
  }v${v.major}.${v.minor}.${v.patch}`

  useSendMessage(msg)

  process.exit(0)
}
