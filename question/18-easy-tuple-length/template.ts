// type Length<T extends readonly (keyof any)[]> = T['length']
type Length<T extends readonly any[]> = T['length']




export {
    Length
}




// 等价于js
// function Length(arr) {
//     return arr.Length
// }