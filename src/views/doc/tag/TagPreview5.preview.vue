<preview>动态编辑标签</preview>
<template>
   <ry-tag    v-for="tag in dynamicTags"
    :key="tag"
    closeable
    type="success"
    @close="handleClose(tag)"
  >
    {{ tag }}</ry-tag>
    <ry-input
    v-if="inputVisible"
    :ref="(e) => (InputRef = e)"
    v-model="inputValue"
    @keyup.enter="handleInputConfirm"
    @blur="handleInputConfirm"
    size="small"
    style="width: 180px"
  />
    <ry-button v-else size="small" @click="showInput"> + New Tag </ry-button>
</template>

<script setup lang="ts">
import {ref, nextTick, onMounted} from 'vue'

const dynamicTags = ref(["Tag 1", "Tag 2", "Tag 3"]);
const inputVisible = ref(false);
const inputValue = ref("");
const InputRef = ref();


const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};

const handleInputConfirm = () => {
    console.log('123');
    
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value);
  }
  inputVisible.value = false;
  inputValue.value = "";
};

const showInput = () => {
  inputVisible.value = true;
  nextTick(() => {
    console.log(InputRef.value!.focus());
  });
};

</script>