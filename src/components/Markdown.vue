<template>
    <article class="markdown-body" v-html="content"></article>
</template>

<script setup lang="ts">
const props = defineProps({
    content : {
        type:String,
        default:true
    },
});




</script>