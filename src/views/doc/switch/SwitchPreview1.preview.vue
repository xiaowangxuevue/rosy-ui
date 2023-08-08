<preview>
    基础用法
</preview>
<template>
  <ry-switch v-model="checked" />
  <ry-switch v-model="checked" disabled />
</template>
    
<script setup lang="ts">
import { ref } from "vue";
const checked = ref(false);
</script>