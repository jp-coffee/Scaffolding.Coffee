import { dir } from 'console'
import fs from 'fs'
import path from 'path'

import { useSendMessage } from './messages'

/**
 * Check if a directory is empty.
 * @param dir The directory to check.
 * @returns boolean
 */
export const isDirEmpty = (dir: string | string[]): boolean | boolean[] => {
  const runCheck = (dir: string): boolean => {
    if (fs.existsSync(`${process.cwd()}/${dir}`)) {
      const files = fs.readdirSync(`${process.cwd()}/${dir}`)
      return files.length === 0
    }
    return true
  }

  if (Array.isArray(dir)) {
    return dir.map((d) => runCheck(d)) as boolean[]
  }

  return runCheck(dir) as boolean
}

/**
 * Check if a directory is empty.
 * @param dir The directory to check.
 * @returns boolean
 */
export const isRootEmpty = (dir: string): boolean => {
  if (dir === '.' || dir === process.cwd()?.split('/')?.pop() || '') dir = ''
  return isDirEmpty(dir) as boolean
}

/**
 * Check if a directory exists.
 * @param dir The directory to check.
 * @returns boolean
 */
export const isDirFile = (dir: string, file: string): boolean => {
  const files = fs.readdirSync(`${process.cwd()}/${dir}`)
  return files.includes(file)
}

/**
 * Recursively make a directory and its contents.
 * @param dir The directory to make.
 * @returns void
 */
export const useMakeDir = (dir: string | string[]): void => {
  const makeFile = (dir: string): void => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir)
  }
  if (Array.isArray(dir)) {
    dir.forEach((d) => makeFile(d))
    return
  }
  makeFile(dir)
}

/**
 * Recursively empty a directory and its contents.
 * @param dir The directory to empty.
 * @returns void
 */
export const useEmptyDir = (dir: string | string[]): void => {
  const emptyDir = (dir: string): void => {
    if (!fs.existsSync(dir)) return
    for (const file of fs.readdirSync(dir)) {
      const abs = path.resolve(dir, file)
      if (fs.lstatSync(abs).isDirectory()) {
        useEmptyDir(abs)
        fs.rmdirSync(abs)
      } else {
        fs.unlinkSync(abs)
      }
    }
  }
  if (Array.isArray(dir)) {
    dir.forEach((d) => emptyDir(d))
    return
  }
  emptyDir(dir)
}

/**
 * Recursively remove a directory and its contents.
 * @param dir The directory to remove.
 * @returns void
 */
export const useRemoveDir = (dir: string | string[]): void => {
  const removeDir = (dir: string): void => {
    if (!fs.existsSync(dir)) return
    fs.rmdirSync(dir)
  }
  if (Array.isArray(dir)) {
    dir.forEach((d) => removeDir(d))
    return
  }
  removeDir(dir)
}

/**
 * Recursively copy a directory and its contents to a new location.
 * @param from The source directory to copy from.
 * @param to The destination directory to copy to.
 * @returns void
 */
export const useCopyDir = (from: string, to: string): void => {
  if (!fs.existsSync(from) || !fs.statSync(from).isDirectory()) {
    return
  }

  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true })
  }

  for (const file of fs.readdirSync(from)) {
    const source = `${from}/${file}`
    const destination = `${to}/${file}`

    if (fs.statSync(source).isDirectory()) {
      useCopyDir(source, destination)
    } else {
      fs.copyFileSync(source, destination)
    }
  }
}

/**
 * Recursively move a directory and its contents to a new location.
 * @param from The source directory to move from.
 * @param to The destination directory to move to.
 * @returns void
 * @see useCopyDir
 * @see useRemoveDir
 */
export const useMoveDir = (from: string, to: string): void => {
  useCopyDir(from, to)
  useRemoveDir(from)
}

/**
 * Renames a directory to a new name.
 * @param from The path of the directory to be renamed.
 * @param to The new path/name of the directory.
 */
export const useRenameDir = (from: string, to: string): void => {
  if (!fs.existsSync(from) || !fs.statSync(from).isDirectory()) {
    throw new Error(`Directory ${from} does not exist or is not a directory`)
  }

  if (fs.existsSync(to)) {
    throw new Error(`Directory ${to} already exists`)
  }

  fs.renameSync(from, to)
}

/**
 * Recursively make a file and its contents.
 * @param dir The directory to make.
 * @param file The file to make.
 * @param content The content to write to the file.
 * @returns void
 * @see useMakeDir
 */
export const useMakeFile = (
  dir: string,
  file: string,
  content: string,
): void => {
  const fDir = path.resolve(dir, file)
  if (!fs.existsSync(fDir)) {
    useMakeDir(dir)
  }
  fs.writeFileSync(fDir, content)
}

/**
 * Recursively copy a file and its contents to a new location.
 * @param from The source file to copy from.
 * @param to The destination file to copy to.
 * @returns void
 */
export const useCopyFile = (from: string, to: string): void => {
  from = path.resolve(__dirname, from)

  fs.copyFile(from, to, (err) => {
    if (err) throw err
    console.log(`Successfully copied file from ${from} to ${to}`)
  })
}
