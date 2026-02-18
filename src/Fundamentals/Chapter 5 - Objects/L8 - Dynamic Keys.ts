type UserMetrics = {
  [key: string]: number;
};

const metrics: UserMetrics = {
  wordsPerMinute: 50,
  errors: 2,
  timeOnPage: 120,
};

metrics["refreshRate"] = 60; // OK
// metrics["theme"] = "dark"; // Error: Type 'string' is not assignable to type 'number'
