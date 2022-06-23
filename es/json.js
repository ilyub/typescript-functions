/* skylib/eslint-plugin disable @skylib/functions/no-restricted-syntax[prefer-a-fromIterable] */
/* skylib/eslint-plugin disable @skylib/functions/no-restricted-syntax[prefer-json] */
import { createValidationObject } from "./core";
import * as is from "./guards";
import * as as from "./inline-assertions";
/**
 * Decodes JSON string.
 *
 * @param source - JSON string.
 * @returns Decoded value.
 */
export function decode(source) {
    try {
        if (is.not.empty(source))
            return JSON.parse(source, reviver);
    }
    catch (_a) {
        // eslint-disable-next-line unicorn/no-null -- Ok
        return null;
    }
    // eslint-disable-next-line unicorn/no-null -- Ok
    return null;
}
/**
 * Encodes to JSON string.
 *
 * @param source - Value to encode.
 * @returns JSON string.
 */
export function encode(source) {
    return JSON.stringify(source, replacer);
}
/**
 * Compares two values as JSON strings.
 *
 * @param x - Value 1.
 * @param y - Value 2.
 * @returns _True_ if two values are equal, _false_ otherwise.
 */
export function eq(x, y) {
    return encode(x) === encode(y);
}
/**
 * Compares two values as JSON strings.
 *
 * @param x - Value 1.
 * @param y - Value 2.
 * @returns _True_ if two values are not equal, _false_ otherwise.
 */
export function neq(x, y) {
    return encode(x) !== encode(y);
}
const TypeVO = createValidationObject({
    "map-5702-3c89-3feb-75d4": "map-5702-3c89-3feb-75d4",
    "set-41ef-10c9-ae1f-15e8": "set-41ef-10c9-ae1f-15e8"
});
const isEntry = is.tuple.factory(is.unknown, is.unknown);
const isEntries = is.factory(is.array.of, isEntry);
const isType = is.factory(is.enumeration, TypeVO);
const isCustomData = is.object.factory({ type: isType, value: is.unknown }, {});
/**
 * JSON replacer.
 *
 * @param _key - Key.
 * @param value - Value.
 * @returns New value.
 */
function replacer(_key, value) {
    // eslint-disable-next-line unicorn/no-null -- Ok
    if (is.empty(value))
        return null;
    if (is.map(value))
        return { type: "map-5702-3c89-3feb-75d4", value: [...value] };
    if (is.set(value))
        return { type: "set-41ef-10c9-ae1f-15e8", value: [...value] };
    return value;
}
/**
 * JSON reviver.
 *
 * @param _key - Key.
 * @param value - Value.
 * @returns New value.
 */
function reviver(_key, value) {
    // eslint-disable-next-line unicorn/no-null -- Ok
    if (is.empty(value))
        return null;
    if (isCustomData(value))
        switch (value.type) {
            case "map-5702-3c89-3feb-75d4":
                return new Map(as.byGuard(value.value, isEntries));
            case "set-41ef-10c9-ae1f-15e8":
                return new Set(as.byGuard(value.value, is.array));
        }
    return value;
}
//# sourceMappingURL=json.js.map