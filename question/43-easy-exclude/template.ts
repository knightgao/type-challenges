type MyExclude<T, U> = T extends U ? never : T




export {
    MyExclude
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