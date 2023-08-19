/**
 * 需求: 解决09的痛点，直接返回html文件
 * 方法: 读取文件内容 放在end里面
 */

// 1.导入http模块
const fs = require('fs')
const http = require('http')
// 2.创建服务对象
const server = http.createServer((request, reponse) => {
    // 读取html文件
    const html = fs.readFileSync(__dirname + '/10-返回的界面.html')  // 为了简单直接使用同步方法,不用写回调函数
    reponse.end(html)
})
// 3.监听端口,启动服务
server.listen(9000, () => {
    console.log('服务启动中...')
})