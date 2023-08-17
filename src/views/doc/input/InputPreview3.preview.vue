<preview>可清空</preview>
<template>
  
  <ry-input v-model="Value" placeholder="请输入内容"  clearable  />
</template>

<script setup lang="ts">
import { ref } from "vue";
const Value = ref('hello')
</script>
