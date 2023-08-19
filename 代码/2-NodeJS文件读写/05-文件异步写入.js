const { log } = require('console');
const fs = require('fs')
fs.writeFile('./座右铭2.txt','三人行,必有我师焉',err =>{
    if(err){
        // 发生错误
        console.log('写入失败')
        return;
    }else{
        // 不发生错误
        console.log('写入成功')
    }    
})
console.log("这是位于输出后面的代码");