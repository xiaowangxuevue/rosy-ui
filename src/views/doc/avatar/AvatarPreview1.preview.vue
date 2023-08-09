<preview>尺寸</preview>
<template>
  <ry-avatar :src="imgUrl" size="small" />
  <ry-avatar :src="imgUrl" size="default" />
  <ry-avatar :src="imgUrl" size="large" />
  <ry-avatar :src="imgUrl" :size="100" />
</template>

<script setup lang="ts">
import imgUrl from "/src/assets/image/avatar.jpeg";
</script>