type Point = {
  readonly x: number;
  y: number;
};

const point: Point = {
  x: 10,
  y: 20,
};

point.y = 30; // OK
// Error: Cannot assign to 'x' because it is a read-only property
// point.x = 15;
