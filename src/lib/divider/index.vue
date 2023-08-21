<template>
  <div class="rosy-divider">
    <div class="rosy-divider-line"></div>

    <div class="rosy-divider-title" :class="classes">
      <slot></slot>
    </div>
  </div>


</template>

<script setup lang="ts">
import {computed} from 'vue'

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



console.log(props.titlePlacement,'12');


const classes = computed(() => ({
  "is-left": props.titlePlacement === "left",
  "is-right": props.titlePlacement === "right",
  "is-center": props.titlePlacement === "center",
}));
// console.log(classes,'...........');


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
    position: absolute;
  }
  .rosy-divider-title {
    position: absolute;
    top: 0;
    font-size: 16px;
    font-weight: 500;
    transform: translateY(-50%);
    background-color: #fff;
    padding: 0 20px;
    &.is-left {
      left: 20px;
    }
    &.is-right {
      right: 20px;
    }
    &.is-center {
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }
}
</style>