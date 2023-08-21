<preview>密码框</preview>
<template>
    <ry-input show-password placeholder="请输入内容"  v-model="Value" />
</template>

<script setup lang="ts">
import { ref } from "vue";
const Value = ref('hello')
</script>