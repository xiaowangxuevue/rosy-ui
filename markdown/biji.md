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
