import { TPKG } from '../types';
/**
 * Scripts for Nuxt package.json.
 * @returns TPKG['scripts']
 * @tests ./frameworks.test.ts
 */
export declare const scripts: TPKG['scripts'];
/**
 * DevDependencies for Nuxt package.json.
 * @returns TPKG['devDependencies']
 * @tests ./frameworks.test.ts
 */
export declare const devDependencies: TPKG['devDependencies'];
/**
 * Dependencies for Nuxt package.json.
 * @param tailwindcss Whether to include Tailwind CSS.
 * @returns TPKG['dependencies']
 * @tests ./frameworks.test.ts
 */
export declare const nuxtConfig: (tailwindcss: boolean) => string;
/**
 * App.vue for Nuxt.
 * @param typescript Whether to use TypeScript.
 * @param scss Whether to use SCSS.
 * @param mpa Whether to use MPA.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export declare const appVue: (typescript: boolean, scss: boolean, mpa: boolean) => string;
/**
 * pages/index.vue for Nuxt.
 * @param typescript Whether to use TypeScript.
 * @param scss Whether to use SCSS.
 * @param tailwindcss Whether to use Tailwind CSS.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export declare const indexVue: (typescript: boolean, scss: boolean, tailwindcss: boolean) => string;
/**
 * pages/auth/dashboard.vue for Nuxt.
 * @param typescript Whether to use TypeScript.
 * @param scss Whether to use SCSS.
 * @param tailwindcss Whether to use Tailwind CSS.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export declare const dashboardVue: (typescript: boolean, scss: boolean, tailwindcss: boolean) => string;
/**
 * components/WelcomeBlock.vue for Nuxt.
 * @param typescript Whether to use TypeScript.
 * @param scss Whether to use SCSS.
 * @param tailwindcss Whether to use Tailwind CSS.
 * @param mpa Whether to use MPA.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export declare const welcomeBlockVue: (typescript: boolean, scss: boolean, tailwindcss: boolean, mpa: boolean) => string;
/**
 * components/Button/Default.vue for Nuxt.
 * @param typescript Whether to use TypeScript.
 * @param scss Whether to use SCSS.
 * @param tailwindcss Whether to use Tailwind CSS.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export declare const buttonDefaultVue: (typescript: boolean, scss: boolean, tailwindcss: boolean) => string;
/**
 * layouts/default.vue for Nuxt.
 * @param typescript Whether to use TypeScript.
 * @param scss Whether to use SCSS.
 * @param tailwindcss Whether to use Tailwind CSS.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export declare const defaultLayoutVue: (typescript: boolean, scss: boolean, tailwindcss: boolean) => string;
/**
 * layouts/admin.vue for Nuxt.
 * @param typescript Whether to use TypeScript.
 * @param scss Whether to use SCSS.
 * @param tailwindcss Whether to use Tailwind CSS.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export declare const adminLayoutVue: (typescript: boolean, scss: boolean, tailwindcss: boolean) => string;
/**
 * Nuxt Logo SVG.
 * @returns string
 * @tests ./frameworks.test.ts
 */
export declare const nuxtjsSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 298\">\n   <g fill=\"none\" fill-rule=\"nonzero\">\n      <path fill=\"#00C58E\"\n         d=\"M227.92099 82.07407l-13.6889 23.7037-46.8148-81.08641L23.7037 273.58025h97.3037c0 13.0912 10.61252 23.7037 23.70371 23.7037H23.70371c-8.46771 0-16.29145-4.52017-20.5246-11.85382-4.23315-7.33366-4.23272-16.36849.00114-23.70174L146.89383 12.83951c4.23415-7.33433 12.0596-11.85252 20.5284-11.85252 8.46878 0 16.29423 4.51819 20.52839 11.85252l39.97037 69.23456z\" />\n      <path fill=\"#2F495E\"\n         d=\"M331.6642 261.7284l-90.05432-155.95062-13.6889-23.7037-13.68888 23.7037-90.04445 155.95061c-4.23385 7.33325-4.23428 16.36808-.00113 23.70174 4.23314 7.33365 12.05689 11.85382 20.5246 11.85382h166.4c8.46946 0 16.29644-4.51525 20.532-11.84955 4.23555-7.3343 4.23606-16.37123.00132-23.706h.01976zM144.7111 273.58024L227.921 129.48148l83.19012 144.09877h-166.4z\" />\n      <path fill=\"#108775\"\n         d=\"M396.04938 285.4321c-4.23344 7.33254-12.05656 11.85185-20.52345 11.85185H311.1111c13.0912 0 23.7037-10.6125 23.7037-23.7037h40.66173L260.09877 73.74815l-18.4889 32.02963-13.68888-23.7037L239.5753 61.8963c4.23416-7.33433 12.0596-11.85252 20.5284-11.85252 8.46879 0 16.29423 4.51819 20.52839 11.85252l115.41728 199.8321c4.23426 7.33395 4.23426 16.36975 0 23.7037z\" />\n   </g>\n</svg>";
/**
 * middleware/auth.ts
 * @returns string
 * @tests ./frameworks.test.ts
 */
export declare const authMiddleware = "const isAuthenticated = () => true\n\nexport default defineNuxtRouteMiddleware((to, from) => {\n  // isAuthenticated() is an example method verifying if a user is authenticated\n  if (isAuthenticated() === false) {\n    return navigateTo('/login')\n  }\n})\n";
/**
 * utils/count.ts
 * @param typescript whether to use TypeScript or not
 * @returns string
 * @tests ./frameworks.test.ts
 */
export declare const countUtils: (typescript: boolean) => string;
/**
 * tests/utils.test.ts
 * @param mpa whether to use MPA or not
 * @returns string
 * @tests ./frameworks.test.ts
 */
export declare const utilsTest: (mpa: boolean) => string;
/**
 * types/index.ts
 * @returns string
 * @tests ./frameworks.test.ts
 */
export declare const typesIndex = "export type CountType = number\n";
/**
 * styles/global.scss
 * @param scss whether to use SCSS or not
 * @param tailwindcss whether to use Tailwind CSS or not
 * @param mpa whether to use MPA or not
 * @returns string
 * @tests ./frameworks.test.ts
 */
export declare const globalStyles: (scss: boolean, tailwindcss: boolean, mpa: boolean) => string;
