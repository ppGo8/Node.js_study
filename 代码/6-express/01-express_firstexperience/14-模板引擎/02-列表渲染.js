/**
 * 需求：数组拼接为ul li的形式
 */
const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙师弟']

// 原生js方法
// 生成li
const xiyouli = xiyou.map((ele, index) => {
    return '<li>' + ele + '</li>'
})
// 生成ul
str = `<ul>${xiyouli.join('')}</ul>`
console.log(str)

// EJS实现
