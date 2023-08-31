declare module '*.vue' {   //适用于以'.vue'拓展名结尾的所有文件
  import { ComponentOptions } from 'vue'

  const componentOptions: ComponentOptions
  export default componentOptions
}


declare type Nullable = T | null


declare module "*.ts"
declare module "*.jpeg"



declare module "*.md" {
  const str:string;
  export default str;
}

// custom.d.ts

declare module '@/i18n' {
  import { createI18n, VueI18n } from 'vue-i18n';

  const messages: Record<string, Record<string, string>>;

  const i18n: VueI18n;

  function setupI18n(): VueI18n;

  export { messages, i18n, setupI18n };
}