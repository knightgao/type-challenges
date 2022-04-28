type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer R) => any ? R : never


// extends 放在等号后面 等于 判断

export type {
    MyParameters
}
