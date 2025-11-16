<script setup lang="ts">
import { dateRuRU, NConfigProvider, type GlobalThemeOverrides } from 'naive-ui';
import ruRu from 'naive-ui/es/locales/common/ruRU';
import { VatTable } from '../features';

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#5181e4'
  },
  DataTable: {
    thColor: '#1f6ed58c',
    thTextColor: '#ffffff',
    thColorHover: '#0038a154',
    thColorSorting: '#0038a154'
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
