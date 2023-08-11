<preview>尺寸</preview>
<template>
  <ry-radio v-model="radio" label="1" size="small">选项1</ry-radio>
  <ry-radio v-model="radio" label="2">选项2</ry-radio>
  <ry-radio v-model="radio" label="3" size="large">选项3</ry-radio>
</template>

<script setup lang="ts">
import { ref } from "vue";
const radio = ref("1");
</script>
