<preview>禁用</preview>
<template>
  
  <ry-input v-model="Value" placeholder="请输入内容"  disabled />
</template>

<script setup lang="ts">
import { ref } from "vue";
const Value = ref('hello')

const hanldeInput = (e) => {
  console.log({ e });
};
</script>
