##
解决在安卓上的点击出现篮框问题  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

##
用于开发环境的配置，它使用了一些 Node.js 库和中间件来处理 Markdown 文件。这段代码看起来像是针对 Koa 框架和 Rollup 构建工具的配置
```
// @ts-nocheck  
//用于告诉TypeScript编译器不要对这个文件进行类型检查
import path from 'path'
import fs from 'fs'
import marked from 'marked' 

const mdToJs = (str:string) => {
    const content = JSON.stringify(marked(str))
    return `export default ${content}`
}

export function md() {
    return {
        configuseServer: [  //用于开发
            async ({ app }) => {
                app.use(async (ctx, next) => {
                    if (ctx.path.endsWith('.md')) {
                        ctx.type = 'js'
                        const filePath = path.join(process.cwd(), ctx.path)
                        ctx.body = mdToJs(fs.readFileSync(filePath).toString())
                    } else {
                        await next()
                    }
                })
            }

        ],
        transforms: [{   // 用于 rollup插件
            test: context => context.path.endsWith('.md'),
            transform:({ code }) => mdToJs(code)

        }]
    }
}
```



##
document.body.clientWidth  /  document.documentElement.clientWidth
在标准的HTML文档结构中，<body>元素是位于<html>元素内部的，而且通常是默认会有一些外边距和内边距的。这些外边距和内边距会对document.body.clientWidth的值产生影响，可能导致结果不准确。

相比之下，document.documentElement.clientWidth是获取文档根元素（<html>元素）的可视宽度。它不包括根元素的外边距和内边距，因此通常是更准确的方法来获取页面的可视宽度。


## 
封装vue-custom-blocks-plugin插件
将（处理指定目录下的.demo.vue文件时，提取其中的标题信息和组件代码，并将这些信息作为附加属性添加到加载的Vue组件上，以便在开发阶段用于展示组件示例和源代码。这对于Vue组件库的开发和调试非常有用。）插件封装到plugins中

##
createWebHashHistory();

##
https://github.com/coderyjw/jw-ui.git 库


##
 type TargetElement = HTMLInputElement | HTMLTextAreaElement;
ChatGPT
这段代码定义了一个 TypeScript 类型别名 TargetElement，它可以表示两种类型的 HTML 元素：HTMLInputElement 和 HTMLTextAreaElement。这两种元素分别表示输入框（文本输入框）和文本域（多行文本输入框）。

通过这个类型别名，你可以在 TypeScript 代码中使用 TargetElement 来声明变量、参数或返回值，以确保这些值只能是 HTMLInputElement 或 HTMLTextAreaElement 类型的实例。这有助于在编译时捕获类型错误，并提供更好的类型安全性。

例如，你可以这样使用 TargetElement：

typescript
Copy code
function doSomething(element: TargetElement) {
    // 在这里，element 必须是 HTMLInputElement 或 HTMLTextAreaElement 类型
    // 可以安全地调用这些元素的属性和方法
}
..
const { value } = e.target as TargetElement;：这行代码从事件对象 e 的 target 属性中提取 value 属性。这里使用了类型断言 as TargetElement，将 target 断言为 TargetElement 类型，以确保 value 的类型是合适的。