<preview>基础用法</preview>
<template>
    桀桀
    <ry-divider :titlePlacement="value1"  >left</ry-divider>
    哈哈
    <ry-divider :titlePlacement="value2"  >content</ry-divider>
    啧啧
    <ry-divider :titlePlacement="value3"  >right</ry-divider>
    w(ﾟДﾟ)w
  </template>
<script setup lang="ts">
import {ref} from 'vue'
const value1 = ref('left')
const value2 = ref('center')
const value3 = ref('right')


</script>