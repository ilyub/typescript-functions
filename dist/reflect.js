"use strict";
/* skylib/eslint-plugin disable @skylib/disallow-identifier[reflect] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPrototypeOf = exports.set = exports.preventExtensions = exports.ownKeys = exports.isExtensible = exports.has = exports.getPrototypeOf = exports.getOwnPropertyDescriptor = exports.getOwnMetadataKey = exports.getOwnMetadata = exports.getMetadataKey = exports.getMetadata = exports.get = exports.deleteProperty = exports.defineProperty = exports.defineMetadataKey = exports.defineMetadata = exports.construct = exports.apply = void 0;
// eslint-disable-next-line import/no-unassigned-import
require("reflect-metadata");
/**
 * Typed version of Reflect.construct.
 *
 * @param target - Target function.
 * @param thisArg - This argument.
 * @param args - Arguments.
 * @returns Function execution result.
 */
function apply(target, thisArg, args) {
    return Reflect.apply(target, thisArg, args);
}
exports.apply = apply;
/**
 * Typed version of Reflect.construct.
 *
 * @param target - Target function.
 * @param args - Arguments.
 * @param newTarget - New target function.
 * @returns Constructed object.
 */
function construct(target, args, newTarget) {
    return newTarget
        ? Reflect.construct(target, args, newTarget)
        : Reflect.construct(target, args);
}
exports.construct = construct;
/**
 * Typed version of Reflect.defineMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param metadataValue - Metadata value.
 * @param target - Target object.
 */
function defineMetadata(metadataKey, metadataValue, target) {
    Reflect.defineMetadata(metadataKey, metadataValue, target);
}
exports.defineMetadata = defineMetadata;
/**
 * Typed version of Reflect.defineMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param metadataValue - Metadata value.
 * @param target - Target object.
 * @param key - Property name.
 */
function defineMetadataKey(metadataKey, metadataValue, target, key) {
    Reflect.defineMetadata(metadataKey, metadataValue, target, key);
}
exports.defineMetadataKey = defineMetadataKey;
exports.defineProperty = Reflect.defineProperty;
exports.deleteProperty = Reflect.deleteProperty;
/**
 * Typed version of Reflect.get.
 *
 * @param target - Target object.
 * @param key - Property name.
 * @returns Property value.
 */
function get(target, key) {
    return Reflect.get(target, key);
}
exports.get = get;
/**
 * Typed version of Reflect.getMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns Metadata value.
 */
function getMetadata(metadataKey, target) {
    return Reflect.getMetadata(metadataKey, target);
}
exports.getMetadata = getMetadata;
/**
 * Typed version of Reflect.getMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property name.
 * @returns Metadata value.
 */
function getMetadataKey(metadataKey, target, key) {
    return Reflect.getMetadata(metadataKey, target, key);
}
exports.getMetadataKey = getMetadataKey;
/**
 * Typed version of Reflect.getOwnMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns Metadata value.
 */
function getOwnMetadata(metadataKey, target) {
    return Reflect.getOwnMetadata(metadataKey, target);
}
exports.getOwnMetadata = getOwnMetadata;
/**
 * Typed version of Reflect.getOwnMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property name.
 * @returns Metadata value.
 */
function getOwnMetadataKey(metadataKey, target, key) {
    return Reflect.getOwnMetadata(metadataKey, target, key);
}
exports.getOwnMetadataKey = getOwnMetadataKey;
exports.getOwnPropertyDescriptor = Reflect.getOwnPropertyDescriptor;
exports.getPrototypeOf = Reflect.getPrototypeOf;
exports.has = Reflect.has;
exports.isExtensible = Reflect.isExtensible;
exports.ownKeys = Reflect.ownKeys;
exports.preventExtensions = Reflect.preventExtensions;
/**
 * Typed version of Reflect.set.
 *
 * @param target - Target object.
 * @param key - Property name.
 * @param value - Property value.
 * @returns Result.
 */
function set(target, key, value) {
    return Reflect.set(target, key, value);
}
exports.set = set;
exports.setPrototypeOf = Reflect.setPrototypeOf;
//# sourceMappingURL=reflect.js.map