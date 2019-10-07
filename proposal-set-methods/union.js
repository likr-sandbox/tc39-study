require('core-js/features/set')

// 基本的な使い方
const a = new Set([1, 2, 3, 4])
const b = new Set([3, 4, 5])
console.log(a.union(b))
// -> Set { 1, 2, 3, 4, 5 }

// 同等の処理
const c = new Set()
for (const e of a) {
  c.add(e)
}
for (const e of b) {
  c.add(e)
}
console.log(c)
// -> Set { 1, 2, 3, 4, 5 }

// 元オブジェクトを変更しない
console.log(a, b)
// -> Set { 1, 2, 3, 4 } Set { 3, 4, 5 }

// 引数はSetじゃなくても良い
console.log(a.union([1, 3, 5]))
// -> Set { 1, 2, 3, 4, 5 }
