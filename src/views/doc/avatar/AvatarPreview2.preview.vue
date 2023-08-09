<preview>形状</preview>
<template>
  <ry-avatar :src="imgUrl" shape="square" size="small" />
  <ry-avatar :src="imgUrl" shape="square" size="default" />
  <ry-avatar :src="imgUrl" shape="square" size="large" />
  <ry-avatar :src="imgUrl" shape="square" :size="100" />
</template>

<script setup lang="ts">
import imgUrl from "/src/assets/image/avatar.jpeg";
</script>