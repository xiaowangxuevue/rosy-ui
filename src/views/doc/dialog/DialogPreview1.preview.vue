<preview>基础用法</preview>
<template>
  <div>
    <ry-button theme="primary" @click="toggle">点击打开对话框</ry-button>
    <ry-dialog v-model="visible" > </ry-dialog>
  </div>
</template>
  
  <script setup lang="ts">

import { ref } from "vue";
const visible = ref(false);
const toggle = () => {
  visible.value = !visible.value;
};

</script>