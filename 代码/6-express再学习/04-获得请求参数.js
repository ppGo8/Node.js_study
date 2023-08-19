/**
 * 描述：获得get和post方法的请求参数
 */

const express = require('express')
const app = express()
const HomeRouter = require('./router3/HomeRouter')
const LoginRouter = require('./router3/LoginRouter')




// 路由规则中使用req.body方法获得用户输入的post参数
// 必须在主文件配置解析post参数的中间件，=mexpress已经内置了
// 不同下载第三方模块body-parse(网上90%教程都要下载第三方中间件)
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