<template>
  <button class="rosy-button" :class="classes">
    <span v-if="loading" class="rosy-loadingIndicator"></span>
    <slot name="icon"></slot>
    <slot>{{ theme }}</slot>
  </button>
</template>
  
  
  
  
<script setup lang="ts">
import { computed, useAttrs } from "vue";
const props = defineProps({
  theme: {
    type: String,
    default: "default",
  },
  dashed: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "default",
  },
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
const { theme,circle, dashed, size, round, disabled } = props;
const classes = computed(() => {
  return {
    [`rosy-theme-${theme}`]: theme,
    [`rosy-theme-dashed`]: dashed,
    [`rosy-size-${size}`]: size,
    [`is-round`]: round,
    [`is-circle`]: circle,
    [`is-disabled`]: disabled,
  };
});
</script>

<script lang="ts">
export default {
  name: "RyButton",
};
</script>

<style lang="scss" scoped>
$h-default: 32px;
$h-small: 20px;
$h-large: 48px;
$white: #fff;
$default-color: #333;
$primary-color: #36ad6a;
$info-color: #4098fc;
$success-color: #85ce61;
$warning-color: #f0a020;
$error-color: #d03050;
$grey: grey;
$default-border-color: #d9d9d9;
$radius: 3px;
$green: #18a058;
.rosy-button {
  box-sizing: border-box;
  height: $h-default;
  background-color: #fff;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: all 250ms;
  color: $default-color;
  border: 1px solid $default-border-color;
  user-select: none;
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.is-circle.rosy-button-default {
    border-radius: 100%;
    height: $h-default;
    width: $h-default;
  }
  &.is-circle.rosy-button-small {
    border-radius: 100%;
    height: $h-small;
    width: $h-small;
  }
  &.is-circle.rosy-button-large {
    border-radius: 100%;
    height: $h-large;
    width: $h-large;
  }
  &.rosy-size-large {
    font-size: 24px;
    height: $h-large;
    padding: 0 16px;
  }
  &.rosy-size-small {
    font-size: 12px;
    height: $h-small;
    padding: 0 8px;
  }
  &.is-round.rosy-size-default {
    border-radius: calc($h-default / 2);
  }
  &.is-round.rosy-size-large {
    border-radius: calc($h-large / 2);
  }
  &.is-round.rosy-size-small {
    border-radius: calc($h-small / 2);
  }
  &.rosy-theme-default {
    &:hover {
      color: $green;
      border-color: $green;
      > .rosy-loadingIndicator {
        border-style: dashed;
        border-color: $green $green $green transparent;
      }
    }
    &:active {
      color: darken($green, 20%);
      border-color: darken($green, 20%);
      > .rosy-loadingIndicator {
        border-style: dashed;
        border-color: darken($green, 20%) darken($green, 20%)
          darken($green, 20%) transparent;
      }
    }
    &.rosy-theme-dashed {
      border-style: dashed;
    }
    > .rosy-loadingIndicator {
      border-style: dashed;
      border-color: $default-color $default-color $default-color transparent;
    }
  }
  &.rosy-theme-primary {
    background-color: $primary-color;
    border-color: $primary-color;
    color: $white;
    &:hover {
      background: lighten($primary-color, 20%);
      border-color: lighten($primary-color, 20%);
    }
    &:active {
      background-color: darken($primary-color, 20%);
      border-color: darken($primary-color, 20%);
    }
    &.is-disabled {
      cursor: not-allowed;
      background: lighten($primary-color, 20%);
      border-color: lighten($primary-color, 20%);
      &:hover {
        background: lighten($primary-color, 20%);
        border-color: lighten($primary-color, 20%);
      }
    }
    &.rosy-theme-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $primary-color;
      > .rosy-loadingIndicator {
        border-style: dashed;
        border-color: $primary-color $primary-color $primary-color transparent;
      }
    }
  }
  &.rosy-theme-info {
    background-color: $info-color;
    border-color: $info-color;
    color: $white;
    &:hover {
      background: lighten($info-color, 20%);
      border-color: lighten($info-color, 20%);
    }
    &:active {
      background-color: darken($info-color, 20%);
      border-color: darken($info-color, 20%);
    }
    &.is-disabled {
      cursor: not-allowed;
      background: lighten($info-color, 20%);
      border-color: lighten($info-color, 20%);
      &:hover {
        background: lighten($info-color, 20%);
        border-color: lighten($info-color, 20%);
      }
    }
    &.rosy-theme-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $info-color;
      > .rosy-loadingIndicator {
        border-style: dashed;
        border-color: $info-color $info-color $info-color transparent;
      }
    }
  }
  &.rosy-theme-success {
    background-color: $success-color;
    border-color: $success-color;
    color: $white;
    &:hover {
      background: lighten($success-color, 20%);
      border-color: lighten($success-color, 20%);
    }
    &:active {
      background-color: darken($success-color, 20%);
      border-color: darken($success-color, 20%);
    }
    &.is-disabled {
      cursor: not-allowed;
      background: lighten($success-color, 20%);
      border-color: lighten($success-color, 20%);
      &:hover {
        background: lighten($success-color, 20%);
        border-color: lighten($success-color, 20%);
      }
    }
    &.rosy-theme-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $success-color;
      > .rosy-loadingIndicator {
        border-style: dashed;
        border-color: $success-color $success-color $success-color transparent;
      }
    }
  }
  &.rosy-theme-warning {
    background-color: $warning-color;
    border-color: $warning-color;
    color: $white;
    &:hover {
      background: lighten($warning-color, 20%);
      border-color: lighten($warning-color, 20%);
    }
    &:active {
      background-color: darken($warning-color, 20%);
      border-color: darken($warning-color, 20%);
    }
    &.is-disabled {
      cursor: not-allowed;
      background: lighten($warning-color, 20%);
      border-color: lighten($warning-color, 20%);
      &:hover {
        background: lighten($warning-color, 20%);
        border-color: lighten($warning-color, 20%);
      }
    }
    &.rosy-theme-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $warning-color;
      > .rosy-loadingIndicator {
        border-style: dashed;
        border-color: $warning-color $warning-color $warning-color transparent;
      }
    }
  }
  &.rosy-theme-error {
    background-color: $error-color;
    border-color: $error-color;
    color: $white;
    &:hover {
      background: lighten($error-color, 20%);
      border-color: lighten($error-color, 20%);
    }
    &:active {
      background-color: darken($error-color, 20%);
      border-color: darken($error-color, 20%);
    }
    &.is-disabled {
      cursor: not-allowed;
      background: lighten($error-color, 20%);
      border-color: lighten($error-color, 20%);
      &:hover {
        background: lighten($error-color, 20%);
        border-color: lighten($error-color, 20%);
      }
    }
    &.rosy-theme-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $error-color;
      > .rosy-loadingIndicator {
        border-style: dashed;
        border-color: $error-color $error-color $error-color transparent;
      }
    }
  }
  > .rosy-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $white $white $white transparent;
    border-style: solid;
    border-width: 2px;
    animation: rosy-spin 1s infinite linear;
  }
}
@keyframes rosy-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>