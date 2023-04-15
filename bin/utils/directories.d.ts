/**
 * Check if a directory is empty.
 * @param dir The directory to check.
 * @returns boolean
 */
export declare const isDirEmpty: (dir: string | string[]) => boolean | boolean[];
/**
 * Check if a directory is empty.
 * @param dir The directory to check.
 * @returns boolean
 */
export declare const isRootEmpty: (dir: string) => boolean;
/**
 * Check if a directory exists.
 * @param dir The directory to check.
 * @returns boolean
 */
export declare const isDirFile: (dir: string, file: string) => boolean;
/**
 * Recursively make a directory and its contents.
 * @param dir The directory to make.
 * @returns void
 */
export declare const useMakeDir: (dir: string | string[]) => void;
/**
 * Recursively empty a directory and its contents.
 * @param dir The directory to empty.
 * @returns void
 */
export declare const useEmptyDir: (dir: string | string[]) => void;
/**
 * Recursively remove a directory and its contents.
 * @param dir The directory to remove.
 * @returns void
 */
export declare const useRemoveDir: (dir: string | string[]) => void;
/**
 * Recursively copy a directory and its contents to a new location.
 * @param from The source directory to copy from.
 * @param to The destination directory to copy to.
 * @returns void
 */
export declare const useCopyDir: (from: string, to: string) => void;
/**
 * Recursively move a directory and its contents to a new location.
 * @param from The source directory to move from.
 * @param to The destination directory to move to.
 * @returns void
 * @see useCopyDir
 * @see useRemoveDir
 */
export declare const useMoveDir: (from: string, to: string) => void;
/**
 * Renames a directory to a new name.
 * @param from The path of the directory to be renamed.
 * @param to The new path/name of the directory.
 */
export declare const useRenameDir: (from: string, to: string) => void;
/**
 * Recursively make a file and its contents.
 * @param dir The directory to make.
 * @param file The file to make.
 * @param content The content to write to the file.
 * @returns void
 * @see useMakeDir
 */
export declare const useMakeFile: (dir: string, file: string, content: string) => void;
/**
 * Recursively copy a file and its contents to a new location.
 * @param from The source file to copy from.
 * @param to The destination file to copy to.
 * @returns void
 */
export declare const useCopyFile: (from: string, to: string) => void;
