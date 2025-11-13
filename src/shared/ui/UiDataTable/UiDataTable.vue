<script lang="ts" setup>

type paginationType = {
  pageSize: number;
}
const props = withDefaults(
  defineProps<{
    columns: any[],
    data: any[],
    pagination?: paginationType | false,
    maxHeight?: number
  }>(),
  {
    columns: () => [],
    data: () => [],
    pagination: () => {
      return {
        pageSize: 10
      }
    },
    maxHeight: 500
  },
);
</script>

<template>
  <n-data-table
    :columns="props.columns"
    :data="props.data"
    :pagination="props.pagination"
    :max-height="props.maxHeight"
  />
</template>