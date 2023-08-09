<preview>图标</preview>
<template>
  <ry-button theme="primary" icon-placement="right">
    <template #icon>
      <ry-icon size="20">
        <VehicleBicycle24Filled />
      </ry-icon>
    </template>
    默认按钮
  </ry-button>
  <ry-button theme="primary" >
    <template #icon>
      <ry-icon size="20">
        <VehicleBicycle24Filled />
      </ry-icon>
    </template>
    默认按钮
  </ry-button>
</template>
<script setup lanng="scss">
import { VehicleBicycle24Filled } from "@vicons/fluent";
</script>