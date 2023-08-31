<template>
    <button @click="toggleLanguage">{{ buttonText }}</button>
  </template>
  
  <script setup lang="ts">
  import { ref, computed,inject } from 'vue';

  
const i18n = inject('i18n');

  const buttonText = computed(() => {
    return i18n.global.locale === 'en' ? '中文' : 'English';
  });
  
  const toggleLanguage = () => {
    const newLocale = i18n.global.locale === 'en' ? 'zh' : 'en';
    // 设置新的语言
    i18n.global.locale = newLocale;
  };
  </script>
  