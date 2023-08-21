<template>
  <div class="rosy-divider" 
   :class="{
      horizontal: direction === 'horizontal',
      vertical: direction === 'vertical',
    }" 
    >
    <div class="rosy-divider-line horizontal" v-if="direction === 'horizontal'" > </div>

    <div class="rosy-divider-title" v-if="direction === 'horizontal'" :class="classes">
      <slot></slot>
    </div>


    <div class="rosy-divider-line vertical" v-if="direction === 'vertical'" />
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
    },
    vertical: {
    type: Boolean,
    default: false,
  },
})



console.log(props.titlePlacement,'12');


const classes = computed(() => ({
  "is-left": props.titlePlacement === "left",
  "is-right": props.titlePlacement === "right",
  "is-center": props.titlePlacement === "center",
  "is-vertical":props.direction === 'vertical'
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
  display: flex;
  box-sizing: border-box;
  font-size: 16px;
  color: rgb(31, 34, 37);
  &.horizontal {
    margin: 24px 0;
    position: relative;
    width: 100%;
  }
  .rosy-divider-line {
    background-color: rgb(239, 239, 245);
    &.horizontal {
      height: 1px;
      width: 100%;
      position: absolute;
      border: none;
    }
    &.vertical {
      display: inline-block;
      width: 1px;
      height: 1em;
      margin: 0 8px;
      vertical-align: middle;
      position: relative;
    }
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