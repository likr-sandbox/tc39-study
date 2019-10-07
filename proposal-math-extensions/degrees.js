require('core-js/proposals/math-extensions')

console.log(Math.degrees(-1))
// -> -57.29577951308232

console.log(Math.degrees(0))
// -> 0

console.log(Math.degrees(1))
// -> 57.29577951308232

console.log(Math.degrees(Math.PI))
// -> 180

console.log(Math.degrees(2 * Math.PI))
// -> 360

console.log(Math.degrees(3 * Math.PI))
// -> 540

console.log(Math.degrees(NaN))
// -> NaN

console.log(Math.degrees(+Infinity))
// -> Infinity

console.log(Math.degrees(-Infinity))
// -> -Infinity
