// 1.引入js
const { log } = require('console')
const fs = require('fs')
// 2.创建输入流对象
const rs = fs.createReadStream('../../资料/过山车.mp4')
// 3.注册回调函数
// data:当读取完每个块之后的事件
rs.addListener('data',(chunk) =>{
    console.log(chunk.length)
})

// end:读取完成事件
rs.addListener('end',() =>{
    console.log("读取完成~~~")
} )
