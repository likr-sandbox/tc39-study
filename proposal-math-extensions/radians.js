require('core-js/proposals/math-extensions')

console.log(Math.radians(-120))
// -> -2.0943951023931953

console.log(Math.radians(0))
// -> 0

console.log(Math.radians(120))
// -> 2.0943951023931953

console.log(Math.radians(240))
// -> 4.1887902047863905

console.log(Math.radians(360))
// -> 6.283185307179586

console.log(Math.radians(480))
// -> 8.377580409572781

console.log(Math.radians(NaN))
// -> NaN

console.log(Math.radians(+Infinity))
// -> Infinity

console.log(Math.radians(-Infinity))
// -> -Infinity
