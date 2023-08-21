<template>
    <h1>Divider 分割线</h1>
    <div class="preview-wrapper">
      <Preview :component="dividerPreview1" />
      <Preview :component="dividerPreview2" />

      <!-- <Doc title="属性" type="prop" :body="propsDoc" />
      <Doc title="事件" type="event" :body="eventDoc" />
      <Doc title="插槽" type="slot" :body="slotDoc" />
      <PrevAndNext :prev="{ path: '/doc/switch', name: 'Switch开关' }" :next="{ path: '/doc/tabs', name: 'Tabs标签页' }" /> -->
    </div>
  </template>
  
  <script setup lang="ts">
//   import Doc from "@/components/Doc.vue";
//   import PrevAndNext from "@/components/PrevAndNext.vue";
  import Preview from "@/components/Preview.vue";
import dividerPreview1 from './dividerPreview1.preview.vue';
import dividerPreview2 from './dividerPreview2.preview.vue';

  </script>
  
  <style scoped>
    h1{
      color: #000;
      font-size: 1.8rem;
      font-weight: 700;
    }</style>