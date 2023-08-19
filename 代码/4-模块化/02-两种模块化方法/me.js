function tiemo(){
    console.log('贴膜...')
}

function xiuping() {
    console.log('修屏...')
}

// // 1.单个暴露
// exports.tiemo = tiemo
// exports.xiuping = xiuping

// 2.多个同时暴露,可以省略键只保留值
module.exports = {
    tiemo,
    xiuping
}

// // 3.错误暴露方法
// exports = 3 // 调用模块者只会接受到空对象