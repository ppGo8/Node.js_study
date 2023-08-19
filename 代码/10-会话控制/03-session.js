// 导入模块
const session = require('express-session')
const MongoStore = require('connect-mongo')
const express = require('express')

// 创建应用对象
const app = express()

// 设置session的中间件
// session语法：
app.use(session({
    name: 'sid', // 设置cookie的nmae
    secret: 'aappcc',
    saveUninitialized: false,
    resave: true,
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/bilibili'
    }),
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 5
    },
}))

// 首页路由
app.get('/', (req, res) => {
    res.send('welcome to my home!')
})

// 登录路由
app.get('/login', (req, res) => {
    if (req.query.name === 'pp' && req.query.pwd === '123') {
        // 需要在session中存储的其他信息
        // 挂在在req参数上
        req.session.name = 'pp'
        req.session.uid = '123456'
        res.send('登录成功')
    } else {
        res.send('登录失败')
    }
})

// session读取
app.get('/cart',(req,res)=>{
    // 判断用户是否登录的方法:检测session
    if(req.session.name){
        res.send(`购物车,欢迎您${req.session.name}`)
    }else{
        res.send('请登录才可查看购物车状态!')
    }
})

// 销毁session
app.get('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.send('退出成功')
    })
})

// 启动服务
app.listen(3000, (err) => {
    console.log('服务已经启动')
})