<template>
    <div class="rosy-radio" @click="handleChange" :class="classes">
      <span class="rosy-radio-input" :class="classes"></span>
      <span class="rosy-radio-label">
        <slot>{{ label }}</slot>
      </span>
    </div>
  </template>

<script setup lang="ts">
import { useRadio, radioProps, radioEmits } from "./radio";
const props = defineProps(radioProps);
const emits = defineEmits(radioEmits);
const { modelValue, label, size, disabled, classes } = useRadio(props, emits);
const handleChange = () => {
  if (!disabled.value) {
    modelValue.value = props.label;
  }
};
</script>
<script lang="ts">
export default {
  name: "RyRadio",
};
</script>
<style lang="scss">
$checked-color: #36ad6a;
$default-size: 16px;
$default-inner-size: 10px;
$large-size: 20px;
$large-inner-size: 12px;
$small-size: 12px;
$small-inner-size: 7px;
.rosy-radio {
  cursor: pointer;
  margin-right: 32px;
  display: inline-flex;
  align-items: center;
  height: calc($default-size * 2.5);
  position: relative;
  &.is-bordered {
    border: 1px solid #c2c2c2;
    border-radius: 4px;
    padding: 0 14px;
    &.is-checked:not(.is-disabled) {
      color: $checked-color;
      border: 1px solid $checked-color;
    }
  }
  &.rosy-radio-small {
    height: calc($small-size * 2.5);
    &.is-bordered:not(.is-disabled) {
      padding: 0 10px;
    }
  }
  &.rosy-radio-large {
    height: calc($large-size * 2.5);
    &.is-bordered:not(.is-disabled) {
      padding: 0 18px;
    }
  }
  &.is-disabled {
    cursor: not-allowed;
    color: #c2c2c2;
  }
  > .rosy-radio-input {
    width: $default-size;
    height: $default-size;
    display: inline-flex;
    box-shadow: #e0e0e6 0px 0px 0px 1px;
    border-radius: 100%;
    position: relative;
    &.rosy-radio-small {
      height: $small-size;
      width: $small-size;
      &:before {
        left: calc($small-size / 2 - $small-inner-size / 2);
        top: calc($small-size / 2 - $small-inner-size / 2);
        width: $small-inner-size;
        height: $small-inner-size;
      }
    }
    &.rosy-radio-large {
      height: $large-size;
      width: $large-size;
      &:before {
        left: calc($large-size / 2 - $large-inner-size / 2);
        top: calc($large-size / 2 - $large-inner-size / 2);
        width: $large-inner-size;
        height: $large-inner-size;
      }
    }
    &.is-checked {
      box-shadow: $checked-color 0px 0px 0px 1px;
      &:before {
        opacity: 1;
        transform: scale(1);
      }
    }
    &:before {
      content: " ";
      opacity: 0;
      position: absolute;
      left: calc($default-size / 2 - $default-inner-size / 2);
      top: calc($default-size / 2 - $default-inner-size / 2);
      width: $default-inner-size;
      height: $default-inner-size;
      background-color: $checked-color;
      border-radius: 50%;
      transform: scale(0.8);
      transition: opacity 300ms ease-in-out, background-color 300ms ease-in-out,
        transform 300ms ease-in-out;
    }
    &.is-disabled {
      background-color: #fafafc;
      box-shadow: #e0e0e6 0px 0px 0px 1px;
      &:before {
        background-color: #c0c4cc;
      }
    }
    &:not(.is-disabled):hover {
      box-shadow: $checked-color 0px 0px 0px 1px;
    }
  }
  > .rosy-radio-label {
    padding-left: 8px;
  }
}
</style>