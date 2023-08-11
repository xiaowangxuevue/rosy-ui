<preview>基础用法</preview>
<template>
   <ry-radio v-model="radio" label="1">选项1</ry-radio>
  <ry-radio v-model="radio" label="2">选项2</ry-radio>
</template>

<script setup lang="ts">
import { ref ,watch } from "vue";
const radio = ref("1");

</script>