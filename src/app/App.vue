<script setup lang="ts">
import { NConfigProvider, type GlobalThemeOverrides } from 'naive-ui';

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#FF8C00'
  }
}
import { VatTable } from '../features';
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <VatTable />
  </n-config-provider>
</template>
