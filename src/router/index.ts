import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home/index.vue";
import Doc from "@/views/doc/index.vue";
import Switch from "@/components/SwitchDemo.vue";

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        {
          path: "switch",
          component: Switch,
        },
        {
          path: "button",
          component: Switch,
        },
        {
          path: "dialog",
          component: Switch,
        },
        {
          path: "tabs",
          component: Switch,
        },
      ],
    },
  ],
});

export default router;
