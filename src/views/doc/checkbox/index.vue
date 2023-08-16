<template>
    <div class="checkbox-doc-wrapper">
        <h1>Checkbox </h1>
        <div class="preview-wrapper">
            <Preview :component="CheckboxPreview1" />
            <Preview :component="CheckboxPreview2" />
            <Preview :component="CheckboxPreview3" />
            <PrevAndNext :prev="{ path: '/doc/link', name: 'Link 链接' }"
                :next="{ path: '/doc/switch', name: '开关 Switch' }" />
        </div>
    </div>
</template>
  
<script setup lang="ts">
;
import Preview from "@/components/Preview.vue";
import CheckboxPreview1 from "./CheckboxPreview1.preview.vue";
import CheckboxPreview2 from "./CheckboxPreview2.preview.vue";
import CheckboxPreview3 from "./CheckboxPreview3.preview.vue";
</script>
  
<style scoped> 
.checkbox-doc-wrapper {
    >h1{
    color: #000;
    font-size: 1.8rem;
    font-weight: 700;
  }
}

</style>