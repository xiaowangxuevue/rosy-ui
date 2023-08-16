<template>
    <label class="rosy-checkbox" tabindex="0" :class="classes" @click="handleChange">
        <span class="rosy-checkbox-input" :class="classes"> </span>
        <ry-icon :color="iconColor" :size="iconSize">
        <Check />
      </ry-icon>
        <span class="rosy-checkox-label" :class="classes">
            <slot>{{ label }}</slot>
        </span>
    </label>
</template>
  
<script setup lang="ts">
import { Check } from "@vicons/fa";
import { checkboxProps, checkboxEmits, useCheckbox } from "./checkbox";
const props = defineProps(checkboxProps);
const emits = defineEmits(checkboxEmits);

const { modelValue, label, classes, iconSize, disabled, iconColor,isGroup } = useCheckbox(
  props,
  emits
);

const handleChange = () => {
  if (!disabled.value) {
    if (isGroup.value) {
      const index = modelValue.value.indexOf(label.value);
      if (index > -1) {
        modelValue.value.splice(index, 1);
      } else {
        modelValue.value.push(label.value);
      }
      modelValue.value = [...modelValue.value];
    } else {
      modelValue.value = !modelValue.value;
    }
  }
}

console.log(classes,'1');


</script>
  
<script lang="ts">
export default {
    name: "RyCheckbox",
};
</script>
<style lang="scss">
$primary-color: #6366F1;
$large-size: 16px;
$default-size: 14px;
$small-size: 12px;
$large-height: 40px;
$default-height: 32px;
$small-height: 24px;
.rosy-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  height: $default-height;
  &.is-disabled {
    cursor: not-allowed;
  }
  &.rosy-large-size {
    height: $large-height;
  }
  &.rosy-small-size {
    height: $small-height;
  }
  &:not(.is-disabled):hover .rosy-checkbox-input {
    border: 1px solid #18a058;
  }
  &:not(.is-disabled):focus .rosy-checkbox-input {
    box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.3);
    border: 1px solid #18a058;
  }
  > .rosy-checkbox-input {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: $default-size;
    height: $default-size;
    border-radius: 2px;
    background-color: #fff;
    border: 1px solid rgb(224, 224, 230);
    &.is-checked {
      background-color: $primary-color;
      box-shadow: 0 0 0 2px rgba(55, 48, 181, 0.3);
      border: 1px solid #6d6fd1;
      transition: all 0.3s ease-in-out;
    }
    &.rosy-checkbox-large {
      width: $large-size;
      height: $large-size;
    }
    &.rosy-checkbox-small {
      width: $small-size;
      height: $small-size;
    }
    &.is-disabled {
      border: 1px solid rgb(224, 224, 230);
      box-shadow: none;
      background: #fff;
    }
  }
  > .rosy-checkbox-label {
    padding: 0 10px;
    user-select: none;
    color: rgb(51, 54, 57);
    font-size: $default-size;
    &.rosy-checkbox-large {
      font-size: $large-size;
    }
    &.rosy-checkbox-small {
      font-size: $small-size;
    }
    &.is-disabled {
      color: #c2c2c2ff;
    }
  }
}
</style>