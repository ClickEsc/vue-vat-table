<script setup lang="ts">
import { dateRuRU, NConfigProvider, type GlobalThemeOverrides } from 'naive-ui';
import ruRu from 'naive-ui/es/locales/common/ruRU';
import { VatTable } from '../features';

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#FF8C00'
  }
}
</script>

<template>
  <n-config-provider
    :theme-overrides="themeOverrides"
    :locale="ruRu"
    :date-locale="dateRuRU"
  >
    <VatTable />
  </n-config-provider>
</template>
