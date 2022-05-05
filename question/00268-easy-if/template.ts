type If<C extends Boolean, T, F> = C extends true ? T : F





export type {
    If
}

// ```ts
// type A = If<true, 'a', 'b'>  // expected to be 'a'
// type B = If<false, 'a', 'b'> // expected to be 'b'
// ```


// // 等价于js
// function MyExclude(oarr: any[], arr: any[]) {
//     return oarr.filter(
//         (item) => {
//             return arr.find(
//                 (i) => {
//                     return i === item
//                 }
//             )
//         }
//     )
// }