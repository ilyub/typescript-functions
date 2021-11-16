"use strict";
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[object] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.values = exports.unfreezeDeep = exports.unfreeze = exports.undefinedToOptional = exports.sort = exports.size = exports.omit = exports.merge = exports.map = exports.keys = exports.hasOwnProp = exports.getPrototypeOf = exports.fromEntries = exports.freezeDeep = exports.freeze = exports.filter = exports.extend = exports.entries = exports.defineProperty = exports.compare = exports.clone = exports.assign = void 0;
const tslib_1 = require("tslib");
const a = (0, tslib_1.__importStar)(require("./array"));
const is = (0, tslib_1.__importStar)(require("./guards"));
const json = (0, tslib_1.__importStar)(require("./json"));
/**
 * Typed version of Object.assign.
 *
 * @param mutableTarget - Target object.
 * @param sources - Sources.
 * @returns Target.
 */
function assign(mutableTarget, ...sources) {
    return Object.assign(mutableTarget, ...sources);
}
exports.assign = assign;
/**
 * Creates object copy.
 *
 * @param obj - Object.
 * @returns Object copy.
 */
function clone(obj) {
    return Object.assign({}, obj);
}
exports.clone = clone;
/**
 * Compares two objects.
 *
 * @param obj1 - Object 1.
 * @param obj2 - Object 2.
 * @returns _True_ if objects are equal, _false_ otherwise.
 */
function compare(obj1, obj2) {
    return json.encode(obj1) === json.encode(obj2);
}
exports.compare = compare;
/**
 * Typed version of Object.defineProperty.
 *
 * @param obj - Object.
 * @param key - Property name.
 * @param descriptor - Descriptor.
 */
function defineProperty(obj, key, descriptor) {
    Object.defineProperty(obj, key, descriptor);
}
exports.defineProperty = defineProperty;
/**
 * Typed version of Object.entries.
 *
 * @param obj - Object.
 * @returns Object entries.
 */
function getEntries(obj) {
    return Object.entries(obj);
}
exports.entries = getEntries;
function extend(target, ...sources) {
    return Object.assign(target, ...sources);
}
exports.extend = extend;
/**
 * Filters object by callback.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns New filtered object.
 */
function filter(obj, callback) {
    const result = {};
    for (const [key, value] of getEntries(obj))
        if (callback(value, key))
            result[key] = value;
    return result;
}
exports.filter = filter;
/**
 * Marks object as readonly.
 *
 * @param obj - Object.
 * @returns Object marked as readonly.
 */
function freeze(obj) {
    return obj;
}
exports.freeze = freeze;
/**
 * Marks object as deep readonly.
 *
 * @param obj - Object.
 * @returns Object marked as deep readonly.
 */
function freezeDeep(obj) {
    return obj;
}
exports.freezeDeep = freezeDeep;
freeze.deep = freezeDeep;
/**
 * Creates object from entries.
 *
 * @param entries - Entries.
 * @returns Object.
 */
function fromEntries(entries) {
    const result = {};
    for (const entry of entries)
        result[entry[0]] = entry[1];
    return result;
}
exports.fromEntries = fromEntries;
fromEntries.exhaustive = fromEntries;
/**
 * Typed version of Object.getPrototypeOf.
 *
 * @param obj - Object.
 * @returns Prototype if available, _undefined_ otherwise.
 */
function getPrototypeOf(obj) {
    const prototype = Object.getPrototypeOf(obj);
    return is.object(prototype) ? prototype : undefined;
}
exports.getPrototypeOf = getPrototypeOf;
/**
 * Alias of Object.prototype.hasOwnProperty.
 *
 * @param key - Property name.
 * @param obj - Object.
 * @returns _True_ if object has property, _false_ otherwise.
 */
function hasOwnProp(key, obj) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
exports.hasOwnProp = hasOwnProp;
/**
 * Typed version of Object.keys.
 *
 * @param obj - Object.
 * @returns Object keys.
 */
function keys(obj) {
    return Object.keys(obj);
}
exports.keys = keys;
/**
 * Applies callback to each property.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns New object.
 */
function map(obj, callback) {
    return fromEntries.exhaustive(Object.entries(obj).map(([key, value]) => [
        key,
        callback(value, key)
    ]));
}
exports.map = map;
/**
 * Merges several objects.
 * If more than one object has the same key, respective values are combined into array.
 *
 * @param objects - Objects.
 * @returns Merged object.
 */
function merge(...objects) {
    const pool = {};
    for (const obj of objects)
        for (const [key, value] of Object.entries(obj)) {
            const valuesByKey = pool[key];
            if (valuesByKey)
                valuesByKey.push(value);
            else
                pool[key] = [value];
        }
    return fromEntries(Object.entries(pool).map(([key, valuesByKey]) => [
        key,
        valuesByKey.length === 1 ? valuesByKey[0] : valuesByKey
    ]));
}
exports.merge = merge;
/**
 * Omits keys from object.
 *
 * @param obj - Object.
 * @param exclude - Keys to exclude.
 * @returns New object with given keys omitted.
 */
function omit(obj, ...exclude) {
    const keysSet = new Set(exclude);
    return filter(obj, (_value, key) => !keysSet.has(key));
}
exports.omit = omit;
/**
 * Returns the number of enumerable properties.
 *
 * @param obj - Object.
 * @returns The number of enumerable properties.
 */
function size(obj) {
    return Object.keys(obj).length;
}
exports.size = size;
/**
 * Sorts object.
 *
 * @param obj - Object.
 * @param compareFn - Comparison function.
 * @returns New object.
 */
function sort(obj, compareFn) {
    return fromEntries(a.sort(getEntries(obj), compareFn));
}
exports.sort = sort;
/**
 * Converts undefined properties to optional.
 *
 * @param obj - Object.
 * @returns New object.
 */
function undefinedToOptional(obj) {
    return filter(obj, is.not.empty);
}
exports.undefinedToOptional = undefinedToOptional;
/**
 * Marks object as writable.
 *
 * @param obj - Object.
 * @returns Object marked as writable.
 */
function unfreeze(obj) {
    return obj;
}
exports.unfreeze = unfreeze;
/**
 * Marks object as deep writable.
 *
 * @param obj - Object.
 * @returns Object marked as deep writable.
 */
function unfreezeDeep(obj) {
    return obj;
}
exports.unfreezeDeep = unfreezeDeep;
unfreeze.deep = unfreezeDeep;
/**
 * Typed version of Object.values.
 *
 * @param obj - Object.
 * @returns Object values.
 */
function values(obj) {
    return Object.values(obj);
}
exports.values = values;
//# sourceMappingURL=object.js.map