"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCopyFile = exports.useMakeFile = exports.useRenameDir = exports.useMoveDir = exports.useCopyDir = exports.useRemoveDir = exports.useEmptyDir = exports.useMakeDir = exports.isDirFile = exports.isRootEmpty = exports.isDirEmpty = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const types_1 = require("../types");
const messages_1 = require("./messages");
/**
 * Check if a directory is empty.
 * @param dir The directory to check.
 * @returns boolean
 */
const isDirEmpty = (dir) => {
    const runCheck = (dir) => {
        if (fs_1.default.existsSync(`${process.cwd()}/${dir}`)) {
            const files = fs_1.default.readdirSync(`${process.cwd()}/${dir}`);
            return files.length === 0;
        }
        return true;
    };
    if (Array.isArray(dir)) {
        return dir.map((d) => runCheck(d));
    }
    return runCheck(dir);
};
exports.isDirEmpty = isDirEmpty;
/**
 * Check if a directory is empty.
 * @param dir The directory to check.
 * @returns boolean
 */
const isRootEmpty = (dir) => {
    var _a, _b;
    if (dir === '.' || dir === ((_b = (_a = process.cwd()) === null || _a === void 0 ? void 0 : _a.split('/')) === null || _b === void 0 ? void 0 : _b.pop()) || '')
        dir = '';
    return (0, exports.isDirEmpty)(dir);
};
exports.isRootEmpty = isRootEmpty;
/**
 * Check if a directory exists.
 * @param dir The directory to check.
 * @returns boolean
 */
const isDirFile = (dir, file) => {
    const files = fs_1.default.readdirSync(`${process.cwd()}/${dir}`);
    return files.includes(file);
};
exports.isDirFile = isDirFile;
/**
 * Recursively make a directory and its contents.
 * @param dir The directory to make.
 * @returns void
 */
const useMakeDir = (dir) => {
    const makeFile = (dir) => {
        if (!fs_1.default.existsSync(dir))
            fs_1.default.mkdirSync(dir);
    };
    if (Array.isArray(dir)) {
        dir.forEach((d) => makeFile(d));
        return;
    }
    makeFile(dir);
};
exports.useMakeDir = useMakeDir;
/**
 * Recursively empty a directory and its contents.
 * @param dir The directory to empty.
 * @returns void
 */
const useEmptyDir = (dir) => {
    const emptyDir = (dir) => {
        if (!fs_1.default.existsSync(dir))
            return;
        for (const file of fs_1.default.readdirSync(dir)) {
            const abs = path_1.default.resolve(dir, file);
            if (fs_1.default.lstatSync(abs).isDirectory()) {
                (0, exports.useEmptyDir)(abs);
                fs_1.default.rmdirSync(abs);
            }
            else {
                fs_1.default.unlinkSync(abs);
            }
        }
    };
    if (Array.isArray(dir)) {
        dir.forEach((d) => emptyDir(d));
        return;
    }
    emptyDir(dir);
};
exports.useEmptyDir = useEmptyDir;
/**
 * Recursively remove a directory and its contents.
 * @param dir The directory to remove.
 * @returns void
 */
const useRemoveDir = (dir) => {
    const removeDir = (dir) => {
        if (!fs_1.default.existsSync(dir))
            return;
        fs_1.default.rmdirSync(dir);
    };
    if (Array.isArray(dir)) {
        dir.forEach((d) => removeDir(d));
        return;
    }
    removeDir(dir);
};
exports.useRemoveDir = useRemoveDir;
/**
 * Recursively copy a directory and its contents to a new location.
 * @param from The source directory to copy from.
 * @param to The destination directory to copy to.
 * @returns void
 */
const useCopyDir = (from, to) => {
    if (!fs_1.default.existsSync(from) || !fs_1.default.statSync(from).isDirectory()) {
        return;
    }
    if (!fs_1.default.existsSync(to)) {
        fs_1.default.mkdirSync(to, { recursive: true });
    }
    for (const file of fs_1.default.readdirSync(from)) {
        const source = `${from}/${file}`;
        const destination = `${to}/${file}`;
        if (fs_1.default.statSync(source).isDirectory()) {
            (0, exports.useCopyDir)(source, destination);
        }
        else {
            fs_1.default.copyFileSync(source, destination);
        }
    }
};
exports.useCopyDir = useCopyDir;
/**
 * Recursively move a directory and its contents to a new location.
 * @param from The source directory to move from.
 * @param to The destination directory to move to.
 * @returns void
 * @see useCopyDir
 * @see useRemoveDir
 */
const useMoveDir = (from, to) => {
    (0, exports.useCopyDir)(from, to);
    (0, exports.useRemoveDir)(from);
};
exports.useMoveDir = useMoveDir;
/**
 * Renames a directory to a new name.
 * @param from The path of the directory to be renamed.
 * @param to The new path/name of the directory.
 */
const useRenameDir = (from, to) => {
    if (!fs_1.default.existsSync(from) || !fs_1.default.statSync(from).isDirectory()) {
        throw new Error(`Directory ${from} does not exist or is not a directory`);
    }
    if (fs_1.default.existsSync(to)) {
        throw new Error(`Directory ${to} already exists`);
    }
    fs_1.default.renameSync(from, to);
};
exports.useRenameDir = useRenameDir;
/**
 * Recursively make a file and its contents.
 * @param dir The directory to make.
 * @param file The file to make.
 * @param content The content to write to the file.
 * @returns void
 * @see useMakeDir
 */
const useMakeFile = (dir, file, content) => {
    const fDir = path_1.default.resolve(dir, file);
    if (!fs_1.default.existsSync(fDir)) {
        (0, exports.useMakeDir)(dir);
    }
    fs_1.default.writeFileSync(fDir, content);
};
exports.useMakeFile = useMakeFile;
/**
 * Recursively copy a file and its contents to a new location.
 * @param from The source file to copy from.
 * @param to The destination file to copy to.
 * @returns void
 */
const useCopyFile = (from, to) => {
    from = path_1.default.resolve(__dirname, from);
    fs_1.default.copyFile(from, to, (err) => {
        if (err)
            throw err;
        (0, messages_1.useSendMessage)(`Copied ${from} to ${to}`, types_1.EMessageType.ERROR);
    });
};
exports.useCopyFile = useCopyFile;
//# sourceMappingURL=directories.js.map