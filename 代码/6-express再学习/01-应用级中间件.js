/**
 * 描述：使用应用级中间件，对所有请求都执行一样的操作
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
// 应用级中间件
// 要求首页不限制应用级别中间件
app.use((request,response,next)=>{
    console.log('身份验证成功！')
    next()
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已经启动,3000端口监听中...');
})