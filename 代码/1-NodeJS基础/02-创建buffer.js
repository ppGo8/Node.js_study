// 1.alloc方法
let buf = Buffer.alloc(10)
console.log(buf)
// 2.allocUnsafe方法
// 为什么是unsafe方法？因为该方法不会清空该内存中的数据.
// 而alloc方法在执行时，会首先清空待使用的内存空间
// unsafe方法优势：速度快
let buf2 = Buffer.allocUnsafe(10)
console.log(buf2)
// 3.from方法
// from方法可以将字符串和数组转换成buffer
// 字符串转换方法：
// 1.每个字符转换成在ANSI编码中的对应数字
// 2.这个数字会转换成二进制存放在buffer中
// 3.终端输出的是这个数字的16进制形式
let buf3 = Buffer.from('hello')
console.log(buf3)
let buf4 = Buffer.from([1,2,3,4,5])
console.log(buf4);