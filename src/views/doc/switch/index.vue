<template>
  <h1>Switch 开关</h1>
  <div class="preview-wrapper">
    <Preview :component="SwitchPreview1" />
    <Preview :component="SwitchPreview2" />
    <Preview :component="SwitchPreview3" />
    <Doc title="属性" type="prop" :body="propsDoc" />
    <PrevAndNext :prev="{ path: '/doc/link', name: 'Link' }" :next="{ path: '/doc/radio', name: 'Radio' }" />
  </div>
</template>

<script setup lang="ts">
import Doc from "@/components/Doc.vue";
import PrevAndNext from "@/components/PrevAndNext.vue";
import Preview from "@/components/Preview.vue";
import SwitchPreview1 from "./SwitchPreview1.preview.vue";
import SwitchPreview2 from "./SwitchPreview2.preview.vue";
import SwitchPreview3 from "./SwitchPreview3.preview.vue";


const propsDoc = [
["v-model", "绑定值", "boolean", "-", "false"],
  ["active-color", "在开启状态时的背景颜色", "string", "-", "#18a058"],
  ["inactive-color", "在关闭状态时的背景颜色", "string", "-", "#dbdbdb"],
  ["disabled", "是否禁用", "boolean", "-", "false"],
  ["size", "大小", "string", "small / default / large", "default"],
];

</script>

<style lang="scss" >
  h1{
    color: #000;
    font-size: 1.8rem;
    font-weight: 700;
  }

</style> 