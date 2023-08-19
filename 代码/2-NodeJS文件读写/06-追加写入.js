// 1.引入fs模块
const fs = require('fs')

// 2.调用 appendFile 异步方法
// fs.appendFile('./座右铭.txt',',则其善者而从之',(err)=>{
//     if(err){
//         console.log('写入失败')
//     }else{
//         console.log('写入成功')
//     }
// })

// 3.调用 appendFileSync 同步方法
// fs.appendFileSync('./座右铭.txt','\n温故而知新',(err)=>{ // \n换行写入 
//     if(err){
//         console.log('写入失败')
//     }else{
//         console.log('写入成功')
//     }
// })

// 4.wirteFile也可以实现追加写入
fs.writeFile('./座右铭.txt','这是writeFile追加写入的内容',{flag:'a'},(err)=>{
    if(err){
        console.log('写入失败')
    }else{
        console.log('写入成功')
    }
})
