<template>
  <div class="preview-wrapper">
    <h2>
      {{ component.__sourceCodeTitle }}
      <ry-Button class="preview-wrapper-themecolor" @click="hideCode" v-if="codeVisible">隐藏代码</ry-Button>
      <ry-Button class="preview-wrapper-themecolor" @click="showCode" v-else>查看代码</ry-Button>
    </h2>
    <div class="preview-wrapper-component">
      <component :is="component" />
    </div>

    <div class="preview-wrapper-code" v-if="codeVisible">
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>



<script setup lang="ts">
import "prismjs";
import "prismjs/themes/prism.css";
import { computed, ref } from "vue";
const Prism = (window as any).Prism;
const props = defineProps({
  component: Object,
});



const showCode = () => (codeVisible.value = true);
const hideCode = () => (codeVisible.value = false);
const codeVisible = ref(false);

const html = computed(() => {
  return Prism.highlight(
    props.component.__sourceCode,
    Prism.languages.html,
    "html"
  );
});
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.preview-wrapper {
  background-color: #fff;
  border: 1px solid $border-color;
  border-radius: 0.5rem;
  margin: 16px 0px 32px;
  min-width: 300px;
  &-themecolor {
    background-color: #818CF8;
    color: #fff;
  }
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 2px dashed $border-color;
    display: flex;
    color: #818CF8;
    justify-content: space-between;
  }
  &-component {
    padding: 16px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
      background-color: rgb(250 ,250, 250);
    }
  }
}
</style>