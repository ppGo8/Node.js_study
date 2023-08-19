// 1.buffer与字符串转换
let buf = Buffer.from([105,108,111,118,101,121,111,117])
// buffer转字符串
console.log(buf.toString())

// 2.buffer读写
// buffer是伪数组，可以使用数组名[下标]的方式访问数据
let buf2 = Buffer.from('hello')
console.log(buf2[0]) // 显示的是ANSI的形式
console.log(buf2[0].toString(2)) // 查看二进制形式