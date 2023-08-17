<template>
    <div class="input-doc-wrapper">
        <h1>Input </h1>
        <div class="preview-wrapper">
            <Preview :component="InputPreview1" />
            <Preview :component="InputPreview2" />
            <Preview :component="InputPreview3" />
        </div>
    </div>
</template>ssss
  
<script setup lang="ts">
;
import Preview from "@/components/Preview.vue";
import InputPreview1 from "./InputPreview1.preview.vue";
import InputPreview2 from "./InputPreview2.preview.vue";
import InputPreview3 from "./InputPreview3.preview.vue";



</script>

  
<style scoped> .input-doc-wrapper {
     >h1 {
         color: #000;
         font-size: 1.8rem;
         font-weight: 700;
     }
 }
</style>