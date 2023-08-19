/**
 * 描述：使用express获得路由参数
 * 路由参数：在浏览器地址栏输入的URL（包括参数）
 */
// 1.导入模块
const express = require('express')
// 2.创建应用对象
const app = express()
// 3.创建路由规则
// 当浏览器访问任意一个 http://127.0.0.1:3000/id.html 形式的资源时，均会返回以下规则。
app.get('/:id.html',(request,response)=>{  // :id是占位符,冒号后的名字可以随便写
    // 问题：如何获得占位符的值？
    console.log(request.params.id)
    // 设置响应
    response.setHeader('content-type','text/html;charset=utf-8')
    response.end('商品详情!')

})
// 4.监听端口，启动服务
app.listen(3000,()=>{
    console.log('服务已经启动,3000端口监听中...')
})