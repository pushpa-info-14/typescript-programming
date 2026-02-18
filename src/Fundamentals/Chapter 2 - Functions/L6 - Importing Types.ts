/**
With certain TypeScript configurations you can import types directly from a module:

import { User, Post } from "./models";

But it's much safer and more efficient to use the import type syntax:

import type { User, Post } from "./models";

This way TypeScript knows that you're only importing types, and it can drop the imports so they don't generate extra JavaScript code when your project is compiled. This syntax also works:

import { type User, type Post } from "./models";

But personally I prefer the first one. It's more concise and keeps all my type imports in one place.

Importing types with the import type syntax reduces bundle size.
 */
