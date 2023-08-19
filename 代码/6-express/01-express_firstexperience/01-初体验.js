/**
 * 描述:初次使用express
 * 问题：在浏览器输入127.0.0.1:3000时,返回404是怎么回事？
 * 原因：刚才的请求路径只确定了端口号；只有当请求路径为/home且为get方式时才会返回内容；一定要仔细
 */

// 1.导入express
const express = require('express')

// 2.创建应用对象
const app = express()  // 这个对象通过express对象创建出来

// 3.创建路由
// 如果浏览器的请求路径是/home，且get请求，那么返回以下内容
app.get('/home',(request,respnse)=>{
    respnse.end('hello express') 
})

// 4.监听端口，启动服务
// 当启动服务后，执行里面的回调函数
app.listen(3000,()=>{
    console.log('服务已经启动,端口3000正在监听中...')
})

