/**
 * Obviously I didn't list every type, but the goal here is to show you how narrowing works in TypeScript, and why you should care. Some key points:
 *
 * - The types at the top of hierarchy are the "widest". They encompass the most possible values, and very little is known about them.
 * - The types at the bottom of the hierarchy are the "narrowest". They encompass the fewest possible values, and a lot is known about them.
 * - any and unknown are at the top of the hierarchy, the weird one is actually the any type, because it just breaks all the rules, allowing you to do whatever you want with it.
 * - never is at the bottom of the hierarchy, because it represents values that can't occur.
 * - Types below are assignable to the connected types above them, but not the other way around. For example:
 *    - "armin" is assignable to "armin" | "eren" which is assignable to string which is assignable to any.
 *    - "armin" | "eren" is not assignable to "armin" because what would happen if the value happened to be "eren"?
 * - Interestingly, undefined and null are assignable to void (at least, when strictNullChecks is disabled), but not the other way around.
 */
