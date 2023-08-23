<template>
    <div class="rosy-select">
      <ry-input
        readonly
        v-model="modelLable"
        :suffix-icon="IosArrowDown"
        :disabled="disabled"
        :placeholder="placeholder"
        :clearable="clearable"
        @clear="handleClear"
      />
      <div class="rosy-select-dropdown">
        <div class="no-options" v-show="options.length === 0">无选项</div>
        <span

          class="rosy-select-option"
          :class="{
            'is-active': modelValue === item.value,
            'is-disabled': item.disabled,
          }"
          v-for="item in options"
          :key="item.value"
          @click="handleOptionClick(item)"
          >{{ item.label }}</span
        >
      </div>
    </div>
  </template>
  
<script setup lang="ts">
import { IosArrowDown } from "@vicons/ionicons4";
import { selectProps, selectEmits, useSelect } from "./index.ts";
const props = defineProps(selectProps);
const emits = defineEmits(selectEmits);
const { options, modelValue, disabled,placeholder,modelLable ,clearable} = useSelect(props, emits);

console.log(clearable,'1234')
const handleOptionClick = (item) => {
    if (!item.disabled) {
        emits("update:modelValue", item.value);
        emits("change", item.value);
    }
};

const handleClear = (e) => {
    console.log(250);
    
  emits("update:modelValue", "");
  emits("clear", "");
  emits("update:placeholder","请选择")
};

</script>
  
<script lang="ts">
export default {
    name: "RySelect",
};
</script>

<style lang="scss">
.rosy-select {
  width: 100%;
  position: relative;
  .rosy-select-dropdown {
    z-index: 10000;
    position: absolute;
    border-radius: 3px;
    padding: 0;
    top: 48px;
    width: 100%;
    opacity: 0;
    height: 0px;
    width: 100%;
    pointer-events: none;
    background-color: #fff;
    transition: all 250ms ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 6px -4px,
      rgba(0, 0, 0, 0.08) 0px 6px 16px 0px, rgba(0, 0, 0, 0.05) 0px 9px 28px 8px;
    overflow: auto;
    .no-options {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .rosy-select-option {
      z-index: 10000;
      display: inline-block;
      cursor: pointer;
      min-width: 100%;
      width: auto;
      height: 32px;
      padding: 0 10px;
      line-height: 32px;
      overflow: visible;
      background-color: #fff;
      &:hover,
      &.is-active {
        background-color: #f3f3f5;
        color: #25a561;
      }
      &.is-disabled {
        cursor: not-allowed;
        background-color: #fff;
        color: #c2cddd;
      }
    }
  }
  &:hover .rosy-select-dropdown {
    pointer-events: auto;
  }
  &:focus-within .rosy-select-dropdown {
    opacity: 1;
    height: 300px;
    width: 100%;
    pointer-events: auto;
  }
}
</style>