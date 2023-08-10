<preview>图标</preview>
<template>
  <ry-link :icon="EditTwotone">
    Edit
  </ry-link>
  <ry-link :icon="CheckSquareOutlined" icon-placement="right"> Check </ry-link>
</template>
<script setup lang="ts">
import { EditTwotone, CheckSquareOutlined } from "@vicons/antd";
</script>