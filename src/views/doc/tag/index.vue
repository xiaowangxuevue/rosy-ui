<template>
  <div class="select-doc-wrapper">
    <h1>Tag</h1>
    <div class="preview-wrapper">
      <Preview :component="TagPreview1" />
      <Preview :component="TagPreview2" />
      <Preview :component="TagPreview3" />
      <Preview :component="TagPreview4" />
      <Preview :component="TagPreview5" />
      <Doc title="Tag 属性" type="prop" :body="propDoc" />
      <Doc title="Tag 插槽" type="slot" :body="slotDoc" />
      <PrevAndNext :prev="{ path: '/doc/link', name: 'Link' }"
        :next="{ path: '/doc/switch', name: 'Switch' }" />
    </div>
  </div>
</template>
    
<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import TagPreview1 from "./TagPreview1.preview.vue";
import TagPreview2 from "./TagPreview2.preview.vue";
import TagPreview3 from "./TagPreview3.preview.vue";
import TagPreview4 from "./TagPreview4.preview.vue";
import TagPreview5 from "./TagPreview5.preview.vue";
import PrevAndNext from "@/components/PrevAndNext.vue";
import Doc from "@/components/Doc.vue";
const propDoc = [
  ["closable", "是否可关闭", "boolean", "-", "false"],
  [
    "color",
    "	标签颜色，设置该项后　type 无效",
    "string",
    "{ color?: string, borderColor?: string, textColor?: string }",
    "undefined",
  ],
  ["size", "尺寸", "string", "	small/ medium / large", "false"],
  [
    "type",
    "类型",
    "string",
    "default / primary / info / success / warning / error",
    "default",
  ],
];
const slotDoc = [["default", "	标签内容", "-"]];
</script>
    
<style lang="scss" scoped></style>