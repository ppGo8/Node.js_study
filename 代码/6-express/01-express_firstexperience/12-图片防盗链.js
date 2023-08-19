/**
 * 描述：图片防盗链实现：只允许127.0.0.1的域名访问图片获得图片;localhost不可以
 */
// 引入模块
const express = require('express')
// 创建服务
const app = express()

// 设置中间件
app.use((request, response, next) => {
    // 获得申请图片的reffer
    const referer = request.get('referer')
    // 判断
    if (referer) {
        const url = new URL(referer)
        const hostname = url.hostname
        if (hostname !== '127.0.0.1') {
            response.status(200).send('<h1>not find image</h1>')
            return;
        }
    }
    next()

})

// 静态资源中间件设置
app.use(express.static(__dirname + '/public'))


// 监听端口 启动服务
app.listen(3000, () => {
    console.log('服务已经启动,端口3000监听中');
})