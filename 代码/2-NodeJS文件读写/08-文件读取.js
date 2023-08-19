// 1.引入fs
const fs = require('fs')

// 2.文件异步
fs.readFile('./观书有感.txt',(err,data) =>{
    if(err){
        console.log('读取失败')
        return
    }
    console.log(data)   // 是一个buffer,需要转换成字符串形式
    console.log(data.toString())   
})

// 3.文件同步
data = fs.readFileSync('./观书有感.txt')
console.log('-----------------')
console.log(data.toString()) //先输出这个