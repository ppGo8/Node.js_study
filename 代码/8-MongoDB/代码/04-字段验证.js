
// 导入mongooose
const mongoose = require('mongoose')
// 连接mongodb数据库
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')  // 如果不存在这个数据库会自动创建

// 设置回调
mongoose.connection.once('open', () => {
    console.log('连接成功')
    let BookSchema = new mongoose.Schema({
        name:{
            type:String,
            require:true,
            unique:true
        },
        author:{
            type:String,
            default:'匿名'
        },
        type:{
            type:String,
            enum:['励志','喜剧','爱情']
        }
        
    })

    let BookModel = mongoose.model('movies', BookSchema) // books要在哪个集合上操作文档
    
    BookModel.create({
        name:'爱乐之城',
        author:'爱德华',
        type:'爱情'
    }).then((err, data) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(data) // data:插入后的文档对象
    })

})


// 连接失败
mongoose.connection.on('error', () => {
    console.log('连接失败')
})
// 连接关闭
mongoose.connection.on('close', () => {
    console.log('连接关闭')
}) 