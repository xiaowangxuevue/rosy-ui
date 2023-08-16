<preview>多选框组</preview>
<template>
  <ry-checkbox-group v-model="checkList" size="large">
    <ry-checkbox label="选项A" />
    <ry-checkbox label="选项B" />
    <ry-checkbox label="选项C" />
  </ry-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from "vue";
const checkList = ref(["选项A"]);
</script>