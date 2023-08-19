/**
 * 需求: 1. 新建一个文件 座右铭.txt 
 *       2. 输入内容，三人行必有我师焉。
 */

// 导入fs模块
const { log } = require('console')
const fs = require('fs')

// 写入文件
// 函数语法：
// 第一个参数：文件名（可以写路径）
// 第二个参数：写入的内容
// 第三个参数：当写入完成时执行的回调函数,若发生错误则返回err对象;若不发生错误则err为空
fs.writeFile('./座右铭.txt','三人行，必有我师焉',err =>{
    if(err){
        // 发生错误
        console.log('写入失败')
        return;
    }else{
        // 不发生错误
        console.log('写入成功')
    }    
})