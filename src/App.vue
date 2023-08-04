
<template>
  <router-view></router-view>
</template>

<script setup>
import { ref, provide } from "vue";
import router from "./router";
const clientWidth = ref(null)
clientWidth.value = document.documentElement.clientWidth; //这个属性的值不会受到 CSS 样式的影响，不包括 <html> 元素的外边距和内边距。
const asideVisible = ref(clientWidth.width<= 500 ? false : true);
provide("asideVisible", asideVisible);
provide("clientWidth", clientWidth);
// 每次路由导航结束后执行
router.afterEach(() => {
  if(clientWidth.value<= 500) {
    asideVisible.value = false
  }
})

window.onresize = () => {
  clientWidth.value = document.body.clientWidth;
  if(clientWidth.value<= 500) {
    asideVisible.value = false
  }else {
    asideVisible.value = true
  }
}
</script>

<style lang="scss" scoped>

</style>