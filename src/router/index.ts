
import { createRouter,  createWebHashHistory, } from "vue-router";
import Home from "@/views/home/index.vue";
import Doc from "@/views/doc/index.vue";
import Demo from "@/views/demo.vue";
const history = createWebHashHistory();

import docRoutes from "./doc-router";
let docRoutes1= [];

for(let i in docRoutes) {
  docRoutes1 = [...docRoutes1, ...docRoutes[i]]
}

console.log(docRoutes1,'docrou');

const router = createRouter({
  history,
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/demo", component: Demo },
    {
      path: "/doc",
      redirect: "/doc/intro",
      component: Doc,
      children: [
        ...docRoutes1,
      ],
    },
  ],
});
export default router;