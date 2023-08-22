import { computed, ref } from "vue";

export const selectProps = {
  modelValue: {
    type: [String, Number, Boolean, Object],
  },
  options: {
    type: Array,
    default: () => [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "请选择",
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
};