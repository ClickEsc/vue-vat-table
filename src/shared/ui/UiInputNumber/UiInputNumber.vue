<script lang="ts" setup>

const props = withDefaults(
  defineProps<{
    value?: number | null,
    min?: number,
    isDisabled?: boolean
  }>(),
  {
    value: null,
    min: 0,
    isDisabled: false,
  },
);
</script>

<template>
  <n-input-number
    v-model:value="props.value"
    :disabled="props.isDisabled"
    :min="props.min"
    clearable
  />
</template>

<style scoped>
:deep(.n-button__icon) {
  display: none;
}
</style>