import { Answers } from 'prompts'

import * as defaultDefaults from '../files/default'
import * as eslintDefaults from '../files/eslint'
import * as defaults from '../files/nuxt'
import * as scssDefaults from '../files/scss'
import * as tailwindcssDefaults from '../files/tailwindcss'
import * as tsDefaults from '../files/typescript'
import * as vitestDefaults from '../files/vitest'
import { EAnswer, TPKG } from '../types'
import { useMakeDir, useMakeFile } from '../utils/directories'

/**
 * Handle Nuxt scaffolding.
 * @param root Root directory of the project.
 * @param answers Answers from the prompts.
 * @param pkg The package.json object.
 * @returns TPKG
 * @tests ./frameworks.test.ts
 */
export const handleNuxt = (
  root: string,
  answers: Answers<EAnswer>,
  pkg: TPKG,
): TPKG => {
  pkg = {
    ...pkg,
    scripts: {
      ...pkg.scripts,
      ...defaults.scripts,
    },
    devDependencies: {
      ...pkg.devDependencies,
      ...defaults.devDependencies,
    },
  }

  useMakeDir(`${root}/assets`)
  useMakeDir(`${root}/components`)
  useMakeDir(`${root}/components/Button`)
  useMakeDir(`${root}/layouts`)
  useMakeDir(`${root}/public`)
  useMakeDir(`${root}/utils`)

  useMakeFile(
    root,
    `assets/scaffolding.coffee.svg`,
    defaultDefaults.scaffoldingCoffeeSVG,
  )
  useMakeFile(
    root,
    `components/WelcomeBlock.vue`,
    defaults.welcomeBlockVue(
      answers.typescript,
      answers.scss,
      answers.tailwindcss,
      answers.mpa,
    ),
  )
  useMakeFile(
    root,
    `components/Button/Default.vue`,
    defaults.buttonDefaultVue(
      answers.typescript,
      answers.scss,
      answers.tailwindcss,
    ),
  )
  useMakeFile(
    root,
    `layouts/default.vue`,
    defaults.defaultLayoutVue(
      answers.typescript,
      answers.scss,
      answers.tailwindcss,
    ),
  )
  useMakeFile(root, `public/nuxt.svg`, defaults.nuxtjsSVG)
  useMakeFile(
    root,
    `utils/count.${answers.typescript ? 'ts' : 'js'}`,
    defaults.countUtils(answers.typescript),
  )
  useMakeFile(
    root,
    `nuxt.config.${answers.typescript ? 'ts' : 'js'}`,
    defaults.nuxtConfig(answers.tailwindcss),
  )
  useMakeFile(
    root,
    `app.vue`,
    defaults.appVue(answers.typescript, answers.scss, answers.mpa),
  )

  if (answers.mpa) {
    useMakeDir(`${root}/middleware`)
    useMakeDir(`${root}/pages`)
    useMakeDir(`${root}/pages/auth`)
    useMakeDir(`${root}/styles`)
    if (answers.typescript) useMakeDir(`${root}/types`)
    if (answers.vitest) useMakeDir(`${root}/tests`)

    useMakeFile(
      root,
      'pages/index.vue',
      defaults.indexVue(answers.typescript, answers.scss, answers.tailwindcss),
    )
    useMakeFile(
      root,
      'pages/auth/dashboard.vue',
      defaults.dashboardVue(
        answers.typescript,
        answers.scss,
        answers.tailwindcss,
      ),
    )
    useMakeFile(
      root,
      `middleware/auth.${answers.typescript ? 'ts' : 'js'}`,
      defaults.authMiddleware,
    )
    useMakeFile(
      root,
      `layouts/admin.vue`,
      defaults.adminLayoutVue(
        answers.typescript,
        answers.scss,
        answers.tailwindcss,
      ),
    )
  }

  if (answers.typescript) {
    pkg.devDependencies = {
      ...pkg.devDependencies,
      ...tsDefaults.devDependencies(),
    }
    useMakeFile(root, 'tsconfig.json', tsDefaults.tsconfig(answers.framework))
    useMakeFile(
      root,
      `${answers.mpa ? 'types/utils' : 'tests'}.test.${
        answers.typescript ? 'ts' : 'js'
      }`,
      defaults.typesIndex,
    )
  }

  if (answers.eslint) {
    pkg = {
      ...pkg,
      scripts: {
        ...pkg.scripts,
        ...eslintDefaults.scripts,
      },
      devDependencies: {
        ...pkg.devDependencies,
        ...eslintDefaults.devDependencies(answers.typescript),
      },
    }
    useMakeFile(root, '.eslintrc', eslintDefaults.eslintrc(answers.framework))
  }

  if (answers.vitest) {
    pkg = {
      ...pkg,
      scripts: {
        ...pkg.scripts,
        ...vitestDefaults.scripts,
      },
      devDependencies: {
        ...pkg.devDependencies,
        ...vitestDefaults.devDependencies,
      },
    }
    useMakeFile(
      root,
      `vite.config.${answers.typescript ? 'ts' : 'js'}`,
      vitestDefaults.viteConfig,
    )
    useMakeFile(
      root,
      `tests${answers.mpa ? '/utils' : ''}.test.${
        answers.typescript ? 'ts' : 'js'
      }`,
      defaults.utilsTest(answers.mpa),
    )
  }

  if (answers.scss) {
    pkg.devDependencies = {
      ...pkg.devDependencies,
      ...scssDefaults.devDependencies,
    }
  }

  if (answers.tailwindcss) {
    pkg.devDependencies = {
      ...pkg.devDependencies,
      ...tailwindcssDefaults.devDependencies,
    }
    useMakeFile(root, 'postcss.config.js', tailwindcssDefaults.postcssConfig)
    useMakeFile(
      root,
      'tailwind.config.js',
      tailwindcssDefaults.tailwindcssConfig(
        answers.framework,
        answers.typescript,
        !answers.mpa,
      ),
    )
  }

  useMakeFile(
    root,
    `${answers.mpa ? 'styles/global' : 'styles'}.${answers.scss ? 's' : ''}css`,
    defaults.globalStyles(answers.scss, answers.tailwindcss, answers.mpa),
  )

  return pkg
}
