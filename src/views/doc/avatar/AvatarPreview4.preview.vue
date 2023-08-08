<preview>图片加载失败的回滚行为</preview>
<template>
  <ry-avatar src="empty" size="large" @error="handleError">
    <img src="/src/assets/image/avatar.jpeg" alt="" />
  </ry-avatar>
</template>
<script setup lang="ts">
const handleError = () => {
  console.log("图片加载失败");
};
</script>