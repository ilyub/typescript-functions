"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete = exports._delete = exports.add = void 0;
/**
 * Adds value.
 *
 * @param set - Set.
 * @param value - Value.
 * @returns Set with value added.
 */
function add(set, value) {
    const result = new Set(set);
    result.add(value);
    return result;
}
exports.add = add;
/**
 * Removes value.
 *
 * @param set - Set.
 * @param value - Value.
 * @returns Set with value removed.
 */
function _delete(set, value) {
    const result = new Set(set);
    result.delete(value);
    return result;
}
exports._delete = _delete;
exports.delete = _delete;
//# sourceMappingURL=set.js.map