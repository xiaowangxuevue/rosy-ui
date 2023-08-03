import { h } from "vue";
import { createWebHistory, createRouter,  createWebHashHistory, } from "vue-router";
import Home from "@/view/home/index.vue";
import Doc from "@/view/doc/index.vue";
import SwitchDoc from "@/view/doc/switch/index.vue";
import ButtonDoc from "@/view/doc/button/index.vue";
import DialogDoc from "@/view/doc/dialog/index.vue";
import TabsDoc from "@/view/doc/tabs/index.vue";
import Markdown from "@/components/Markdown.vue";
// const md = (filename) => h(Markdown, { path: `../../markdown/${filename}.md`, key: filename });
import { html as GetStarted } from "../../markdown/get-started.md";
import { html as Install } from "../../markdown/install.md";
import { html as Intro } from "../../markdown/intro.md";

const md = (string) => h(Markdown, { content: string, key: string });


const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    {
      path: "/doc",
      redirect: "/doc/intro",
      component: Doc,
      children: [
        { path: "intro", component: md(Intro) },
        { path: "install", component: md(Install) },
        { path: "get-started", component: md(GetStarted) },
        // { path: "biji", component: md("biji") },
        { path: "switch", component: SwitchDoc },
        { path: "button", component: ButtonDoc },
        { path: "dialog", component: DialogDoc },
        { path: "tabs", component: TabsDoc },
      ],
    },
  ],
});
export default router;