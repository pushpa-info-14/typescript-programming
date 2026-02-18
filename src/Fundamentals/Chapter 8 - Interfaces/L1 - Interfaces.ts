/**
 * As it turns out, there are two ways to define object types: the type keyword (as we've seen with type aliases) and interfaces:
 */

type Superhero = {
  name: string;
  powers: string[];
  isAvenger: boolean;
};

interface Superhero2 {
  name: string;
  powers: string[];
  isAvenger: boolean;
}

/**
 * In 9/10 scenarios, they work the same way, but there are a few key differences that we'll cover in this chapter.
 * For now, just know that I recommend using type in most cases, but there are a few scenarios
 * where interface is the better choice, which we'll talk about later.
 */
