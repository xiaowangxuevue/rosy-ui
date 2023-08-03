declare module '*.vue' {   //适用于以'.vue'拓展名结尾的所有文件
  import { ComponentOptions } from 'vue'

  const componentOptions: ComponentOptions
  export default componentOptions
}


declare type Nullable = T | null







declare module "*.md" {
  const str:string;
  export default str;
}