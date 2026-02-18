/**
 * Non-Null Assertion
 *
 * It's common for TypeScript libraries to assume that a value can be null or undefined even when you know it can't be.
 * You can assert that it's not with the non-null assertion (!) operator.
 * It tells the compiler that a value cannot be null or undefined, even when the type system thinks it might be.
 */

function getCleanedText(text: string): string | null {
  return text;
}
function sendText(text: string) {
  console.log(text);
}

const cleanedText = getCleanedText("some text");
// cleanedText is string | null
// but we know that it's not null because we passed in a valid string

// sendText expects a string, so we use a non-null assertion
sendText(cleanedText!);

/**
 * You'll also see this fairly often when working with optional properties that you know exist:
 */

interface User {
  id: string;
  name?: {
    first: string;
    last: string;
  };
}
const user: User = {
  id: "abc",
  name: {
    first: "Pushpa",
    last: "Kumara",
  },
};

// we don't control the User type (its imported from a library)
// but we know that we always use the `name` property
sendText(user.name!.first);

function sendTextSafely(text: string | null) {
  if (text === null) {
    throw new Error("Text is required");
  }
  sendText(text);
}
