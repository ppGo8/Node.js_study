/**
 * 描述：对不同的一级目录使用不同的路由中间件
 */

const express = require('express')
const app = express()
const HomeRouter = require('./router3/HomeRouter')
const LoginRouter = require('./router3/LoginRouter')


// 创建一个应用级别的中间件
app.use(function(request,response,next){
    console.log('验证token')
    next()
})

// 应用中间件，不同页面使用不同的路由
app.use('/login',LoginRouter)  // 路由里面只写了一个/  代表截止到/；这个/后面的内容就没有了
app.use('/home',HomeRouter) 

// 错误处理中间件
app.use((req,res)=>{
    
    res.status(404).send('not find!')
    console.log(err);
})
// 启动端口
app.listen(3000,()=>{
    console.log('服务已经启动,3000端口监听中...');
})