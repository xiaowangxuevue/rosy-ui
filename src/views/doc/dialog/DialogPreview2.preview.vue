<preview>
    一句话打开Dialog
</preview>
<template>
  <ry-button theme="primary" @click="toggle">点击打开对话框</ry-button>
</template>
    
<script setup lang="ts">
import { openDialog } from "@/lib/dialog/openDialog.ts";
const toggle = () => {
  openDialog();
};
</script>