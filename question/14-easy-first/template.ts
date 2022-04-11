type First<T extends any[]> =   T extends [] ? never : T[0]


export {
    First
}




// 等价于js
// function First(arr) {
//     return arr[0]
// }