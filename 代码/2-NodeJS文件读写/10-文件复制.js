/**
 * 需求：将资料下的mp4复制一份
 *      方法一：普通方法
 *      方法二：流式方法
 *      方法三：管道快速复制 rs.pipe(ws)
 */

const fs = require('fs')
// 1.普通方法
// 读取文件 
let data = fs.readFileSync('../../资料/过山车.mp4')
// 输出文件
fs.writeFileSync('../../资料/过山车-2.mp4',data) 

// process模块,该模块中的memoryUsage()方法获得代码使用的内存量
const process = require('process')    
console.log(process.memoryUsage())  // 统计上述代码使用的内存空间：105312256字节


// 2.流式方法
// 创建输入流
const rs = fs.createReadStream('../../资料/过山车.mp4')
// 创建写出流
fs.createWriteStream('../../资料/过山车.mp4',)

