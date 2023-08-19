/**
 * 描述：使用路由级别中间件
 */

const express = require('express');
const app = express();
const IndexRouter = require('./router2/indexRouter');

// 创建一个应用级别的中间件
app.use(function (request, response, next) {
    console.log('验证token')
    next()
    // response.end('token is OK!')
})

// 这个整体也是一个应用级别的中间件
// 是他调用的模块的里面的部分是 路由级别的中间件
// 访问indexrouter里面router对象调用的两个请求路径
// app.use('/',IndexRouter)     // /login、/home
// 首先进入use的路径,然后进入ndexrouter里面router对象调用的两个请求路径
app.use('/api', IndexRouter) // /api/login 、 /api/home 相当于一个二级目录


// 启动端口
app.listen(3000, () => {
    console.log('服务已经启动,3000端口监听中...');
})