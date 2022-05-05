import * as is from "./guards";
import { defineFn } from "./module-definition";
export const not = defineFn(
/**
 * Not implemented.
 */
() => {
    throw new Error("Not implemented");
}, {
    /**
     * Converts value to not empty.
     *
     * @param this - No this.
     * @param value - Value.
     * @param defVal - Default value.
     * @returns Value if it is not empty, defVal otherwise.
     */
    empty(value, defVal) {
        return is.not.empty(value) ? value : defVal;
    }
});
/**
 * Converts value to a number.
 *
 * @param value - Value.
 * @param defVal - Default value.
 * @returns Converted value, defVal on failure.
 */
export function number(value, defVal = 0) {
    var _a;
    return (_a = numberU(value)) !== null && _a !== void 0 ? _a : defVal;
}
/**
 * Converts value to a number.
 *
 * @param value - Value.
 * @returns Converted value, _undefined_ on failure.
 */
export function numberU(value) {
    switch (typeof value) {
        case "boolean":
            return Number(value);
        case "number":
            return value;
        case "string": {
            if (value === "" || value === "\n" || value === "\r\n")
                return undefined;
            const result = Number(value);
            return Number.isNaN(result) ? undefined : result;
        }
        default:
            return undefined;
    }
}
/**
 * Converts value to a string.
 *
 * @param value - Value.
 * @returns Converted value.
 */
export function string(value) {
    return is.not.empty(value) ? String(value) : "";
}
/**
 * Converts value to type stringU.
 *
 * @param value - Value.
 * @returns Converted value.
 */
export function stringU(value) {
    const str = is.not.empty(value) ? String(value) : "";
    return str ? str : undefined;
}
//# sourceMappingURL=converters.js.map