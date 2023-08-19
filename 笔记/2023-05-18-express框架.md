# Express框架

- http模块可以搭建http服务，给浏览器返回处理结果。

- 但是http模块实现服务端的功能时，代码写起来较复杂，因此为了提高**开发效率**，都会使用框架。
- 使用框架的好处：简单、开发效率高

## express介绍

- express是一个基于Node.js平台的极简、灵活的**WEB应用开发框架**。

  express官方网址：https://www.expressjs.com.cn/ 。

- 简单来说，express是一个**封装好的工具包**，封装了很多功能，便于我们开发WEB应用（HTTP服务。）

  > 使用npm工具包下载express

## express使用

### express下载

express本身是一个npm包，使用前需要先使用npm安装

```shell
npm init        // 文件初始化为npm包后才可以使用后续的命令
npm i express
```

### express使用步骤

express基本使用步骤是四步：1.引入模块  2.创建应用对象  3.**创建路由规则**  4.监听端口，启动服务

```javascript
// 1.引入express模块
const express = require('express')
// 2.创建应用对象
const app = express()
// 3.创建路由规则
app.method(path,fn1(){})
// 4.监听端口，启动服务
app.listen(port,fn2(){})
```

命令行下执行该脚本，然后就可以使用浏览器访问指定路径的内容。

```shell
# 执行脚本
node <文件名>       # 方法1
nodemon <文件名>    # 方法2
```

## express路由

### 什么是路由

官方定义：路由确定了<font color=red>应用程序</font>如何响应<font color=red>客户端对特定端点的请求</font>

### 路由的使用

一个路由的组成有:<font color=red>1.请求方法、2.请求文件路径、3.回调函数</font>

express中提供了一系列方法，可以很方便的使用路由，语法如下：

```javascript
// method请求方法   : get post all
// path请求资源路径  : *表示所有页面  ‘/’首页
// 回调函数
app.<method>(path,callback)
```

app是由express模块中的方法生成的应用对象。

### 获得请求报文参数（待补充）

使用express模块中的方法 获得请求报文参数（请求报文传送的数据）

```javascript
// 原生方法
request.method     // 请求方式
request.url        // 请求资源路径+上传参数  符号/后面的全部内容
request.httpVersion// 请求协议版本
request.headers    // 请求头
request.body       // 获得请求体
```

```javascript
// express方法
request.query          // 获得查询字符串
request.get('请求头键') // 获得请求头的任意键对应的值,注意键均需要字母小写
```

### 获取路由参数

路由参数：`URL请求路径中的参数`

```javascript
app.get('/:id.html', (req, res) => {
	res.send('商品详情, 商品 id 为' + req.params.id);
});
```

说明：

- 上述代码中：`id`是占位符，可以是任何字符串。

  当浏览器向以下URL发送请求时 http://127.0.0.1:3000/id.html （id可以是任何值），均会执行回调函数。

- 问题：那如何获得浏览器发送url的真实值，或者id代表的值？

  ```javascript
  request.params.id // 最后一个id要和在请求路径里面的占位符 一致
  ```

---

为什么要有占位符？

- 占位符可以让代码更加灵活、高效。

  举例来说

  - 如果是根据各个商品的uid返回网页内容，使用占位符就可以只写一条路由规则返回响应的内容；

  * 而不是对每个商品的uid都单独写一条规则。

## express响应设置

响应的方式：

- 原生HTTP模块的响应方式。

- express封装了一些API来方便给客户端响应数据

注意响应的操作都是基于response对象的。

**1.原生响应方法**

```javascript
// 原生的设置方法
respnse.statusCode = 404           // 响应状态码
respnse.statusMessage = 'love'     // 响应信息描述
respnse.setHeader('pp','love dog') // 响应头
respnse.write('body')              // 响应体
```

**2.express响应方法**

