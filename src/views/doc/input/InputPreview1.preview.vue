<preview>基础使用</preview>
<template>
    <ry-input placeholder="请输入内容"  v-model="Value"/>
</template>

<script setup lang="ts">
import { ref } from "vue";
const Value = ref('hello')
</script>