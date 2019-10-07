require('core-js/proposals/set-methods')

// 基本的な使い方
const a = new Set([1, 2, 3, 4])
const b = new Set([3, 4, 5])
console.log(a.intersection(b))
// -> Set { 3, 4 }

// 同等の処理
const c = new Set()
for (const e of b) {
  if (a.has(e)) {
    c.add(e)
  }
}
console.log(c)
// -> Set { 3, 4 }

// 元オブジェクトを変更しない
console.log(a, b)
// -> Set { 1, 2, 3, 4 } Set { 3, 4, 5 }

// 引数はSetじゃなくても良い
console.log(a.intersection([1, 3, 5]))
// -> Set { 1, 3 }
