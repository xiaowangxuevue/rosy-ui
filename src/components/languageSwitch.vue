<!-- <template>
    <button @click="toggleLanguage">{{ buttonText }}</button>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  const { locale } = useI18n();
  const buttonText = computed(() => {
    return locale.value === 'en' ? '中文' : 'English';
  });
  
  const toggleLanguage = () => {
    const newLocale = locale.value === 'en' ? 'zh' : 'en';
    // 设置新的语言
    locale.value = newLocale;
  };
  </script>
   -->