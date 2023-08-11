<preview>单选框组</preview>
<template>
  <ry-radio-group v-model="radio" size="large">
    <ry-radio label="1">选项 A</ry-radio>
    <ry-radio label="2">选项 B</ry-radio>
    <ry-radio label="3">选项 C</ry-radio>
    <ry-radio label="4" disabled>选项 C</ry-radio>
  </ry-radio-group>
</template>

<script setup lang="ts">
import { ref } from "vue";
const radio = ref("1");
</script>