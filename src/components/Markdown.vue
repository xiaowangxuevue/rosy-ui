<template>
  <article class="markdown-body" v-html="content"></article>
</template>
  
<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
});
const content = ref<string>(null);
console.log(props.path);
import(/* @vite-ignore */ props.path).then((result) => {
  console.log(result, 'result')
  content.value = result.html;
});
</script>

<style lang="scss">
.markdown-body {
  background-color: #F6F8FA;
  font-size: 1.3rem;
  pre {
    background-color: #fff;
  }
}
</style>