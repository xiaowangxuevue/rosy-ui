<preview>禁用</preview>
<template>
  <ry-radio v-model="radio" label="1" disabled>选项1</ry-radio>
  <ry-radio v-model="radio" label="2" disabled>选项2</ry-radio>
</template>

<script setup lang="ts">
import { ref } from "vue";
const radio = ref("1");
</script>