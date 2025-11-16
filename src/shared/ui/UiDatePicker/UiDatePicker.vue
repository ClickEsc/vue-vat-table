<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { convertDateToUnix, defaultDateFormat } from '../../utils';
import i18n from '../../lib/locale';

const t = i18n.global.t;

const props = withDefaults(
  defineProps<{
    value?: string | number | null,
    format?: string,
    isDisabled?: boolean
  }>(),
  {
    value: null,
    format: defaultDateFormat,
    isDisabled: false,
  },
);

const date = ref(null as string | number | null);

const setDate = (val: number) => {
  date.value = val;
}

watch(
  () => props.value,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      let newDate = newVal;
      if (newVal) {
        const unixDate = convertDateToUnix(newVal as string) as number | string;

        if (unixDate !== 'Invalid date') {
          newDate = unixDate;
        } else {
          newDate = null;
        }
      }

      date.value = newDate;
    }
  },
);

onMounted(() => {
  if (props.value) {
    date.value = convertDateToUnix(props.value as string) as string | number;
  }
})
</script>

<template>
  <n-date-picker
    v-model:value="date"
    :disabled="props.isDisabled"
    :format="props.format"
    clearable
    :placeholder="t('fields.chooseDate')"
    @update:value="setDate"
  />
</template>

<style scoped>
:deep(.n-input__placeholder) {
  font-size: 10.5px;
  font-style: italic;
}
</style>
