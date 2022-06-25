import type { Matchers, Result } from "./expect.internal";
import type { Extends } from "ts-toolbelt/out/Any/Extends";
import type { If } from "ts-toolbelt/out/Any/If";
/**
 * @deprecated - Use "buildEqualsResult" function.
 */
export declare const buildResult: typeof buildEqualsMatcherResult;
export interface ExpectFromMatcher<K extends keyof Matchers> {
    /**
     * Expect function.
     *
     * @param got - Got.
     * @param args - Arguments.
     * @returns Result.
     */
    (got: unknown, ...args: Parameters<Matchers[K]>): If<Extends<ReturnType<Matchers[K]>, Promise<unknown>>, Promise<Result>, Result>;
}
/**
 * Builds matcher result.
 *
 * @param pass - Pass.
 * @param message - Message.
 * @param got - Got.
 * @param expected - Expected.
 * @param immediate - Immediate.
 * @returns Matcher result.
 */
export declare function buildEqualsMatcherResult(pass: boolean, message: string, got: unknown, expected: unknown, immediate?: boolean): Result;
/**
 * Builds matcher result.
 *
 * @param pass - Pass.
 * @param expectSuccess - Expect success message.
 * @param expectFailure - Expect failure message.
 * @returns Matcher result.
 */
export declare function buildMatcherResult(pass: boolean, expectSuccess: string, expectFailure: string): Result;
//# sourceMappingURL=expect.d.ts.map