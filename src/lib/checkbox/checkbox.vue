<template>
    <label class="rosy-checkbox">
        <span class="rosy-checkbox-input"> </span>
        <span class="rosy-checkox-label">
            <slot>选项 A</slot>
        </span>
    </label>
</template>
  
<script setup lang="ts"></script>
  
<script lang="ts">
export default {
    name: "RyCheckbox",
};
</script>
  
<style scoped></style>