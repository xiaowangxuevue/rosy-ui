<template>
    <slot />
  </template>
  
  <script setup lang="ts">
  defineProps({
    title: String,
  });
  </script>
  <script lang="ts">
  export default {
    name: "RyTab",
  };
  </script>
  <style></style>