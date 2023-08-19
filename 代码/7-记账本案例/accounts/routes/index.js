var express = require('express');
var router = express.Router();
const ejs = require('ejs')


router.get('/', function(req, res, next) {
  res.send('欢迎光临我的记账本')
});

// 记账本列表
router.get('/account', function(req, res, next) {
  res.render('list')
});

// 添加记录
router.get('/account/create', function(req, res, next) {
  res.render('create')
})

// 处理account页面的post请求
router.post('/account',(req,res)=>{
  console.log(req.body)

  // 使用ejs模板显示信息
  res.render('success',{msg:'添加成功',url:'/account'})
})

module.exports = router;
