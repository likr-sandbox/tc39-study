require('core-js/proposals/set-methods')

const a = new Set([1, 2, 3, 4])
const b = new Set([1, 2, 3, 4, 5])
const c = new Set([2, 3])
const d = new Set([4, 5, 6])
const e = new Set([6, 7, 8])
const f = new Set([1, 2, 3, 4])
const g = new Set()
console.log(a.isDisjointFrom(b))
// -> false
console.log(a.isDisjointFrom(c))
// -> false
console.log(a.isDisjointFrom(d))
// -> false
console.log(a.isDisjointFrom(e))
// -> true
console.log(a.isDisjointFrom(f))
// -> false
console.log(a.isDisjointFrom(g))
// -> true
