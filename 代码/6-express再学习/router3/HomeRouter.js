/**
 * 创建路由中间件模块
 */

const express = require('express')
const router = express.Router()

// 路由级别中间件
router.get('/',(req,res)=>{
    res.send('home')
})
router.get('/slide',(req,res)=>{
    res.send('home')
})
// 暴露数据

module.exports = router
