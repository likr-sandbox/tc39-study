require('core-js/proposals/math-extensions')

console.log(Math.clamp(0, -100, 100))
// -> 0

console.log(Math.clamp(-200, -100, 100))
// -> -100

console.log(Math.clamp(200, -100, 100))
// -> 100

console.log(Math.clamp(NaN, -100, 100))
// -> NaN

console.log(Math.clamp(0, NaN, 100))
// -> NaN

console.log(Math.clamp(0, -100, NaN))
// -> NaN

// 同等の処理
const clamp = (x, lower, upper) => {
  return Math.min(Math.max(x, lower), upper)
}
console.log(clamp(0, -100, 100))
console.log(clamp(-200, -100, 100))
console.log(clamp(200, -100, 100))
console.log(clamp(NaN, -100, 100))
console.log(clamp(0, NaN, 100))
console.log(clamp(0, -100, NaN))
