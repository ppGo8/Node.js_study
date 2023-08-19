// 导入jwt
const jwt = require('jsonwebtoken')
// 创建token : 用户身份通过校验时
// 语法：jwt.sign(用户数据,加密字符串，配置对象) 第一个和第三个参数一般是对象格式
const token = jwt.sign({
    username: 'zhangsan'
    }, 'atguigu',{
        expiresIn: 70   // 单位是秒
    })
console.log(token)  // 输出生成的token

// 校验token : 用户再次发送请求
// 校验方法：jwt.verity(token,加密字符串，回调函数) 
const t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpoYW5nc2FuIiwiaWF0IjoxNjg1NDEzNDI2LCJleHAiOjE2ODU0MTM0OTZ9.gkRmDvj93z3GJAtNidg_sawAcjy0ws8Rl8mwra-HPD4'
jwt.verify(t,'atguigu',(err,data)=>{
    if(err){
        console.log('校验失败')
        return
    }
    console.log(data)
})

// token失效后的解决方法：重新登录然后生成。 
// 只有登录页面登录后才会重新生成