"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleNuxt = void 0;
const defaultDefaults = __importStar(require("../files/default"));
const eslintDefaults = __importStar(require("../files/eslint"));
const defaults = __importStar(require("../files/nuxt"));
const scssDefaults = __importStar(require("../files/scss"));
const tailwindcssDefaults = __importStar(require("../files/tailwindcss"));
const tsDefaults = __importStar(require("../files/typescript"));
const vitestDefaults = __importStar(require("../files/vitest"));
const directories_1 = require("../utils/directories");
/**
 * Handle Nuxt scaffolding.
 * @param root Root directory of the project.
 * @param answers Answers from the prompts.
 * @param pkg The package.json object.
 * @returns TPKG
 * @tests ./frameworks.test.ts
 */
const handleNuxt = (root, answers, pkg) => {
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
    };
    (0, directories_1.useMakeDir)(`${root}/assets`);
    (0, directories_1.useMakeDir)(`${root}/components`);
    (0, directories_1.useMakeDir)(`${root}/components/Button`);
    (0, directories_1.useMakeDir)(`${root}/layouts`);
    (0, directories_1.useMakeDir)(`${root}/public`);
    (0, directories_1.useMakeDir)(`${root}/utils`);
    (0, directories_1.useMakeFile)(root, `assets/scaffolding.coffee.svg`, defaultDefaults.scaffoldingCoffeeSVG);
    (0, directories_1.useMakeFile)(root, `components/WelcomeBlock.vue`, defaults.welcomeBlockVue(answers.typescript, answers.scss, answers.tailwindcss));
    (0, directories_1.useMakeFile)(root, `components/Button/Default.vue`, defaults.buttonDefaultVue(answers.typescript, answers.scss, answers.tailwindcss));
    (0, directories_1.useMakeFile)(root, `layouts/default.vue`, defaults.defaultLayoutVue(answers.typescript, answers.scss, answers.tailwindcss));
    (0, directories_1.useMakeFile)(root, `public/nuxt.svg`, defaults.nuxtjsSVG);
    (0, directories_1.useMakeFile)(root, `utils/count.${answers.typescript ? 'ts' : 'js'}`, defaults.countUtils(answers.typescript));
    (0, directories_1.useMakeFile)(root, `nuxt.config.${answers.typescript ? 'ts' : 'js'}`, defaults.nuxtConfig(answers.tailwindcss));
    (0, directories_1.useMakeFile)(root, `app.vue`, defaults.appVue(answers.typescript, answers.scss, answers.mpa));
    if (answers.mpa) {
        (0, directories_1.useMakeDir)(`${root}/middleware`);
        (0, directories_1.useMakeDir)(`${root}/pages`);
        (0, directories_1.useMakeDir)(`${root}/pages/auth`);
        (0, directories_1.useMakeDir)(`${root}/styles`);
        if (answers.typescript)
            (0, directories_1.useMakeDir)(`${root}/types`);
        if (answers.vitest)
            (0, directories_1.useMakeDir)(`${root}/tests`);
        (0, directories_1.useMakeFile)(root, 'pages/index.vue', defaults.indexVue(answers.typescript, answers.scss, answers.tailwindcss));
        (0, directories_1.useMakeFile)(root, 'pages/auth/dashboard.vue', defaults.dashboardVue(answers.typescript, answers.scss, answers.tailwindcss));
        (0, directories_1.useMakeFile)(root, `middleware/auth.${answers.typescript ? 'ts' : 'js'}`, defaults.authMiddleware);
        (0, directories_1.useMakeFile)(root, `layouts/admin.vue`, defaults.adminLayoutVue(answers.typescript, answers.scss, answers.tailwindcss));
    }
    if (answers.typescript) {
        pkg.devDependencies = {
            ...pkg.devDependencies,
            ...tsDefaults.devDependencies(),
        };
        (0, directories_1.useMakeFile)(root, 'tsconfig.json', tsDefaults.tsconfig(answers.framework));
        (0, directories_1.useMakeFile)(root, `${answers.mpa ? 'types/utils' : 'tests'}.test.${answers.typescript ? 'ts' : 'js'}`, defaults.typesIndex);
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
        };
        (0, directories_1.useMakeFile)(root, '.eslintrc', eslintDefaults.eslintrc(answers.framework));
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
        };
        (0, directories_1.useMakeFile)(root, `vite.config.${answers.typescript ? 'ts' : 'js'}`, vitestDefaults.viteConfig);
        (0, directories_1.useMakeFile)(root, `tests${answers.mpa ? '/utils' : ''}.test.${answers.typescript ? 'ts' : 'js'}`, defaults.utilsTest(answers.mpa));
    }
    if (answers.scss) {
        pkg.devDependencies = {
            ...pkg.devDependencies,
            ...scssDefaults.devDependencies,
        };
    }
    if (answers.tailwindcss) {
        pkg.devDependencies = {
            ...pkg.devDependencies,
            ...tailwindcssDefaults.devDependencies,
        };
        (0, directories_1.useMakeFile)(root, 'postcss.config.js', tailwindcssDefaults.postcssConfig);
        (0, directories_1.useMakeFile)(root, 'tailwind.config.js', tailwindcssDefaults.tailwindcssConfig(answers.framework, answers.typescript, !answers.mpa));
    }
    (0, directories_1.useMakeFile)(root, `${answers.mpa ? 'styles/global' : 'styles'}.${answers.scss ? 's' : ''}css`, defaults.globalStyles(answers.tailwindcss));
    return pkg;
};
exports.handleNuxt = handleNuxt;
//# sourceMappingURL=nuxt.js.map