<template>
    <h1>Divider 分割线</h1>
    <div class="preview-wrapper">
        <Preview :component="dividerPreview1" />
        <Preview :component="dividerPreview2" />
        <Preview :component="dividerPreview3" />

        <Doc title="属性" type="prop" :body="propDoc" />
        <Doc title="插槽" type="slot" :body="slotDoc" />
        <PrevAndNext :prev="{ path: '/doc/button', name: 'Button ' }"
            :next="{ path: '/doc/ellipsis', name: ' Ellipsis' }" />
    </div>
</template>
  
<script setup lang="ts">
import Doc from "@/components/Doc.vue";
import PrevAndNext from "@/components/PrevAndNext.vue";
import Preview from "@/components/Preview.vue";
import dividerPreview1 from './dividerPreview1.preview.vue';
import dividerPreview2 from './dividerPreview2.preview.vue';
import dividerPreview3 from './dividerPreview3.preview.vue';

const propDoc = [
    ["title-placement", "标题的位置", "left | right | center", "left"],
    ["direction", "设置分割线方向", "horizontal | vertical", "horizontal"],
];
const slotDoc = [["default", "分割线的标题"]];
</script>
  
<style scoped>
h1 {
    color: #000;
    font-size: 1.8rem;
    font-weight: 700;
}
</style>