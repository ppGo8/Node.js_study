// 1.导入http模块
const http = require('http')

// 2.创建服务对象 create创建server服务
// request参数是请求，是对请求报文的封装，通过request参数可以获得请求报文的数据
// respone参数是响应，是对响应报文的封装，通过response参数可以设置响应报文
// 当接收到http对该端口的请求时，就会执行createServer里面的回调函数
const server = http.createServer((request,response) =>{
    // 设置响应体内容
    response.setHeader("content-type","text/html;charset=utf-8")
    response.end('你好')
}) 

// 3.监听端口，启动服务；只要运行该程序，就会启动回调函数
server.listen(9000,()=>{
    console.log('服务已经启动，9000端口监听中...');
})

