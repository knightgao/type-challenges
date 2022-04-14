type If<C, T, F> = any





export type {
    If
}




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