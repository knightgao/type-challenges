import { Equal } from "@type-challenges/utils"

type Includes<T extends readonly any[], 待判断> = T extends [infer 头, ...infer 剩余] ?
    Equal<待判断, 头> extends true ? true : Includes<剩余, 待判断> : false




// extends 可以用来做判断 true false


export type {
    Includes
}
