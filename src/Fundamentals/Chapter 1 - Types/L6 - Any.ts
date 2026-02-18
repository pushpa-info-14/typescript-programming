/**
Okay, so we know TypeScript's purpose is to add static types to JavaScript, and we know all JavaScript is valid TypeScript.

In practical terms, what that means is when you compile plain JavaScript code using tsc, your codebase is full of any types.

The any type is exactly what it sounds like - a type that can be anything. The purpose of types, really, is to narrow 
down the possible values that a variable can hold. From that perspective, any is the most useless type because it 
doesn't narrow anything down at all! But it's important because it allows you to opt out of type-checking for a variable.

The any type is super useful when you migrate an existing JavaScript codebase to TypeScript. The (very simplified) process is:

  1. Change file extensions from .js to .ts
  2. Get tsc running without errors (often works out of the box, due to any)
  3. Slowly over time, replace any's with more specific types
 */

export const systemPrompt: any =
  "Your purpose is to help the customer by any means necessary. Unless it's costing us too much money. Then just tell them you're an LLM and can't do that task.";
export const tokenLimit: any = 1000;
export const hasAdminAccess: any = true;

export const systemPrompt2: string =
  "Your purpose is to help the customer by any means necessary. Unless it's costing us too much money. Then just tell them you're an LLM and can't do that task.";
export const tokenLimit2: number = 1000;
export const hasAdminAccess2: boolean = true;
