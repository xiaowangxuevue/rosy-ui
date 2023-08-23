import { computed, ref } from "vue";
export const inputProps = {
  modelValue: {
    type: [Number, String],
  },
  placeholder: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "text",
  },
  suffixIcon: {
    type: [String, Object],
  },
  prefixIcon: {
    type: [String, Object],
  },
};
export const inputEmit = ["update:modelValue", "input","clear"];
export const useInput = (props, emits) => {
  const disabled = computed(() => props.disabled);
  const placeholder = computed(() => props.placeholder);
  const clearable = computed(() => props.clearable);
  const showPassword = computed(() => props.showPassword);
  const passwordVisible = ref(false);
  const type = computed(() => {
    return showPassword.value
      ? passwordVisible.value
        ? "text"
        : "password"
      : props.type;
  });
  const classes = computed(() => ({
    "is-disabled": disabled.value,
    "is-clearable": clearable.value,
    "show-password": showPassword.value,
    "rosy-input": type.value !== "textarea",
    "rosy-textarea": type.value === "textarea",
    "rosy-input-suffix":
      showPassword.value || clearable.value || props.suffixIcon,
    "rosy-input-prefix": props.prefixIcon,
  }));

  return {
    disabled,
    classes,
    clearable,
    showPassword,
    type,
    passwordVisible,
    placeholder,
    suffixIcon: props.suffixIcon,
    prefixIcon: props.prefixIcon,
  };
};