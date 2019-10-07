require('core-js/proposals/math-extensions')

console.log(Math.scale(50, 0, 100, -10, 10))
// -> 0

console.log(Math.scale(200, 0, 100, -10, 10))
// -> 30

console.log(Math.scale(80, 0, 100, 10, -10))
// -> -6

console.log(Math.scale(NaN, 0, 100, -10, 10))
// -> NaN

console.log(Math.scale(50, NaN, 100, -10, 10))
// -> NaN

console.log(Math.scale(50, 0, NaN, -10, 10))
// -> NaN

console.log(Math.scale(50, 0, 100, NaN, 10))
// -> NaN

console.log(Math.scale(50, 0, 100, -10, NaN))
// -> NaN

console.log(Math.scale(Infinity, 0, 100, -10, 10))
// -> Infinity

console.log(Math.scale(-Infinity, 0, 100, -10, 10))
// -> -Infinity

console.log(Math.scale(50, -Infinity, 100, -10, 10))
// -> NaN

console.log(Math.scale(50, 0, Infinity, -10, 10))
// -> -10

console.log(Math.scale(50, 0, 100, -Infinity, 10))
// -> NaN

console.log(Math.scale(50, 0, 100, -10, Infinity))
// -> Infinity
