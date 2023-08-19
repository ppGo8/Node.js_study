/**
 * 需求  1.返回一个三行四列的表格
 *       2.奇偶行显示不同的背景颜色
 *       3.鼠标点击后变成高亮
 * 痛点：在response中写html没有语法高亮、代码提示非常痛苦
 */

// 1.导入http模块
const http = require('http')
// 2.创建服务对象
const server = http.createServer((request, reponse) => {
    // reponse.setHeader()
    reponse.end(`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            td {
                padding: 20px 40px;
            }
    
            table,
            td {
                border: 1px solid black;
                border-collapse: collapse;
            }
    
            table tr:nth-child(odd) {
                background-color: grey;
            }
    
            table tr:nth-child(even) {
                background-color: white;
            }
        </style>
    </head>
    
    <body>
        <table>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
        <script>
            // 获取所有的td 
            const td = document.querySelectorAll('td')
            // 遍历
            td.forEach(element => {
                element.addEventListener('click', function () {
                    this.style.backgroundColor = 'black'
                })
            })
    
    
        </script>
    </body>
    </html>
    `)
})
// 3.监听端口,启动服务
server.listen(9000, () => {
    console.log('服务启动中...')
})