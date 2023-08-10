<template>
    <div class="rosy-ellipsis" @click="toggle" :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import {ref ,computed ,watch , reactive } from "vue";
const props  = defineProps({
    lineClamp: {
        type: Number,
    },
    expandTrigger: String,
});
const {lineClamp,expandTrigger} = props;

const classes = computed(() => ({
  ["rosy-ellipsis-line-clamp"]: lineClamp,
  ["rosy-ellipsis-expand-trigger"]: expandTrigger,
}));

let styles = reactive({});
const isExpand = ref(false);
styles["-webkit-line-clamp"] = lineClamp;

watch(
  () => isExpand.value,
  () => {
    styles["-webkit-line-clamp"] = !isExpand.value ? lineClamp : "";
  }
);

const toggle = () => {
  if (expandTrigger === "click") {
    isExpand.value = !isExpand.value;
  }
};



</script>
<script lang="ts">
export default {
  name: "RyEllipsis",
};
</script>
<style lang="scss">
.rosy-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  &:not(.rosy-ellipsis-line-clamp) {
    white-space: nowrap;
    display: inline-block;
    text-overflow: ellipsis;
  }
  &.rosy-ellipsis-line-clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  &.rosy-ellipsis-expand-trigger {
    cursor: pointer;
  }
}
</style>