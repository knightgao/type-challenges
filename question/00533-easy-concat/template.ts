type Concat<T extends any[], U extends any[]> = [...T, ...U]






export type {
    Concat
}

// ```ts
// type Result = Concat<[1], [2]> // expected to be [1, 2]
// ```



// // 等价于js
// function Concat(res) {
//     return [...res]
// }