```javascript
// expree方法设置响应
respnse.status(500)                  // 设置响应状态码
respnse.set('xxx','yyy')             // 设置响应头
respnse.send('你好,express！')        // 设置响应体;中文不会乱码
// 还可以链式编程
respnse.status(500).set('xxx','yyy').send('你好,express！')
// 不需要end结尾
```

**3.express的其他响应**

```javascript
// 其他响应
response.redirect(path)     // 重定向
response.download(filename) // 下载响应
response.json()             // 响应json
response.sendFile(__dirname + '/home.html')         // 响应文件内容
```

express的响应会自动指定响应头的字符集类型，无须设置响应头的字符集类型。

## 中间件



## 防盗链

### 基础知识

- 防盗链技术：防止外部网站访问浏览器的资源

  - 举例：图片防盗链

    - 复制别的网站的图片地址

    - 在自己的网站中添加img标签,src是外部链接地址；
    - 如果自己的网站图片显示不成功，那么就是图片所在的网站使用了防盗链技术，**禁止外部网站获取自身服务器的资源**。

- 防盗链技术的好处：

  - 保护资源，如果是稀缺资源防止他人盗用

  - 减少服务器压力，如果很网站访问自己网站的资源，会给服务器造成额外的压力

- 服务器如何识别某个请求来自谁？

  请求头里面的`referer`字段，含义是：发起请求的ip或域名

### 代码实现

- `referer`字段说明

  `referer`字段提供访问来源的信息，ip或域名。

  浏览器向服务器请求资源时，主要是以下三种场景时，会发送`referer`字段：

  - 任何非首次请求

  - 点击网页上链接

  - 发送表单

  - 网页加载静态资源，如`图片src、脚本js、样式css`

    ```html
    <!-- 加载图片 -->
    <img src="foo.jpg">
    <!-- 加载脚本 -->
    <script src="foo.js"></script>
    <!-- 加载样式 -->
    <link href="foo.css" rel="stylesheet">
    ```

  以下场景不发送`referer`字段：

  - 用户在地址栏输入url
  - 选中浏览器保存的标签

- 案例：保护图片资源

  网页请求的执行流程：

  - 用户在地址栏输入url

  - 服务器返回html

  - 浏览器解析html发现里面还有对img图片的请求

  - 于是浏览器以浏览器当前的主机名向img所在的服务器发送请求。

    所以访问图片的请求会有referer请求头，值是浏览器当前的主机名。

  ```javascript
  // 图片防盗链实现：只允许127.0.0.1的域名访问图片获得图片;localhost不可以
  // 设置中间件
  app.use((request, response, next) => {
      // 获得申请图片的reffer
      const referer = request.get('referer')
      // 判断
      if (referer) {
          const url = new URL(referer)
          const hostname = url.hostname
          // 只允许127.0.01的请求访问图片
          if (hostname !== '127.0.0.1') {
              response.status(200).send('<h1>not find image</h1>')
              return;
          }
      }
      next()
  })
  
  // 静态资源中间件设置
  app.use(express.static(__dirname + '/public'))
  ```

## Router路由模块化

https://www.bilibili.com/video/BV1gM411W7ex?p=113&spm_id_from=pageDriver&vd_source=dde2f4dd432156027fedf9b1734ba705 

### 什么是Router?

## 模板引擎

### 什么是模板引擎？

- 模板引擎是分离`用户界面和业务数据`的一种技术。

- 粗略理解用来分离HTML和服务端JS（而不是浏览器端的JS）

  随着前后端的分离，这种技术用的较少了，但是也需要学习。

### EJS

EJS是一个高效的JavaScript的模板引擎

官网：https://ejs.co/

中文站：https://ejs.bootcss.com/

---

**补充**

npm安装包也有向上寻找机制，只要是在初始化的npm包的文件夹里，任何地方安装包都可以，都会安装到初始化时唯一的npm_modules文件夹中，



## express-generator

安装方法

```shell
npm install -g express-generator
```





