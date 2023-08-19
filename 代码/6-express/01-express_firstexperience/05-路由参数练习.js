// 导入模块
const express = require('express')
// 导入json文件
// 为什么要解构赋值？因为singer被整个包裹在了另外一个{}里，多了一层，所以解构赋值。
// 解构后的对象是数组对象的形式
const { singers } = require('./singers.json')

// 创建应用对象
const app = express()

// 创建路由规则
app.get('/singer/:id.html', (request, response) => {
    // 解构获得路由参数id
    const { id } = request.params
    // 在数组中寻找对应的值
    const result = singers.find((item) => {
        return item.id === Number(id)      // 返回 返回值第一个true的item;
    })
    // // 上面find条件的等价写法
    // const result = singer.find((item) => {
    //     if (item.id === Number(id)) {
    //         return true                 // 返回 返回值第一个true的item;
    //     }
    // })
    if(!result){
        response.statusCode = 404
        response.end('NOT FIND')
    }

    response.end(`
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
        <h1>${result.singer_name}</h1>
        <img src=${result.singer_pic} />
        </body>
    </html>
`)
})

// 监听端口,启动服务
app.listen(3000, () => {
    console.log('服务已经启动,3000端口监听中...')
})