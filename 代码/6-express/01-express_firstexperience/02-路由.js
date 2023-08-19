/**
 * 描述:路由介绍
 */

// 1.导入express
const express = require('express')

// 2.创建应用对象
const app = express()  // 这个对象通过express对象创建出来

// 3.创建路由
// 响应网站首页
app.get('/',(request,respnse)=>{
    respnse.end('Welcome my index!') 
})
// 响应/home
app.get('/home',(request,respnse)=>{
    respnse.end('hello express') 
})
// 响应post
app.post('/login',(request,response)=>{
    response.setHeader('content-type','text/html;charset=utf-8')    // 刚才打错了一个字符,响应就变成了下载。
    response.end('恭喜你，注册成功！')
})
// 响应/test,不区分get、post请求
app.all('/test',(request,respnse)=>{
    respnse.end('ok,this is a test!')
})

// 404响应,如果上面的内容都不能响应,那么在这里响应404
app.all('*',(request,respnse)=>{
    respnse.end('404 not find')
})


// 4.监听端口，启动服务
app.listen(3000,()=>{
    console.log('服务已经启动,端口3000正在监听中...')
})

