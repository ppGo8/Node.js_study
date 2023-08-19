/**
 * 描述：分别使用原生方法和express模块提供的方法获得请求报文的数据
 */
// 1.导入模块
const express = require('express')
// 2.创建应用对象
const app = express()
// 3.创建路由规则
app.get('/request',(request,response)=>{
    // 原生操作获得请求报文的参数 
    console.log(request.method)       // 请求方法
    console.log(request.url)          // 请求资源路径
    console.log(request.httpVersion)  // 请求协议版本
    console.log(request.headers)       // 请求头
    console.log('-----------------------------')

    // express操作
   
    console.log(request.path)         // 获得请求路径，不会包含参数c
    console.log(request.query)        // 获得请求参数
    console.log(request.ip)           // 获得客户端ip地址
    console.log(request.get('host'))  // 获得请求头

    // 设置相应
    response.setHeader('content-type','text/html;charset=utf-8')
    response.end('获得请求报文的参数')

})
// 4.监听端口，启动服务
app.listen(3000,()=>{
    console.log('服务已经启动,3000端口监听中...')
})