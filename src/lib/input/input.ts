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
  prefixIcon: {
    type: [String, Object],
  },
  suffixIcon: {
    type: [String,Object],
  }
}

console.log(inputProps.type, '231');


export const inputEmit = ["update:modelValue", "input"];

export const useInput = (props, emits) => {
  const disabled = computed(() => props.disabled);
  const classes = computed(() => ({
    "is-disabled": disabled.value,
    "is-clearable": clearable.value,
    "show-password": showPassword.value,
  }));
  const clearable = computed(() => props.clearable);
  console.log(classes);
  const showPassword = computed(() => props.showPassword);
  const passwordVisible = ref(false);
  const type = computed(() => {
    return showPassword.value
      ? passwordVisible.value ? "text" : "password" : props.type;
  })
  console.log(type.value, '...');

  return {
    disabled,
    classes,
    clearable,
    showPassword,
    type,
    passwordVisible,
    suffixIcon: props.suffixIcon,
    prefixIcon: props.prefixIcon,

  };
};