
import path from "path";
import fs from 'fs';
import { baseParse } from "@vue/compiler-core" //将Vue单文件组件解析成AST（抽象语法树）

const vitePluginVue = {
  name: "preview",
  transform(code, id) {
  

    if (!/\/src\/view\/doc\/.*\.preview\.vue/.test(id) || !/vue&type=preview/.test(id)) {
      return;
    }


    let path = `.${id.match(/\/src\/view\/doc\/.*\.preview\.vue/)[0]}`;
    
    const file = fs.readFileSync(path).toString();
    const parsed = baseParse(file).children.find((n) => n.tag === "preview")

  
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











