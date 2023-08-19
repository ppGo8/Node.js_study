/**
 * 描述：使用express搭建服务
 */
// 导入第三方模块express
const express = require('express')
// 创建应用对象
const app = express()
// 创建路由规则
app.get('/', (request, response) => {
    response.write('hello world')
    response.end()
})
app.get('/login', (request, response) => {
    response.send('登陆成功')
    response.end()
})

// 路由规则可以写多个回调函数
const fun1 = function(request,response,next) {
    console.log('验证token')
    const isValid = true
    if (isValid){
        response.ownkey = '我是自定义的属性'
        next()
    }else{
        response.send('身份验证失败,无法获得数据!')
    }
    
}

const fun2 = function(request,response){
    console.log('返回内容')
    console.log(response.ownkey);
    response.send('身份验证成功！')
}

// 这样两种调用方式都可以
// app.get("/home",fun1,fun2)
app.get("/home",[fun1,fun2])

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已经启动,3000端口监听中...');
})