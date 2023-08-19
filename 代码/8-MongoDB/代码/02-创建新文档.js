
// 导入mongooose
const mongoose = require('mongoose')
// 连接mongodb数据库
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')  // 如果不存在这个数据库会自动创建

// 设置回调
mongoose.connection.once('open', () => {
    console.log('连接成功')
    // 创建文档结构对对象
    // 作用：设置集合中 文档的属性以及属性值的类型
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    })
    // 创建模型对象
    // 作用:对文档操作的封装到对象；
    let BookModel = mongoose.model('books', BookSchema) // books要在哪个集合上操作文档

    // 7.新增文档
    BookModel.create({
        name: '西游记',
        author: '吴承恩',
        price: '220'
    }).then((err, data) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(data) // data:插入后的文档对象
    })

    // 项目运行过程中不会添加该代码
    // 关闭数据库连接
    // mongoose.disconnect()
})


// 连接失败
mongoose.connection.on('error', () => {
    console.log('连接失败')
})
// 连接关闭
mongoose.connection.on('close', () => {
    console.log('连接关闭')
}) 