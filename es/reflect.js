/* skylib/eslint-plugin disable @skylib/disallow-identifier[reflect] */
// eslint-disable-next-line import/no-unassigned-import
import "reflect-metadata";
/**
 * Typed version of Reflect.construct.
 *
 * @param target - Target function.
 * @param thisArg - This argument.
 * @param args - Arguments.
 * @returns Function execution result.
 */
export function apply(target, thisArg, args) {
    return Reflect.apply(target, thisArg, args);
}
/**
 * Typed version of Reflect.construct.
 *
 * @param target - Target function.
 * @param args - Arguments.
 * @param newTarget - New target function.
 * @returns Constructed object.
 */
export function construct(target, args, newTarget) {
    return newTarget
        ? Reflect.construct(target, args, newTarget)
        : Reflect.construct(target, args);
}
/**
 * Typed version of Reflect.defineMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param metadataValue - Metadata value.
 * @param target - Target object.
 */
export function defineMetadata(metadataKey, metadataValue, target) {
    Reflect.defineMetadata(metadataKey, metadataValue, target);
}
/**
 * Typed version of Reflect.defineMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param metadataValue - Metadata value.
 * @param target - Target object.
 * @param key - Property name.
 */
export function defineMetadataKey(metadataKey, metadataValue, target, key) {
    Reflect.defineMetadata(metadataKey, metadataValue, target, key);
}
export const defineProperty = Reflect.defineProperty;
export const deleteProperty = Reflect.deleteProperty;
/**
 * Typed version of Reflect.get.
 *
 * @param target - Target object.
 * @param key - Property name.
 * @returns Property value.
 */
export function get(target, key) {
    return Reflect.get(target, key);
}
/**
 * Typed version of Reflect.getMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns Metadata value.
 */
export function getMetadata(metadataKey, target) {
    return Reflect.getMetadata(metadataKey, target);
}
/**
 * Typed version of Reflect.getMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property name.
 * @returns Metadata value.
 */
export function getMetadataKey(metadataKey, target, key) {
    return Reflect.getMetadata(metadataKey, target, key);
}
/**
 * Typed version of Reflect.getOwnMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns Metadata value.
 */
export function getOwnMetadata(metadataKey, target) {
    return Reflect.getOwnMetadata(metadataKey, target);
}
/**
 * Typed version of Reflect.getOwnMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property name.
 * @returns Metadata value.
 */
export function getOwnMetadataKey(metadataKey, target, key) {
    return Reflect.getOwnMetadata(metadataKey, target, key);
}
export const getOwnPropertyDescriptor = Reflect.getOwnPropertyDescriptor;
export const getPrototypeOf = Reflect.getPrototypeOf;
export const has = Reflect.has;
export const isExtensible = Reflect.isExtensible;
export const ownKeys = Reflect.ownKeys;
export const preventExtensions = Reflect.preventExtensions;
/**
 * Typed version of Reflect.set.
 *
 * @param target - Target object.
 * @param key - Property name.
 * @param value - Property value.
 * @returns Result.
 */
export function set(target, key, value) {
    return Reflect.set(target, key, value);
}
export const setPrototypeOf = Reflect.setPrototypeOf;
//# sourceMappingURL=reflect.js.map