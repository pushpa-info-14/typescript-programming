function setLoggerTimeout(
  loggerCallback: (s1: string, s2: string) => string,
  delay: number,
) {
  // do something
}

type LoggerCallback = (s1: string, s2: string) => string;
function setLoggerTimeout2(loggerCallback: LoggerCallback, delay: number) {
  // do something
}

export type SupportResponse = (name: string) => string;

export function greetCustomer(name: string) {
  return `Hello ${name}, welcome to Support.ai! How can I assist you today?`;
}

export function farewellCustomer(name: string) {
  return `Goodbye ${name}, have a great day!`;
}
