<template>
  <h1>Dialog 对话框</h1>
  <div class="preview-wrapper">
    <Preview :component="DialogPreview1" />
    <Preview :component="DialogPreview2" />
    <Preview :component="DialogPreview3" />
    <Doc title="属性" type="prop" :body="propsDoc" />
    <Doc title="事件" type="event" :body="eventDoc" />
    <Doc title="插槽" type="slot" :body="slotDoc" />
    <PrevAndNext :prev="{ path: '/doc/input', name: 'Input' }" :next="{ path: '/doc/tabs', name: 'Tabs' }" />
  </div>
</template>

<script setup lang="ts">
import Doc from "@/components/Doc.vue";
import PrevAndNext from "@/components/PrevAndNext.vue";
import Preview from "@/components/Preview.vue";
import DialogPreview1 from "./DialogPreview1.preview.vue";
import DialogPreview2 from "./DialogPreview2.preview.vue";
import DialogPreview3 from "./DialogPreview3.preview.vue";


const propsDoc = [
  ["v-model", "绑定值", "boolean", "-", "flase"],
  ["overlay", "是否需要背景遮罩", "boolean", "-", "true"],
  ["title", "标题", "string", "-", "标题"],
  [
    "overlay-closebale",
    "是否可以通过点击overlay关闭对话框",
    "boolean",
    "-",
    "true",
  ],
];
const slotDoc = [
  ["-", "Dialog 的内容"],
  ["title", "Dialog 标题区的内容"],
  ["footer", "Dialog 按钮操作区的内容"],
];
const eventDoc = [
  ["confirm", "点击确认按钮的回调", "-"],
  ["cancel", "点击取消按钮的回调", "-"],
  ["onOverlayClick", "点击遮罩的回调", "-"],
];
</script>

<style scoped>
  h1{
    color: #000;
    font-size: 1.8rem;
    font-weight: 700;
  }</style>