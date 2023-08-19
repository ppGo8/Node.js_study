/**
 * 描述：模板引擎
 */

const express = require('express')
const app = express()
const HomeRouter = require('./router/HomeRouter')
const LoginRouter = require('./router/LoginRouter')


// 配置模板引擎
app.set('views')
app.set('view engine','ejs')

// 配置静态资源
app.use(express.static('./static'))

// post解析
app.use(express.urlencoded({extended:false})) 
app.use(express.json())  

// 路由规则
app.use(function(request,response,next){
    console.log('验证token')
    next()
})

// 调用路由规则
app.use('/login',LoginRouter)  
app.use('/home',HomeRouter) 

// 错误处理
app.use((req,res)=>{
    res.status(404).send('not find!')
    console.log(err);
})

// 启动端口
app.listen(3000,()=>{
    console.log('服务已经启动,3000端口监听中...');
})