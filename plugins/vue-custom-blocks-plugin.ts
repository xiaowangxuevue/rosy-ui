
import path from "path";
import fs from 'fs';
import { baseParse } from "@vue/compiler-core" //将Vue单文件组件解析成AST（抽象语法树）

const vitePluginVue = {
  name: "demo",
  transform(code, id) {
  
    const str = 'src/view/doc/button/ButtonDemo5.demo.vue'
 
    if (!/\/src\/view\/doc\/.*\.demo\.vue/.test(id) || !/vue&type=demo/.test(id)) {
      return;
    }


    let path = `.${id.match(/\/src\/view\/doc\/.*\.demo\.vue/)[0]}`;
    
    const file = fs.readFileSync(path).toString();
    const parsed = baseParse(file).children.find((n) => n.tag === "demo")

  
    const title = parsed.children[0].content;

    // const title = parsed.chidren[0].content;

    const main = file.split(parsed.loc.source).join("").trim();
    // console.log(main,'main');

    // console.log({ code, id, file, parsed, title, main });

    return `export default function(Component) {
      Component.__sourceCode = ${JSON.stringify(main)}
      Component.__sourceCodeTitle = ${JSON.stringify(title)}
    }`.trim();
  }
}

export default vitePluginVue;











