/**
 * 创建路由中间件模块
 */

const express = require('express')
const router = express.Router()

// 挂在到router对象上,就是路由级中间件
router.get('/home',(req,res)=>{
    res.end('home')

})
router.get('/login',(req,res)=>{
    res.end('login')
})

// 暴露数据
module.exports = router
