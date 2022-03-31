import * as a from "./array";
import * as assert from "./assertions";
import * as fn from "./function";
import * as s from "./string";
import type { stringU } from "./types/core";

/**
 * Adds flag to regular expression.
 *
 * @param re - Regular expression.
 * @param flags - Flags.
 * @returns New regular expression.
 */
export function addFlags(re: RegExp, flags: string): RegExp {
  flags = s.filter(flags, flag => !re.flags.includes(flag));

  // eslint-disable-next-line security/detect-non-literal-regexp
  return flags ? new RegExp(re, re.flags + flags) : re;
}

/**
 * Escapes regular expression special characters.
 *
 * @param str - String.
 * @returns Escaped string.
 */
export function escapeString(str: string): string {
  return str.replace(/[$()*+.?[\\\]^{|}]/gu, "\\$&").replace(/-/gu, "\\x2d");
}

/**
 * Finds all matches.
 *
 * @param str - String.
 * @param re - Regular expression.
 * @returns Matches.
 */
export function matchAll(str: string, re: RegExp): RegExpExecArray[] {
  re = addFlags(re, "g");

  return a.fromIterable(
    fn.run(function* (): Generator<RegExpExecArray> {
      let match = re.exec(str);

      while (match) {
        yield match;
        match = re.exec(str);
      }
    })
  );
}

/**
 * Finds substring matching regular expression.
 *
 * @param str - String.
 * @param re - Regular expression.
 * @returns Substring if found, _undefined_ otherwise.
 */
export function slice(str: string, re: RegExp): stringU {
  const result = re.exec(str);

  return result ? result[0] : undefined;
}

/**
 * Finds substring matching regular expression.
 *
 * @param str - String.
 * @param re - Regular expression.
 * @returns Substring if found.
 * @throws AssertionError otherwise.
 */
slice.orFail = (str: string, re: RegExp): string => {
  const result = re.exec(str);

  assert.not.empty(result);
  assert.not.empty(result[0]);

  return result[0];
};
