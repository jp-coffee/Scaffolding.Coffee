import { TArgument } from '../types';
/**
 * Gets the arguments from the command line and returns them as an object.
 * @param args The arguments to parse.
 * @returns TArgument
 * @tests ./arguments.test.ts
 */
export declare const getArgs: (args: string[]) => TArgument;
