import { TPKG } from '../types'

/**
 * Scripts for Nuxt package.json.
 * @returns TPKG['scripts']
 * @tests ./frameworks.test.ts
 */
export const scripts: TPKG['scripts'] = {
  build: 'nuxt build',
  dev: 'nuxt dev',
  generate: 'nuxt generate',
  preview: 'nuxt preview',
  postinstall: 'nuxt prepare',
}

/**
 * DevDependencies for Nuxt package.json.
 * @returns TPKG['devDependencies']
 * @tests ./frameworks.test.ts
 */
export const devDependencies: TPKG['devDependencies'] = {
  nuxt: 'latest',
}

/**
 * Dependencies for Nuxt package.json.
 * @param typescript Whether to include TypeScript.
 * @param tailwindcss Whether to include Tailwind CSS.
 * @returns TPKG['dependencies']
 * @tests ./frameworks.test.ts
 */
export const nuxtConfig = (
  typescript: boolean,
  tailwindcss: boolean,
) => `// https://nuxt.com/docs/api/configuration/nuxt-config${
  typescript
    ? ''
    : `
// eslint-disable-next-line no-undef`
}
export default defineNuxtConfig({${
  tailwindcss
    ? `
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})`
    : `})`
}
`

/**
 * App.vue for Nuxt.
 * @param typescript Whether to use TypeScript.
 * @param scss Whether to use SCSS.
 * @param mpa Whether to use MPA.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export const appVue = (
  typescript: boolean,
  scss: boolean,
  mpa: boolean,
): string => `<script setup${typescript ? ' lang="ts"' : ''}></script>

<template>
  <NuxtLayout>
    ${!mpa ? '<WelcomeBlock />' : '<NuxtPage />'}
  </NuxtLayout>
</template>

<style lang="${scss ? 'scss' : 'css'}">
@import './${!mpa ? 'styles' : 'styles/global'}.${scss ? 'scss' : 'css'}';
</style>
`

/**
 * pages/index.vue for Nuxt.
 * @param typescript Whether to use TypeScript.
 * @param scss Whether to use SCSS.
 * @param tailwindcss Whether to use Tailwind CSS.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export const indexVue = (
  typescript: boolean,
  scss: boolean,
  tailwindcss: boolean,
): string => `<script setup${typescript ? ' lang="ts"' : ''}></script>

<template>
  <WelcomeBlock />
</template>

<style lang="${scss ? 'scss' : 'css'}" scoped>
h1 {
  ${tailwindcss ? '@apply text-4xl;' : 'font-size: 2.25rem;'}
}
</style>
`

/**
 * pages/auth/dashboard.vue for Nuxt.
 * @param typescript Whether to use TypeScript.
 * @param scss Whether to use SCSS.
 * @param tailwindcss Whether to use Tailwind CSS.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export const dashboardVue = (
  typescript: boolean,
  scss: boolean,
  tailwindcss: boolean,
): string => `<script setup${typescript ? ' lang="ts"' : ''}>
// eslint-disable-next-line no-undef
definePageMeta({
  middleware: 'auth',
  layout: 'admin',
})
</script>

<template>
  <div class="dashboard_wrapper">
    <p>
      Edit
      <code>middleware/auth.ts</code> to get started!
    </p>
    <p>Go back <NuxtLink to="/">home</NuxtLink></p>
  </div>
</template>

<style lang="${scss ? 'scss' : 'css'}" scoped>
.dashboard_wrapper {
  ${
    tailwindcss
      ? `@apply flex flex-col items-center gap-4;`
      : `display: flex; flex-direction: column; align-items: center; gap: 1rem;`
  }
}
</style>
`

/**
 * components/WelcomeBlock.vue for Nuxt.
 * @param typescript Whether to use TypeScript.
 * @param scss Whether to use SCSS.
 * @param tailwindcss Whether to use Tailwind CSS.
 * @param mpa Whether to use MPA.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export const welcomeBlockVue = (
  typescript: boolean,
  scss: boolean,
  tailwindcss: boolean,
  mpa: boolean,
): string => `<script setup${typescript ? ' lang="ts"' : ''}>
import { ${typescript ? 'Ref, ' : ''}ref } from 'vue'${
  !typescript
    ? ''
    : `

import { CountType } from '~/types'`
}

const count${typescript ? ': Ref<CountType>' : ''} = ref(0)

const resetCount = ()${typescript ? ': void' : ''} => {
  count.value = 0
}
</script>

<template>
  <div class="welcome_block">
    <div class="counter">
      <ButtonDefault :on-click="() => count++">
        count is {{ count }}
      </ButtonDefault>
      <ButtonDefault :on-click="resetCount">✗</ButtonDefault>
    </div>
     <p>
      Edit
      <code>components/WelcomeBlock.vue</code> to get started!
    </p>
    <p>
      Check out
      <NuxtLink to="https://github.com/jp-coffee/Scaffolding.Coffee#readme" target="_blank">scaffold-nuxt</NuxtLink>,
      the official Scaffolding.Coffee + Nuxt starter
    </p>${
      !mpa
        ? ''
        : `
    <p>View the <NuxtLink to="/auth/dashboard">dashboard</NuxtLink></p>
    `
    }
    <p class="text-mine-shaft-400">
      Click on the Scaffolding.Coffee and Nuxt logos to learn more
    </p>
  </div>
</template>

<style lang="${scss ? 'scss' : 'css'}" scoped>
.welcome_block {
  ${
    tailwindcss
      ? `@apply flex flex-col items-center gap-4;`
      : `display: flex; flex-direction: column; align-items: center; gap: 1rem;`
  }${
  scss
    ? ``
    : `
}`
}

  ${scss ? `` : `.welcome_block `}p {
    ${
      tailwindcss
        ? `@apply text-center flex items-center gap-1;`
        : `display: flex; align-items: center; gap: 0.25rem; text-align: center;`
    }${
  scss
    ? ``
    : `
}`
}${
  tailwindcss
    ? ``
    : `
    
    ${scss ? `&.text-mine-shaft-400` : `p.text-mine-shaft-400`} {
      color: #818181;
    }`
}

    ${scss ? `` : `.welcome_block p `}code {
      ${
        tailwindcss
          ? `@apply bg-[#1a1a1a] text-sm rounded-lg px-1;`
          : `background-color: #1a1a1a; font-size: 0.875rem; border-radius: 0.25rem; padding: 0.25rem;`
      }
    }${
      scss
        ? `
  }`
        : ``
    }${
  scss
    ? `
}`
    : ``
}
</style>
`

/**
 * components/Button/Default.vue for Nuxt.
 * @param typescript Whether to use TypeScript.
 * @param scss Whether to use SCSS.
 * @param tailwindcss Whether to use Tailwind CSS.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export const buttonDefaultVue = (
  typescript: boolean,
  scss: boolean,
  tailwindcss: boolean,
): string => `<script setup${typescript ? ' lang="ts"' : ''}>
const props = defineProps({
  onClick: {
    type: Function,
    required: true,
  },
})
</script>

<template>
  <button type="button" @click="props.onClick">
    <slot />
  </button>
</template>

<style lang="${scss ? 'scss' : 'css'}" scoped>
button {
  border: 1px solid #646cff00;
  ${
    tailwindcss
      ? `@apply rounded-lg py-2 px-4 font-medium bg-[#1a1a1a] cursor-pointer transition-[border-color] duration-300 ease-in-out text-base;`
      : `cursor: pointer; border-radius: 0.5rem; --tw-bg-opacity: 1; background-color: rgb(26 26 26 / var(--tw-bg-opacity)); padding-top: 0.5rem; padding-bottom: 0.5rem; padding-left: 1rem; padding-right: 1rem; font-weight: 500; transition-property: border-color; transition-duration: 300ms; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); font-size: 1rem;`
  }${
  scss
    ? ``
    : `
}`
}

  ${scss ? `&` : `button`}:hover {
    ${tailwindcss ? `@apply border-[#646cff];` : `border-color: #646cff;`}
  }

  ${scss ? `&` : `button`}:focus,
  ${scss ? `&` : `button`}:focus-visible {
    ${tailwindcss ? `@apply outline-none;` : `outline: none;`}
  }${
    scss
      ? `
}`
      : ``
  }
</style>
`

/**
 * layouts/default.vue for Nuxt.
 * @param typescript Whether to use TypeScript.
 * @param scss Whether to use SCSS.
 * @param tailwindcss Whether to use Tailwind CSS.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export const defaultLayoutVue = (
  typescript: boolean,
  scss: boolean,
  tailwindcss: boolean,
): string => `<script setup${typescript ? ' lang="ts"' : ''}></script>

<template>
  <div class="layout_wrapper">
    <div class="layout_header">
      <NuxtLink to="https://github.com/jp-coffee/Scaffolding.Coffee" target="_blank">
        <img src="@/assets/scaffolding.coffee.svg" alt="Scaffolding.Coffee Logo" />
      </NuxtLink>
      <NuxtLink to="https://nuxtjs.com" target="_blank">
        <img src="/nuxt.svg" alt="Nuxt Logo" class="nuxt" />
      </NuxtLink>
    </div>
    <h1>Scaffolding.Coffee + Nuxt</h1>
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="${scss ? 'scss' : 'css'}" scoped>
.layout_wrapper {
  min-height: 100svh;
  ${
    tailwindcss
      ? `@apply flex flex-col items-center justify-center;`
      : `display: flex; flex-direction: column; align-items: center; justify-content: center;`
  }${
  scss
    ? ``
    : `
}`
}

  ${scss ? `` : `.layout_wrapper `}h1 {
    ${
      tailwindcss
        ? `@apply text-5xl font-medium text-center mb-20;`
        : `margin-bottom: 5rem; text-align: center; font-size: 3rem; line-height: 1; font-weight: 500;`
    }
  }

  ${scss ? `` : `.layout_wrapper `}.layout_header {
    ${
      tailwindcss
        ? `@apply w-full flex items-center justify-center gap-6 mb-10;`
        : `margin-bottom: 2.5rem; display: flex; width: 100%; align-items: center; justify-content: center; gap: 1.5rem;`
    }${
  scss
    ? ``
    : `
}`
}

    ${scss ? `` : `.layout_wrapper .layout_header `}img {
      will-change: filter;
      transition: filter 300ms;
      ${
        tailwindcss
          ? `@apply w-28 h-24 object-contain;`
          : `height: 6rem; width: 7rem; -o-object-fit: contain; object-fit: contain;`
      }${
  scss
    ? ``
    : `
}`
}

      ${scss ? `&` : `.layout_wrapper .layout_header img`}:hover {
        filter: drop-shadow(0 0 2em #D87324);
      }

      ${scss ? `&` : `.layout_wrapper .layout_header img`}:is(.nuxt):hover {
        filter: drop-shadow(0 0 2em #00c58e);
      }${
        scss
          ? `
    }`
          : ``
      }${
  scss
    ? `
  }`
    : ``
}${
  scss
    ? `
}`
    : ``
}
</style>
`

/**
 * layouts/admin.vue for Nuxt.
 * @param typescript Whether to use TypeScript.
 * @param scss Whether to use SCSS.
 * @param tailwindcss Whether to use Tailwind CSS.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export const adminLayoutVue = (
  typescript: boolean,
  scss: boolean,
  tailwindcss: boolean,
): string => `<script setup${typescript ? ' lang="ts"' : ''}></script>

<template>
  <div class="layout_wrapper">
    <div class="layout_header">
      <NuxtLink to="https://github.com/jp-coffee/Scaffolding.Coffee" target="_blank">
        <img src="@/assets/scaffolding.coffee.svg" alt="Scaffolding.Coffee Logo" />
      </NuxtLink>
      <NuxtLink to="https://nuxtjs.com" target="_blank">
        <img src="/nuxt.svg" alt="Nuxt Logo" class="nuxt" />
      </NuxtLink>
    </div>
    <h1>Dashboard</h1>
    <p>(Middleware)</p>
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="${scss ? 'scss' : 'css'}" scoped>
.layout_wrapper {
  min-height: 100svh;
  ${
    tailwindcss
      ? `@apply flex flex-col items-center justify-center;`
      : `display: flex; flex-direction: column; align-items: center; justify-content: center;`
  }${
  scss
    ? ``
    : `
}`
}

  ${scss ? `` : `.layout_wrapper `}h1 {
    ${
      tailwindcss
        ? `@apply text-5xl font-medium text-center mb-20;`
        : `margin-bottom: 5rem; text-align: center; font-size: 3rem; line-height: 1; font-weight: 500;`
    }
  }

  ${scss ? `` : `.layout_wrapper `}.layout_header {
    ${
      tailwindcss
        ? `@apply w-full flex items-center justify-center gap-6 mb-10;`
        : `margin-bottom: 2.5rem; display: flex; width: 100%; align-items: center; justify-content: center; gap: 1.5rem;`
    }${
  scss
    ? ``
    : `
}`
}

    ${scss ? `` : `.layout_wrapper .layout_header `}img {
      will-change: filter;
      transition: filter 300ms;
      ${
        tailwindcss
          ? `@apply w-28 h-24 object-contain;`
          : `height: 6rem; width: 7rem; -o-object-fit: contain; object-fit: contain;`
      }${
  scss
    ? ``
    : `
}`
}

      ${scss ? `&` : `.layout_wrapper .layout_header img`}:hover {
        filter: drop-shadow(0 0 2em #D87324);
      }

      ${scss ? `&` : `.layout_wrapper .layout_header img`}:is(.nuxt):hover {
        filter: drop-shadow(0 0 2em #00c58e);
      }${
        scss
          ? `
    }`
          : ``
      }${
  scss
    ? `
  }`
    : ``
}${
  scss
    ? `
}`
    : ``
}
</style>
`

/**
 * Nuxt Logo SVG.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export const nuxtjsSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 298">
   <g fill="none" fill-rule="nonzero">
      <path fill="#00C58E"
         d="M227.92099 82.07407l-13.6889 23.7037-46.8148-81.08641L23.7037 273.58025h97.3037c0 13.0912 10.61252 23.7037 23.70371 23.7037H23.70371c-8.46771 0-16.29145-4.52017-20.5246-11.85382-4.23315-7.33366-4.23272-16.36849.00114-23.70174L146.89383 12.83951c4.23415-7.33433 12.0596-11.85252 20.5284-11.85252 8.46878 0 16.29423 4.51819 20.52839 11.85252l39.97037 69.23456z" />
      <path fill="#2F495E"
         d="M331.6642 261.7284l-90.05432-155.95062-13.6889-23.7037-13.68888 23.7037-90.04445 155.95061c-4.23385 7.33325-4.23428 16.36808-.00113 23.70174 4.23314 7.33365 12.05689 11.85382 20.5246 11.85382h166.4c8.46946 0 16.29644-4.51525 20.532-11.84955 4.23555-7.3343 4.23606-16.37123.00132-23.706h.01976zM144.7111 273.58024L227.921 129.48148l83.19012 144.09877h-166.4z" />
      <path fill="#108775"
         d="M396.04938 285.4321c-4.23344 7.33254-12.05656 11.85185-20.52345 11.85185H311.1111c13.0912 0 23.7037-10.6125 23.7037-23.7037h40.66173L260.09877 73.74815l-18.4889 32.02963-13.68888-23.7037L239.5753 61.8963c4.23416-7.33433 12.0596-11.85252 20.5284-11.85252 8.46879 0 16.29423 4.51819 20.52839 11.85252l115.41728 199.8321c4.23426 7.33395 4.23426 16.36975 0 23.7037z" />
   </g>
</svg>`

/**
 * middleware/auth.ts
 * @returns string
 * @tests ./frameworks.test.ts
 */
export const authMiddleware = `const isAuthenticated = () => true

export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  if (isAuthenticated() === false) {
    return navigateTo('/login')
  }
})
`

/**
 * utils/count.ts
 * @param typescript whether to use TypeScript or not
 * @returns string
 * @tests ./frameworks.test.ts
 */
export const countUtils = (typescript: boolean) => `${
  typescript
    ? `import { CountType } from '~/types'

`
    : ''
}export const resetCount = ()${typescript ? `: CountType` : ``} => 0
`

/**
 * tests/utils.test.ts
 * @param mpa whether to use MPA or not
 * @returns string
 * @tests ./frameworks.test.ts
 */
export const utilsTest = (
  mpa: boolean,
) => `import { describe, expect, it } from 'vitest'

${
  !mpa
    ? `import { resetCount } from './utils/count'`
    : `import { resetCount } from '../utils/count'`
}

describe('resetCount', () => {
  it('should return 0', () => {
    expect(resetCount()).toBe(0)
  })
})
`

/**
 * types/index.ts
 * @returns string
 * @tests ./frameworks.test.ts
 */
export const typesIndex = `export type CountType = number
`

/**
 * styles/global.scss
 * @param scss whether to use SCSS or not
 * @param tailwindcss whether to use Tailwind CSS or not
 * @param mpa whether to use MPA or not
 * @returns string
 * @tests ./frameworks.test.ts
 */
export const globalStyles = (
  scss: boolean,
  tailwindcss: boolean,
  mpa: boolean,
) => `${
  tailwindcss
    ? `@tailwind base;
@tailwind components;
@tailwind utilities;

`
    : ''
}@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');${
  mpa && !tailwindcss
    ? `
@import './variables.${scss ? 's' : ''}css';`
    : `

:root {
    --mine-shaft-100: #e3e3e3;
    --mine-shaft-950: #242424;
    --ochre-500: #d87324;
}`
}

* {
   box-sizing: inherit;
}
html {
   color-scheme: dark;
}
html,
body {
   max-width: 100vw;
   font-family: 'Inter', sans-serif;
   ${tailwindcss ? `@apply overflow-x-clip;` : 'overflow-x: clip;'}
}
body {
   ${
     tailwindcss
       ? `@apply bg-mine-shaft-950 text-mine-shaft-100;`
       : 'background-color: var(--mine-shaft-950); color: var(--mine-shaft-100);'
   }
}
h1, h2, h3, h4, h5, h6, p, a, ul, ol, li, blockquote, pre, code, table, tr, td, th, form, input, textarea, button, select, details, summary {
    ${tailwindcss ? `@apply m-0 p-0` : 'margin: 0; padding: 0;'}
}
a{
   ${
     tailwindcss
       ? `@apply text-ochre-500 no-underline;`
       : 'color: var(--ochre-500); text-decoration: none;'
   }
}
`

/**
 * styles/variables.scss
 * @returns string
 * @tests ./frameworks.test.ts
 */
export const variableStyles = `:root {
    --mine-shaft-100: #e3e3e3;
    --mine-shaft-950: #242424;
    --ochre-500: #d87324;
}
`
