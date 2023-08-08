<template>
  <div class="avatar-doc-wrapper">
    <h1>Avatar示例</h1>
    <Preview :component="AvatarPreview1" />
    <Preview :component="AvatarPreview2" />
    <Preview :component="AvatarPreview3" />
    <Preview :component="AvatarPreview4" />
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import AvatarPreview1 from "./AvatarPreview1.preview.vue";
import AvatarPreview2 from "./AvatarPreview2.preview.vue";
import AvatarPreview3 from "./AvatarPreview3.preview.vue";
import AvatarPreview4 from "./AvatarPreview4.preview.vue";
</script>

<style lang="scss">
.avatar-doc-wrapper {
  .rosy-avatar + .rosy-avatar {
    margin-left: 8px;
    margin-top: 8px;
  }
}
</style>