import "@/lib/rosy.scss"
import "@/assets/css/index.scss";
import "github-markdown-css";
import Ryui from "./lib/index";
import { createI18n } from "vue-i18n";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import enTranslation from './i18n/en.json'
import zhTranslation from './i18n/zh.json'
const app = createApp(App);
const i18n = createI18n({
    locale: 'en', // 设置默认语言
    messages: {
        en: enTranslation, // 使用导入的翻译文件
        zh: zhTranslation   // 使用导入的翻译文件
    }
})

app.provide('i18n', i18n)
app.use(router);
app.use(Ryui)
app.use(i18n)

app.config.errorHandler = (err) => {
    console.error('Global error:', err);
};


app.mount("#app");
