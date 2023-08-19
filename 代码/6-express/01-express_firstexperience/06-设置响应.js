/**
 * 描述：使用原生和express的方法设置响应内容
 */

// 1.导入express
const express = require('express')

// 2.创建应用对象
const app = express()  

// 3.创建路由
app.get('/response',(request,respnse)=>{
    // 原生方法设置响应
    // respnse.statusCode = 404           // 响应状态码
    // respnse.statusMessage = 'love'     // 响应信息描述
    // respnse.setHeader('pp','love dog') // 响应头
    // respnse.write('body')              // 响应体
    // respnse.end('This is the end!') 

    // expree方法设置响应
    respnse.status(500)                  // 设置响应状态码
    respnse.set('xxx','yyy')             // 设置响应头
    respnse.send('你好,express！')       // 设置响应体;中文不会乱码
    // 还可以链式编程
    respnse.status(500).set('xxx','yyy').send('你好,express！')
    // 不需要end结尾
})

// 4.监听端口，启动服务
app.listen(3000,()=>{
    console.log('服务已经启动,端口3000正在监听中...')
})

