<template>
    <h1>Switch 示例</h1>
    <Demo :component="SwitchDemo1" />
    <Demo :component="SwitchDemo2" />
    <Demo :component="SwitchDemo3" />
  </template>
  
  <script setup lang="ts">
  import Demo from "@/components/Demo.vue";
  import SwitchDemo1 from "@/view/doc/switch/SwitchDemo1.demo.vue";
  import SwitchDemo2 from "@/view/doc/switch/SwitchDemo2.demo.vue";
  import SwitchDemo3 from "@/view/doc/switch/SwitchDemo3.demo.vue";
  </script>
  
  <style lang="scss">
  .rosy-switch + .rosy-switch {
    margin-left: 8px;
    margin-top: 8px;
  }
  </style>