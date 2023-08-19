/**
 * 需求: 将css和js分别放在文件中，在Html以外部文件的形式引入；返回Html给用户
 * 注意：资源请求路径前面是有符号/的，别忘记写！
 * 痛点：需要使用else if判断每次需要返回的资源是什么
 */

// 1.导入http模块
const { log } = require('console')
const fs = require('fs')
const http = require('http')
// 2.创建服务对象
const server = http.createServer((request, response) => {
    // 获取请求资源路径:注意 资源请求路径前面全部有/
    const { pathname } = new URL(request.url, 'http://127.0.0.1:9000')
    if (pathname === '/') {
        const html = fs.readFileSync(__dirname + '/index.html')
        response.end(html)
    } else if (pathname === '/index.css') {
        const css = fs.readFileSync(__dirname + '/index.css')
        response.end(css)
    } else if (pathname === '/index.js') {
        const js = fs.readFileSync(__dirname + '/index.js')
        response.end(js)
    } else {
        response.statusCode = 404
        response.end('not find')
    }
})
// 3.监听端口,启动服务
server.listen(9000, () => {
    console.log('服务启动中...')
})