<template>
  <h1>Button 示例</h1>
  <div class="demo-wrapper">
    <Demo :component="ButtonDemo1" />
    <Demo :component="ButtonDemo2" />
    <Demo :component="ButtonDemo3" />
    <Demo :component="ButtonDemo4" />
    <Demo :component="ButtonDemo5" />
    <Demo :component="ButtonDemo6" />
  </div>
</template>

<script setup lang="ts">
import Demo from "@/components/Demo.vue";
import ButtonDemo1 from "@/view/doc/button/ButtonDemo1.demo.vue";
import ButtonDemo2 from "@/view/doc/button/ButtonDemo2.demo.vue";
import ButtonDemo3 from "@/view/doc/button/ButtonDemo3.demo.vue";
import ButtonDemo4 from "@/view/doc/button/ButtonDemo4.demo.vue";
import ButtonDemo5 from "@/view/doc/button/ButtonDemo5.demo.vue";
import ButtonDemo6 from "@/view/doc/button/ButtonDemo6.demo.vue";
</script>

<style lang="scss">
.rosy-button + .rosy-button {
  margin-left: 8px;
  margin-top: 8px;
}
</style>
