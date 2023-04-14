import { EFramework } from '../../types'
import { useSendMessage } from '../../utils/messages'

/**
 * Help script for the CLI
 * @param framework Framework to use
 * @returns void
 */
export const useHelpScript = (framework?: EFramework): void => {
  switch (framework) {
    default:
      useSendMessage(`Usage: fw [options] [command]

Commands:
  fw-setup [options] Setup a new framework (development)
  setup-vue [options] Setup a new VueJS project (roadmap)
  setup-nuxt [options] Setup a new NuxtJS project (development)
  setup-react [options] Setup a new ReactJS project (roadmap)
  setup-next [options] Setup a new NextJS project (roadmap)

Options:
  --v, --version  output the version number
  --h, --help     output usage information
`)
      break
  }

  process.exit(0)
}
