"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.pipe = exports.doNotRunParallel = void 0;
const tslib_1 = require("tslib");
const is = (0, tslib_1.__importStar)(require("./guards"));
/**
 * Prevents parallel running.
 *
 * @param async - Async function.
 * @returns Wrapped async function.
 */
function doNotRunParallel(async) {
    let running = 0;
    return async (...args) => {
        if (running) {
            // Already running
        }
        else {
            running++;
            try {
                await async(...args);
            }
            finally {
                running--;
            }
        }
    };
}
exports.doNotRunParallel = doNotRunParallel;
function pipe(value, ...callbacks) {
    for (const callback of callbacks)
        value = callback(value);
    return value;
}
exports.pipe = pipe;
function run(mixed) {
    return is.callable(mixed) ? mixed() : mixed;
}
exports.run = run;
//# sourceMappingURL=function.js.map