import { computed } from "vue";

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
  clearable:{
    type:Boolean,
    default:false,
  },
  placeholder: {
    type: String,
    default:'请选择'
  },
};

export const selectEmits = ['update:modelValue',"change","clear"];

export const useSelect = (props, emits) => {
  const options = computed(() => props.options);
  const disabled = computed(() => props.disabled)
  const clearable = computed(() => props.clearable)
  const placeholder = computed(() => props.placeholder);
  const modelValue = computed(() => props.modelValue);
  console.log(props.options.find((v) => v.value === props.modelValue));

  const modelLable = computed({
    get() {
      const item = props.options.find((v) => v.value === props.modelValue);
      return item ? item.label : "";
    },
    set() {},
  });
  return {
    options,
    modelValue,
    modelLable,
    disabled,
    clearable,
    placeholder,
  };
};