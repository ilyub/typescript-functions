"use strict";
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[array] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.unshift = exports.uniqueBy = exports.truncate = exports.sort = exports.reverse = exports.replace = exports.removeBy = exports.random = exports.push = exports.last = exports.includesBy = exports.get = exports.fromRange = exports.fromIterable = exports.first = exports.findBy = exports.drop = exports.clone = exports.chain = void 0;
const tslib_1 = require("tslib");
const _ = (0, tslib_1.__importStar)(require("lodash"));
const assert = (0, tslib_1.__importStar)(require("./assertions"));
const is = (0, tslib_1.__importStar)(require("./guards"));
const o = (0, tslib_1.__importStar)(require("./object"));
const reflect = (0, tslib_1.__importStar)(require("./reflect"));
/**
 * Creates an array of pairs [x1, x2], [x2, x3]...
 *
 * @param arr - Array.
 * @returns An array of pairs.
 */
function chain(arr) {
    const result = [];
    let prev = first(arr);
    for (const next of arr.slice(1)) {
        result.push([prev, next]);
        prev = next;
    }
    return result;
}
exports.chain = chain;
function clone(arr) {
    return [...arr];
}
exports.clone = clone;
/**
 * Removes element from an array.
 *
 * @param arr - Array.
 * @param index - Index to be removed.
 * @returns New array with one element removed.
 */
function drop(arr, index) {
    assert.toBeTrue(index >= 0 && index < arr.length, "Invalid index");
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
exports.drop = drop;
/**
 * Finds element matching value.
 *
 * @param arr - Array.
 * @param value - Value for comparison.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns The first element matching value if available, _undefined_ otherwise.
 */
function findBy(arr, value, keyOrReduce) {
    const reduce = toReduce(keyOrReduce);
    return arr.find(element => reduce(element) === reduce(value));
}
exports.findBy = findBy;
/**
 * Gets the first element.
 *
 * @param arr - Array.
 * @returns The first element if available.
 * @throws Error otherwise.
 */
function first(arr) {
    return get(arr, 0);
}
exports.first = first;
/**
 * Creates array from iterable.
 *
 * @param iterable - Iterable.
 * @returns Array.
 */
function fromIterable(iterable) {
    return is.callable(iterable) ? [...iterable()] : [...iterable];
}
exports.fromIterable = fromIterable;
/**
 * Creates array from range.
 *
 * @param from - Starting number.
 * @param to - Upper limit (inclusive).
 * @param step - Step.
 * @returns Array of numbers.
 */
function fromRange(from, to, step = 1) {
    const result = [];
    for (let i = from; i <= to; i += step)
        result.push(i);
    return result;
}
exports.fromRange = fromRange;
/**
 * Gets element by index.
 *
 * @param arr - Array.
 * @param index - Index.
 * @returns Array element if available.
 * @throws Error otherwise.
 */
function get(arr, index) {
    assert.toBeTrue(o.hasOwnProp(index, arr), "Invalid index");
    return arr[index];
}
exports.get = get;
/**
 * Checks that array contains element matching value.
 *
 * @param arr - Array.
 * @param value - Value for comparison.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns _True_ if array contains element matching value, _false_ otherwise.
 */
function includesBy(arr, value, keyOrReduce) {
    const reduce = toReduce(keyOrReduce);
    return arr.some(element => reduce(element) === reduce(value));
}
exports.includesBy = includesBy;
/**
 * Gets the last element.
 *
 * @param arr - Array.
 * @returns The last element if available.
 * @throws Error otherwise.
 */
function last(arr) {
    return get(arr, arr.length - 1);
}
exports.last = last;
/**
 * Adds element to the end of array.
 *
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
function push(arr, value) {
    return [...arr, value];
}
exports.push = push;
/**
 * Picks random element from an array.
 *
 * @param arr - Array.
 * @returns Random element.
 */
function random(arr) {
    return get(arr, _.random(0, arr.length - 1));
}
exports.random = random;
/**
 * Removes elements matching value.
 *
 * @param arr - Array.
 * @param value - Value for comparison.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns New array with matching elements removed.
 */
function removeBy(arr, value, keyOrReduce) {
    const reduce = toReduce(keyOrReduce);
    return arr.filter(element => reduce(element) !== reduce(value));
}
exports.removeBy = removeBy;
/**
 * Replaces element.
 *
 * @param arr - Array.
 * @param index - Index to be replaced.
 * @param value - New value.
 * @returns New array with one element replaced.
 */
function replace(arr, index, value) {
    assert.toBeTrue(index >= 0 && index < arr.length, "Invalid index");
    return [...arr.slice(0, index), value, ...arr.slice(index + 1)];
}
exports.replace = replace;
/**
 * Reverses array.
 *
 * @param arr - Array.
 * @returns New reversed array.
 */
function reverse(arr) {
    return clone(arr).reverse();
}
exports.reverse = reverse;
/**
 * Sorts array.
 *
 * @param arr - Array.
 * @param compareFn - Comparison function.
 * @returns New sorted array.
 */
function sort(arr, compareFn) {
    return clone(arr).sort(compareFn);
}
exports.sort = sort;
/**
 * Truncates array.
 *
 * @param mutableArray - Array.
 */
function truncate(mutableArray) {
    mutableArray.length = 0;
}
exports.truncate = truncate;
/**
 * Creates an array of unique elements.
 *
 * @param arr - Array.
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns An array of unique elements.
 */
function uniqueBy(arr, keyOrReduce) {
    const reduce = toReduce(keyOrReduce);
    const cache = new Set();
    return arr.filter(element => {
        const reduced = reduce(element);
        if (cache.has(reduced))
            return false;
        cache.add(reduced);
        return true;
    });
}
exports.uniqueBy = uniqueBy;
/**
 * Adds element to the beginning of the array.
 *
 * @param arr - Array.
 * @param value - Value.
 * @returns New array with one element added.
 */
function unshift(arr, value) {
    return [value, ...arr];
}
exports.unshift = unshift;
/*
|*******************************************************************************
|* Private
|*******************************************************************************
|*/
/**
 * Creates reduce function.
 *
 * @param keyOrReduce - Comparison key or reduce function.
 * @returns Reduce function.
 */
function toReduce(keyOrReduce) {
    return is.callable(keyOrReduce)
        ? keyOrReduce
        : (obj) => reflect.get(obj, keyOrReduce);
}
//# sourceMappingURL=array.js.map