
// ts 联合类型 union
type MyPick<T, K extends keyof T> = {
    [P in K] : T[P];
}

// 逻辑等价

// js 对比 逻辑解法
// function mypick(org,keys){
//     let result={};
//     keys.forEach(key => {
//         if(key in org){
//             result[key] = org[key]
//         }
//     });
//     return result
// }



export {
    MyPick
}