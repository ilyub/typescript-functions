import "jest-extended";
import type { unknowns } from "..";
import { json } from "..";
import { matchers } from "./expect";

export type { ExpectFromMatcher } from "./expect";

export {
  clock,
  installFakeTimer,
  run,
  setRandomSystemTime
} from "./fake-timers";

/**
 * Jest reset.
 */
export function jestReset(): void {
  jest.clearAllMocks();
}

/**
 * Jest setup.
 */
export function jestSetup(): void {
  // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-var-requires -- Ok
  expect.extend(require("jest-extended/all"));
  expect.extend(matchers);
  jest.spyOn(console, "error").mockImplementation((...args: unknowns) => {
    throw new Error(`console.error: ${json.encode(args)}`);
  });
  jest.spyOn(console, "warn").mockImplementation((...args: unknowns) => {
    throw new Error(`console.warn: ${json.encode(args)}`);
  });
  jestReset();
}
