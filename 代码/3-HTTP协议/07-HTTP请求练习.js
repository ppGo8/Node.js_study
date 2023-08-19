// 1.导入Http模块
const { log } = require('console')
const http = require('http')

// 2.创建服务对象
const server = http.createServer((request, response) => {
    // 获取请求的方法
    const { method } = request // 解构赋值的方法获得请求 
    console.log(method)
    
    // 获取请求的url路径
    const { pathname } = new URL(request.url, 'http://127.0.0.1:9000')
    console.log(pathname)

    // 设置响应内容
    // 设置响应头 防止中文乱码
    response.setHeader("content-type","text/html;charset=utf-8")
    if (pathname === '/login' && method.toUpperCase()==='GET') {
        response.end('登录页面')
    } else if (pathname === '/reg' && method.toUpperCase()==='GET'){
        response.end('注册页面')
    }else{
        response.end("NOT FIND")
    }
})

// 3.监听端口,启动服务
server.listen(9000, () => {
    console.log('服务启动中...')
})