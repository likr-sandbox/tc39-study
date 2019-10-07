require('core-js/proposals/set-methods')

// 基本的な使い方
const a = new Set([1, 2, 3, 4])
const b = new Set([3, 4, 5])
console.log(a.symmetricDifference(b))
// -> Set { 1, 2, 5 }

// 同等の処理
const c = new Set()
for (const e of a) {
  c.add(e)
}
for (const e of b) {
  c.add(e)
}
for (const e of c) {
  if (a.has(e) && b.has(e)) {
    c.delete(e)
  }
}
console.log(c)
// -> Set { 1, 2, 5 }

// 元オブジェクトを変更しない
console.log(a, b)
// -> Set { 1, 2, 3, 4 } Set { 3, 4, 5 }

// 引数はSetじゃなくても良い
console.log(a.symmetricDifference([1, 3, 5]))
// -> Set { 2, 4, 5 }
