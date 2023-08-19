// 安装mongooose 

// 导入mongooose
const mongoose = require('mongoose')
// 连接mongodb数据库
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')  // 如果不存在这个数据库会自动创建

// 设置回调
// 连接成功;官方推荐用once而不是用on
// once:事件只执行一次
mongoose.connection.once('open',()=>{
    console.log('连接成功');
}) 
// 连接失败
mongoose.connection.on('error',()=>{
    console.log('连接失败');
}) 
// 连接关闭
mongoose.connection.on('close',()=>{
    console.log('连接关闭');
}) 

// 关闭mogodb连接
// setTimeout(()=>{
//     mongoose.disconnect()
// },2000)