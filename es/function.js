import * as is from "./guards";
import * as _ from "@skylib/lodash-commonjs-es";
export const noop = _.noop.bind(_);
/**
 * Creates factory function from value.
 *
 * @param value - Value.
 * @returns Factory function.
 */
export function factoryFromValue(value) {
    return () => value;
}
/**
 * Identity function.
 *
 * @param value - Value.
 * @returns Value.
 */
export function identity(value) {
    return value;
}
/**
 * Noop function.
 *
 * @param _args - Arguments.
 * @returns _True_.
 */
export function noopTrue(..._args) {
    return true;
}
export function pipe(value, ...callbacks) {
    for (const callback of callbacks)
        value = callback(value);
    return value;
}
export function run(mixed) {
    return is.callable(mixed) ? mixed() : mixed;
}
//# sourceMappingURL=function.js.map