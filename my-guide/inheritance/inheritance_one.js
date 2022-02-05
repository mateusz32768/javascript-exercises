const point = {
  x: 5,
  y: 6,
};

for (const key in point) {
  if (point.hasOwnProperty(key)) {
    const element = point[key];
    console.log(element);
  }
}

// for (const iterator of point) {
//   console.log(iterator);
// } Uncaught TypeError: point is not iterable
