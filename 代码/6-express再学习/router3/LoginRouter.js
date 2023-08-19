/**
 * 创建路由中间件模块
 */

const express = require('express')
const router = express.Router()

// 路由级别中间件
router.get('/',(req,res)=>{
    // 获得get请求url中的请求字符串
    console.log('我是get请求');
    console.log(req.url)   // http原生方法,返回?及其之后的字符串
    console.log(req.query) // express方法 ,返回请求参数的对象形式
    res.send('login success')
})
// 同一个路径的post方法
router.post('/',(req,res)=>{
    // 获得post用户的请求字符串
    // post请求将数据放在请求体中，所以直接获得请求体的参数即可
    console.log('我是post请求');
    console.log(req.body)  // 必须在主文件配置中间件
    console.log(req.body.password)
    res.send('login success')
})

// 暴露数据
module.exports = router
