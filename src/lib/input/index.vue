<template>
  <div :class="classes">
    <!-- input -->
    <template v-if="type !== 'textarea'">
      <input ref="input" :disabled="disabled" :type="type" class="rosy-input-inner" autocomplete="off"     @blur="handleBlur"
        @focus="handleFocus"
        :value="nativeInputValue" @input="handleChange" :placeholder="placeholder" />
      <!-- prefix slot -->
      <span class="rosy-input-prefix-icon">
        <ry-icon v-if="prefixIcon" class="prefix-icon" :size="18" color="#dcdfe6">
          <component :is="prefixIcon" />
        </ry-icon>
      </span>
      <!-- suffix slot -->
      <span class="rosy-input-suffix-icon">
        <ry-icon v-if="suffixIcon" class="suffix-icon" :size="18" color="#dcdfe6">
          <component :is="suffixIcon" />
        </ry-icon>
        <!-- clearable -->
        <div class="close-icon" v-if="clearable && nativeInputValue.length > 0" @click="hanldeClear">
          <ry-icon :size="18">
            <CloseCircleOutline />
          </ry-icon>
        </div>
        <!-- password -->
        <div class="password-icon" v-if="showPassword" @click="handlePasswordVisible">
          <ry-icon :size="18">
            <Eye />
          </ry-icon>
        </div>
      </span>
    </template>
    <!-- textarea -->
    <template v-else>
      <textarea ref="textarea" class="rosy-textarea-inner" autocomplete="off" :placeholder="placeholder" :value="nativeInputValue"       
      @blur="handleBlur"
        @focus="handleFocus"
        @input="handleChange" />
    </template>
  </div>
</template>
  
<script setup lang="ts">
import { computed,onMounted,ref,nextTick } from "vue";
import { inputEmit, inputProps, useInput } from "./input";
import { CloseCircleOutline } from "@vicons/ionicons5";
import { Eye } from "@vicons/fa";
type TargetElement = HTMLInputElement | HTMLTextAreaElement;
const props = defineProps(inputProps);
const emits = defineEmits(inputEmit);
const {
  disabled,
  classes,
  clearable,
  type,
  passwordVisible,
  placeholder,
  suffixIcon,
  prefixIcon,
} = useInput(props, emits);

const input = ref<HTMLInputElement>();
const textarea = ref<HTMLTextAreaElement>()
const inputOrTextarea = computed(() => input.value || textarea.value);
const nativeInputValue = computed(() =>
  props.modelValue === null || props.modelValue === undefined
    ? ""
    : String(props.modelValue)
);
const handleChange = (e: Event) => {
  const { value } = e.target as TargetElement;
  if (value === nativeInputValue.value) return;
  emits("update:modelValue", value);
  emits("input", value);
};
const hanldeClear = () => {
  emits("update:modelValue", "");
  emits("input", "");
  emits("clear", "");
};

const handleBlur = (e) => {
  emits("blur", e);
};
const handleFocus = (e) => {
  emits("focus", e);
};

const focus = () => {
  nextTick(() => {
    inputOrTextarea.value?.focus();
  });
};
const blur = () => {
  nextTick(() => {
    inputOrTextarea.value?.blur();
  });
};
const handlePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value;
};

defineExpose({
  input,
  inputOrTextarea,
  textarea,
  blur,
  focus,
});
</script>
<script lang="ts">
export default {
  name: "RyInput",
};
</script>
<style lang="scss">
$active-color: #18a058;

.rosy-input {
  width: 100%;
  cursor: pointer;
  position: relative;

  &.rosy-input-prefix .rosy-input-inner {
    padding-left: 30px;
  }

  &.rosy-input-suffix .rosy-input-inner {
    padding-right: 30px;
  }

  &-inner {
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    outline: none;
    padding: 0 15px;
    color: rgb(51, 54, 57);
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      border-color: #c0c4cc;
    }

    &:active,
    &:focus {
      outline: none;
      border-color: $active-color;
      box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.3);
    }

    &::placeholder {
      color: rgb(213, 215, 220);
      font-size: inherit;
    }
  }

  &.is-disabled {
    .rosy-input-inner {
      cursor: not-allowed;
      background-color: #fafafc;
      color: rgba(194, 194, 194, 1);

      &:hover,
      &:focus,
      &:active {
        border: 1px solid #dcdfe6;
        box-shadow: none;
      }
    }
  }

  .rosy-input-suffix-icon,
  .rosy-input-prefix-icon {
    position: absolute;
    bottom: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rosy-input-suffix-icon {
    right: 5px;
  }

  .rosy-input-prefix-icon {
    left: 5px;
  }

  .close-icon,
  .password-icon {
    display: none;
  }

  &:hover .close-icon,
  &:focus .close-icon,
  &:hover .password-icon,
  &:focus .password-icon,
  .suffix-icon {
    margin: 0 1px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .rosy-icon {
      color: #dcdfe6;

      &:hover {
        color: #c0c4cc;
      }
    }
  }

  .suffix-icon .rosy-icon:hover {
    color: #dcdfe6;
  }
}

.rosy-textarea {
  width: 100%;

  .rosy-textarea-inner {
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    color: #606266;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      border-color: #c0c4cc;
    }

    &:active,
    &:focus {
      outline: none;
      border-color: $active-color;
      box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.3);
    }

    &::placeholder {
      color: rgb(213, 215, 220);
      font-size: inherit;
    }
  }
}
</style>

  
  