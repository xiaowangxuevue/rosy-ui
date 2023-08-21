<preview>文本库</preview>
<template>
    <ry-input  placeholder="请输入内容213"  v-model="Value" type="textarea" />
</template>

<script setup lang="ts">
import { ref } from "vue";
const Value = ref('hello')

</script>