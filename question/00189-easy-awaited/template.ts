// type MyAwaited<类型> = 类型 extends Promise<infer 待推断的占位变量> ? MyAwaited<待推断的占位变量> : 类型
type MyAwaited<T> = T extends Promise<infer A> ? MyAwaited<A> : T





export type {
    MyAwaited
}