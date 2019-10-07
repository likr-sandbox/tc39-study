require('core-js/features/set')

// 基本的な使い方
const a = new Set([1, 2, 3, 4])
const b = new Set([3, 4, 5])
console.log(a.difference(b))
// -> Set { 1, 2 }

// 同等の処理
const c = new Set()
for (const e of a) {
  if (!b.has(e)) {
    c.add(e)
  }
}
console.log(c)
// -> Set { 1, 2 }

// 元オブジェクトを変更しない
console.log(a, b)
// -> Set { 1, 2, 3, 4 } Set { 3, 4, 5 }

// 引数はSetじゃなくても良い
console.log(a.difference([1, 3, 5]))
// -> Set { 2, 4 }
