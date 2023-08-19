# path模块

path模块提供了`操作文件路径`的功能，以下为常用的API。

> 注意：
>
> - 这里是操作系统文件的路径，不是输入到浏览器的url地址。
>
> - 可以处理url端口号后面的地址，但是不能直接处理整个url

| API           | 说明                                                         |
| ------------- | ------------------------------------------------------------ |
| path.resolve  | 拼接规范的绝对路径`常用`                                     |
| path.sep      | 获取操作系统的路径分隔符                                     |
| path.parse    | 解析路径并返回对象，属性有：root,dir,base,ext,name等         |
| path.dirname  | 获取路径的目录名（`最后一个/ 之前的全部内容`）               |
| path.basename | 获取路径的基础名称（`最后一个/ 后面的全部内容`）             |
| path.extname  | 获得路径的扩展名（`最后一个/后面 的内容的拓展名,如果是个文件则返回空`） |

> 可以理解为：文件夹也是文件的一种；如果最后一个/后的内容是文件夹，那它也被当做文件来处理

```javascript
const path = require('path');
//获取路径分隔符
console.log(path.sep);
//拼接绝对路径
console.log(path.resolve(__dirname, 'test'));
//解析路径
let pathname = 'D:/program file/nodejs/node.exe';
console.log(path.parse(pathname));
//获取路径的目录名
console.log(path.dirname(pathname));
//获取路径基础名称
console.log(path.basename(pathname))
//获取路径的扩展名
console.log
```

