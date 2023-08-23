import { h } from "vue";
import Markdown from "@/components/Markdown.vue";

import { html as GetStarted } from "../../markdown/get-started.md";
import { html as Install } from "../../markdown/install.md";
import { html as Intro } from "../../markdown/intro.md";

const md = (string) => h(Markdown, { content: string, key: string });
const IntroDoc = md(Intro);
const GetStartedDoc = md(GetStarted);
const InstallDoc = md(Install);
import TagDoc from "@/views/doc/tag/index.vue"
import DividerDoc from "@/views/doc/divider/index.vue"
import CheckboxDoc from "@/views/doc/checkbox/index.vue"
import RadioDoc from "@/views/doc/radio/index.vue";
import LinkDoc from "@/views/doc/link/index.vue"
import EllipsisDoc from "@/views/doc/ellipsis/index.vue";
import SwitchDoc from "@/views/doc/switch/index.vue";
import ButtonDoc from "@/views/doc/button/index.vue";
import DialogDoc from "@/views/doc/dialog/index.vue";
import TabsDoc from "@/views/doc/tabs/index.vue";
import AvatarDoc from "@/views/doc/avatar/index.vue";
import IconDoc from "@/views/doc/icon/index.vue";
import InputDoc from "@/views/doc/input/index.vue";
import SelectDoc from "@/views/doc/select/index.vue"
const docMenus = {
    General: [
        { path: "intro", component: IntroDoc, name: "Introduce" },
        { path: "install", component: InstallDoc, name: "Install" },
        { path: "get-started", component: GetStartedDoc, name: "GettingStarted" },
    ],
    Component: [

        { path: "avatar", component: AvatarDoc, name: "Avatar" },
        { path: "button", component: ButtonDoc, name: "Button" },
        { path: "divider", component: DividerDoc, name: "Divider" },
        { path: "ellipsis", component: EllipsisDoc, name: "Ellipsis" },
        { path: "icon", component: IconDoc, name: "Icon" },
        { path: "link", component: LinkDoc, name: "Link" },
        { path: "tag", component: TagDoc, name: "tag" },
    ],
    DataEnterComponent: [
        { path: "switch", component: SwitchDoc, name: "Switch" },
        { path: "radio", component: RadioDoc, name: "Radio" },
        { path: "checkbox", component: CheckboxDoc, name: "Checkbox" },
        { path: "input", component: InputDoc, name: "Input" },
        { path: "select", component: SelectDoc, name: "select" },
    ],
    FeedbackComponent: [{ path: "dialog", component: DialogDoc, name: "Dialog" }],
    NavComponent: [{ path: "tabs", component: TabsDoc, name: "Tabs" }],
};


let docRoutes= [];

for(let i in docMenus) {
  docRoutes = [...docRoutes, ...docMenus[i]]
}

export { docRoutes, docMenus };