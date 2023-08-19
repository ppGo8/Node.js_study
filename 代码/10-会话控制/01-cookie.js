// 导入express
const express = require('express')

// 创建应用对象
const app = express()
// 创建路由规则
app.get('/set-cookie', (req, res) => {
    // 设置cookie的方法  设置的cookie设置的请求头/
    // 第一个参数键名,第二个参数键值
    // 会在浏览器关闭（所有页面，其他网站的页面也需要关闭）的时候销毁
    // res.cookie('name', 'zhangsan')

    // 有些网站有七天免登录，这个是怎么做到的
    // 使用参数设置cookie的生命周期
    // 只有生命周期到了才会失效 关闭浏览器全部页面也依然存在
    res.cookie('name', 'pppppppppp',{maxAge:60*1000}) // 注意：里面的单位是毫秒 // 在报文里面会自动转换格式为秒
    res.send('set-your-cookie!')
})

// 删除cookie
// 应用场景：用户退出登录
app.get('/remove-cookie',(req,res)=>{


})
// 监听端口,启动服务
app.listen(3000, () => {
    console.log('服务已经启动,3000端口监听中...')
})