<preview>基础用法</preview>
<template>
  <ry-select style="width: 200px" :options="options" v-model="value" />
</template>

<script setup lang="ts">
import { ref } from "vue";
const value = ref("1");
const options = [
  {
    label: "成长会回答梦想",
    value: "1",
  },
  {
    label: "时间会回答成长",
    value: "2",
  },
  {
    label: "梦想会回答生活",
    value: "3",
  },
  {
    label: "生活回答你我的模样",
    value: "4",
  },
  {
    label: "海洋会回答江湖",
    value: "5",
  },
  {
    label: "江湖会回答河流",
    value: "6",
  },
  {
    label: "河流会回答浪潮",
    value: "7",
  },
  {
    label: "一起跃入人海",
    value: "8",
  },
  {
    label: "做一朵奔涌的浪花",
    value: "9",
  },
  {
    label: "。。。",
    value: "10",
  },
];</script>