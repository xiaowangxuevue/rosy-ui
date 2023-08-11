<preview>是否有边框</preview>
<template>
  <ry-radio v-model="radio" label="1" size="small" border>选项1</ry-radio>
  <ry-radio v-model="radio" label="2" border>选项2</ry-radio>
  <ry-radio v-model="radio" label="3" size="large" border>选项3</ry-radio>

  <ry-radio v-model="radio" label="1" size="small" border disabled
    >选项1</ry-radio
  >
  <ry-radio v-model="radio" label="2" border disabled>选项2</ry-radio>
  <ry-radio v-model="radio" label="3" size="large" border disabled
    >选项3</ry-radio
  >
</template>

<script setup lang="ts">
import { ref } from "vue";
const radio = ref("1");
</script>