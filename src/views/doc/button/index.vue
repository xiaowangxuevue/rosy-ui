<template>
  <div class="button-doc-wrapper">
    <h1>Button 按钮</h1>
    <div class="preview-wrapper">
      <Preview :component="ButtonPreview1" />
      <Preview :component="ButtonPreview2" />
      <Preview :component="ButtonPreview3" />
      <Preview :component="ButtonPreview4" />
      <!-- <Preview :component="ButtonPreview5" /> -->
      <!-- <Preview :component="ButtonPreview6" /> -->
      <Doc title="属性" type="prop" :body="propsDoc" />
      <Doc title="插槽" type="slot" :body="slotDoc" />
      <PrevAndNext
        :prev="{ path: '/doc/avatar', name: 'Avatar' }"
        :next="{ path: '/doc/divider', name: 'Divider' }" />
      
    </div>

  </div>
</template>

<script setup lang="ts">
import Doc from "@/components/Doc.vue";
import PrevAndNext from "@/components/PrevAndNext.vue";
import Preview from "@/components/Preview.vue";
import ButtonPreview1 from "./ButtonPreview1.preview.vue";
import ButtonPreview2 from "./ButtonPreview2.preview.vue";
import ButtonPreview3 from "./ButtonPreview3.preview.vue";
import ButtonPreview4 from "./ButtonPreview4.preview.vue";
import ButtonPreview5 from "./ButtonPreview5.preview.vue";
import ButtonPreview6 from "./ButtonPreview6.preview.vue";
import ButtonPreview7 from "./ButtonPreview7.preview.vue";
const propsDoc = [
  [
    "theme",
    "类型",
    "string",
    "default / primary / info / success / warning / error",
    "default",
  ],
  ["dashed", "是否虚线为按钮", "boolean", "-", "false"],
  ["size", "大小", "string", "small / default / large", "default"],
  ["round", "是否为圆角按钮", "boolean", "-", "false"],
  ["circle", "是否为圆形按钮", "boolean", "-", "false"],
  ["disabled", "是否禁用", "boolean", "-", "fasle"],
  ["loading", "是否显示加载中", "boolean", "-", "fasle"],
  ["icon-placement", "按钮中图标的位置", "string", "left / right", "left"],
];
const slotDoc = [["default", "自定义默认内容"],["icon", "按钮的图标"],];
</script>
<style lang="scss">
.rosy-button {
  margin-right: 8px;
  margin-top: 8px;
}
.button-doc-wrapper{
  >h1{
    color: #000;
    font-size: 1.8rem;
    font-weight: 700;
  }
}

</style>
