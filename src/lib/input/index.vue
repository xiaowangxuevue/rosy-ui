<template>
  <div class="rosy-input" :class="classes">
    <template v-if="type !== 'textarea'">
      <input :disabled="disabled" :type="type" class="rosy-input-inner" autocomplete="off" :value="nativeInputValue"
        @input="handleChange" :placeholder="placeholder" />
      <div class="circle-close" v-if="clearable && nativeInputValue.length > 0" @click="hanldeClear">
        <ry-icon :size="18">
          <CloseCircleOutline />
        </ry-icon>

      </div>
      <!-- 密码框 -->
      <div class="password-icon" v-if="showPassword" @click="handlePasswordVisible">
        <ry-icon :size="18">
          <Eye />
        </ry-icon>
      </div>
    </template>
    <template v-else>
      <textarea
        class="rosy-textarea-inner"
        autocomplete="off"
        rows="2"
        :placeholder="placeholder"
        :value="nativeInputValue"
        @input="handleChange"
      />
    </template>

  </div>
</template>
  
<script setup lang="ts">
import { CloseCircleOutline } from "@vicons/ionicons5";
import { Eye } from "@vicons/fa";
import { computed } from "vue";
import { inputEmit, inputProps, useInput } from "./input";
type TargetElement = HTMLInputElement | HTMLTextAreaElement;   //1,  dis 2,
const props = defineProps(inputProps);
const emits = defineEmits(inputEmit);
const { disabled, classes, clearable, type, passwordVisible } = useInput(props, emits);
console.log(type.value,'type123');

const nativeInputValue = computed(() =>
  props.modelValue === null || props.modelValue === undefined
    ? ""
    : String(props.modelValue)
)
const handleChange = (e: Event) => {
  console.log(e, 'e');

  const { value } = e.target as TargetElement;
  if (value === nativeInputValue.value) return;
  emits("update:modelValue", value);
  emits("input", value);
};
const hanldeClear = () => {
  emits("update:modelValue", "");
  emits("input", "");
};
const handlePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value;
};

</script>
<script lang="ts">
export default {
  name: "RyInput",
};
</script>

<style lang="scss">
$active-color: #18a058;

.rosy-input {
  width: 180px;
  cursor: pointer;
  position: relative;

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

  .circle-close,
  .password-icon {
    display: none;
  }

  &:hover .circle-close,
  &:focus .circle-close,
  &:active .circle-close,
  &:hover .password-icon,
  &:focus .password-icon,
  &:active .password-icon {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;

    .rosy-icon {
      color: #dcdfe6;

      &:hover {
        color: #c0c4cc;
      }
    }
  }
  
}
.rosy-textarea {
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


  
  