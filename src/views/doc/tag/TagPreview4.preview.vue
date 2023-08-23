<preview>颜色</preview>
<template>
    <ry-tag :color="color1">爱在西元前</ry-tag>
    <ry-tag :color="color2">忽然之间</ry-tag>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const color1 = reactive({
    color: '#666',
    backgroundColor: '#000',
    borderColor: '#fff',
})

const color2 = reactive({
    color: '#66346d',
    backgroundColor: '#000',
    borderColor: '#fff',
})
</script>