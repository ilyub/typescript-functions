import { assert } from "..";
import { buildEqualsResult } from "./expect";
import { isMock } from "./expect.internal";
import { equals } from "@jest/expect-utils";
// eslint-disable-next-line no-console -- Ok
export const error = console.error;
// eslint-disable-next-line no-console -- Ok
export const warn = console.warn;
export const matchers = {
    executionTimeToBe: async (got, expected, precision = 10) => {
        assert.callable(got, "Expecting async function");
        const t1 = Date.now();
        await got();
        const t2 = Date.now();
        const gotTime = t2 - t1;
        return buildEqualsResult(Math.abs(gotTime - expected) <= precision, "Unexpected execution time", gotTime, expected);
    },
    mockCallsToBe: (got, ...expected) => {
        assert.byGuard(got, isMock, "Expecting mock function");
        const result = buildEqualsResult(equals(got.mock.calls, expected), "Unexpected mock calls", got.mock.calls, expected, true);
        // eslint-disable-next-line @skylib/no-restricted-syntax/prefer-mockCallsToBe -- Ok
        got.mockClear();
        return result;
    },
    toBeSameAs: (got, expected) => {
        assert.object(got, "Expecting object");
        return buildEqualsResult(got === expected, "Object are not identical", got, expected);
    }
};
//# sourceMappingURL=jest.internal.js.map