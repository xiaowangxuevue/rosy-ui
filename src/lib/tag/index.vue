<template>
    <div class="rosy-tag" :class="classes" :style="style">
        <slot />
        <ry-icon :size="18" v-if="closeable" @click="handleClose">
            <Close />
        </ry-icon>
    </div>
</template>
  
<script setup lang="ts">
import { Close } from "@vicons/ionicons5";
import { computed } from "vue";
const props = defineProps({
    type: {
        type: String,
    },
    size: {
        type: String,
    },
    closeable: {
        type: Boolean,
        default: false
    },
    color: {
        type: Object,
        default: undefined,
    },
});
const emits = defineEmits(["close"])
const classes = computed(() => ({
    [`is-${props.type}`]: props.type,
    [`is-${props.size}`]: props.size,
    [`is-closeable`]: props.closeable,

}));
const handleClose = () => {
    console.log(123);
    
  emits("close");
};

const style = computed(() => {
    return props.color
        ?
        {
            color: props.color.color,
            backgroundColor: props.color.backgroundColor,
            borderColor: props.color.borderColor,
        } : ""
})
</script>
<script lang="ts">
export default {
    name: "RyTag",
};
</script>
<style lang="scss">
.rosy-tag {
    white-space: nowrap;
    position: relative;
    box-sizing: border-box;
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex-wrap: nowrap;
    padding: 0 7px;
    height: 28px;
    margin-left: 7px;
    font-size: 14px;
    line-height: 1;
    border-radius: 2px;
    border: 1px solid rgb(239, 239, 245);
    background-color: rgb(250, 250, 252);
    color: rgb(51, 54, 57);

    &.is-success {
        color: rgb(24, 160, 88);
        background-color: rgba(24, 160, 88, 0.1);
        border: 1px solid rgb(168, 219, 193);
    }

    &.is-success {
        color: rgb(24, 160, 88);
        background-color: rgba(24, 160, 88, 0.1);
        border: 1px solid rgb(168, 219, 193);
    }

    &.is-warning {
        color: rgb(240, 160, 32);
        background-color: rgba(240, 160, 32, 0.12);
        border: 1px solid rgb(249, 214, 159);
    }

    &.is-info {
        color: rgb(32, 128, 240);
        background-color: rgba(32, 128, 240, 0.1);
        border: 1px solid rgb(172, 208, 249);
    }

    &.is-error {
        color: rgb(208, 48, 80);
        background-color: rgba(208, 48, 80, 0.08);
        border: 1px solid rgb(241, 195, 204);
    }

    &.is-small {
        font-size: 12px;
        line-height: 12px;
        height: 22px;
    }

    &.is-large {
        height: 34px;
        font-size: 16px;
        line-height: 16px;
    }

    .ry-icon {
        cursor: pointer;
    }

    &.is-closeable {
        padding-right: 3x;
    }
}
</style>