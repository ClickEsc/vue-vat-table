<script lang="ts" setup>
import i18n from '../../lib/locale';

const t = i18n.global.t;

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
    :placeholder="t('fields.insertValue')"
  />
</template>

<style scoped>
:deep(.n-button__icon) {
  display: none;
}
:deep(.n-input__placeholder) {
  font-size: 10.5px;
  font-style: italic;
}
</style>