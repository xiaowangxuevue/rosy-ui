<template>
    <Icon class="rosy-icon" :size="size" :style="{ opacity: `${depth / 10}` }">
      <slot></slot>
    </Icon>
  </template>
  
  <script setup lang="ts">
  import { useAttrs } from "vue";
  import { Icon } from "@vicons/utils";
  defineProps({
    depth: Number,
    size: {
      type: [Number, String],
      default: "40px",
    },
  });
  const attrs = useAttrs();
  </script>
  <script lang="ts">
  export default {
    name: "RyIcon",
  };
  </script>
<style lang="scss">
.rosy-icon {
  display: inline-block;
  > span {
    display: inline-block;
  }
}
</style>