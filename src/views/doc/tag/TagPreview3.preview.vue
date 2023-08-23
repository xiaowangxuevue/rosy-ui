<preview>可关闭</preview>
<template>
   <ry-tag closeable v-for="tag in tags" :key="tag.name" :type="tag.type">{{ tag.name }}</ry-tag>
 
</template>

<script setup lang="ts">
import {reactive} from 'vue'

const tags = reactive([
  { name: "Tag 1", type: "" },
  { name: "Tag 2", type: "success" },
  { name: "Tag 3", type: "info" },
  { name: "Tag 4", type: "warning" },
  { name: "Tag 5", type: "error" },
]);
</script>