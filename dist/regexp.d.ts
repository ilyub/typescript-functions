export declare type RegExpExecArrays = readonly RegExpExecArray[];
/**
 * Adds flag to regular expression.
 *
 * @param re - Regular expression.
 * @param flags - Flags.
 * @returns New regular expression.
 */
export declare function addFlags(re: RegExp, flags: string): RegExp;
/**
 * Finds all matches.
 *
 * @param str - String.
 * @param re - Regular expression.
 * @returns Matches.
 */
export declare function matchAll(str: string, re: RegExp): RegExpExecArrays;
//# sourceMappingURL=regexp.d.ts.map