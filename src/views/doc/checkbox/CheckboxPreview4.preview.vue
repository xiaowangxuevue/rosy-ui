<preview>中间状态</preview>
<template>
    <ry-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange" label="全选">

    </ry-checkbox>

    <ry-checkbox-group
    @change="handleCheckedCitiesChange"
    v-model="checkedCities"
    size="large"
  >
    <ry-checkbox v-for="city in cities" :key="city" :label="city" />
  </ry-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from "vue";

const checkAll = ref(false)
const isIndeterminate = ref(true);
const checkedCities = ref(["长安", "洛阳"]);
const cities = ["长安", "洛阳", "南京", "北京"];

const handleCheckAllChange = (val: boolean) => {
  checkedCities.value = val ? [...cities] : [];
  isIndeterminate.value = false;
};


const handleCheckedCitiesChange = (value: string[]) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === cities.length;
  isIndeterminate.value = checkedCount > 0 && cities.length > checkedCount;
};

</script>