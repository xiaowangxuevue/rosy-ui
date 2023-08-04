<template>
  <div class="rosy-tabs" :class="classes">
    <div class="rosy-tabs-header" ref="container">
      <div
        class="rosy-tabs-header-item"
        :class="{ 'is-active': modelValue === title }"
        v-for="(title, index) in titles"
        :key="index"
        @click="handleTabsItemClick(title)"
        :ref="getHeaderItemRef(title)"
      >
        {{ title }}
      </div>
      <div
        class="rosy-tabs-header-indicator"
        v-if="type === 'line'"
        ref="indicator"
      ></div>
    </div>
    <div class="rosy-tabs-content">
      <component
        v-if="current"
        :is="current"
        :key="current.props.title"
      ></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots, computed, ref, onMounted, watchEffect, Ref } from "vue";

import RyTab from "../tab/index.vue";

const props = defineProps({
  modelValue: {
    type: String,
  },
  type: {
    type: String,
    default: "line",
  },
});
console.log(props.type, "props");
const solts = useSlots().default?.();

const emits = defineEmits(["update:modelValue"]);

// console.log(solts,'solts');

solts?.forEach((tag) => {
  // @ts-ignore
  if (tag.type.name !== RyTab.name) {
    throw new Error("RyTabs子标签必须是RyTab");
  }
});

const selectedItem: Ref<Nullable> = ref(null);
const indicator = ref<HTMLDivElement>(null);
const container = ref<HTMLDivElement>(null);

onMounted(() => {
  watchEffect(() => {
    renderIndicator();
  });
});

const renderIndicator = () => {
  if (selectedItem.value && props.type === "line") {
    const { width } = selectedItem.value.getBoundingClientRect();
    indicator.value.style.width = width + "px";
    const { left: left1 } = container.value.getBoundingClientRect();
    const { left: left2 } = selectedItem.value.getBoundingClientRect();
    const left = left2 - left1;

    indicator.value.style.left = left + "px";
  }
};

const titles = solts.map((tag) => tag.props?.title);

const current = computed(() => {
  return solts.find((tag) => tag.props?.title === props.modelValue);
});
console.log(current,'current');


const { type } = props;
const classes = computed(() => {
  return {
    [`rosy-tabs-${type}`]: type,
  };
});

const handleTabsItemClick = (title: string) => {
  emits("update:modelValue", title);
};

const getHeaderItemRef = (title) => {
  return (e) => {
    if (title === props.modelValue) selectedItem.value = e;
  };
};
</script>

<script lang="ts">
export default {
  name: "RyTabs",
};
</script>

<style lang="scss">
$active-color: #36ad6a;
$color: #333;
$border-color: #d9d9d9;
$card-background: #f7f7fa;
$white: #fff;
$radius: 3px;
$h: 40px;
.rosy-tabs.rosy-tabs-line {
  .rosy-tabs-header {
    display: flex;
    border-bottom: 1px solid $border-color;
    color: $color;
    position: relative;
    height: $h;
    &-item {
      margin: 0 16px;
      height: $h;
      line-height: $h;
      font-size: 14px;
      cursor: pointer;
      white-space: nowrap;
      &.is-active,
      &:hover {
        color: $active-color;
      }
    }
    &-item:first-of-type {
      padding-left: 0;
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $active-color;
      left: 0;
      bottom: -1px;
      transition: all 250ms;
    }
  }
}
.rosy-tabs.rosy-tabs-card {
  .rosy-tabs-header {
    display: flex;
    background-color: $card-background;
    border-radius: $radius;
    $color: #333;
    align-items: center;
    height: $h;
    padding: 3px;
    &-item {
      flex-basis: 0;
      flex-grow: 1;
      flex-wrap: nowrap;
      white-space: nowrap;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: $radius;
      height: 100%;
      font-size: 14px;
      cursor: pointer;
      transition: all 250ms ease;
      &.is-active {
        background-color: $white;
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 8%);
      }
    }
  }
}
.rosy-tabs-content {
  padding: 8px 0;
}
</style>