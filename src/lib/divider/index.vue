<template>
  <div class="rosy-divider">
    <div class="rosy-divider-line"></div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const props = defineProps({
    titlePlacement:{
        type:String,
        default:'left'
    },
    direction:{
        type:String,
        default:'horizontal'
    }
})
</script>

<script lang="ts">
export default {
    name:'RyDivider'
}
</script>

<style lang="scss">
.rosy-divider {
  margin: 24px 0;
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  color: rgb(31, 34, 37);
  .rosy-divider-line {
    background-color: rgb(239, 239, 245);
    height: 1px;
    border: none;
    width: 100%;
  }
}

</style>