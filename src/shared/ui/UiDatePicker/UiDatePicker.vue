<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { convertDateToUnix, defaultDateFormat } from '../../utils';

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
const isDisabled = ref(false);
const format = ref(defaultDateFormat);

watch(
  () => props.value,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      let newDate = newVal;
      if (newVal) {
        const unixDate = convertDateToUnix(newVal as string, format.value) as number | string;

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

watch(
  () => props.isDisabled,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      isDisabled.value = props.isDisabled;
    }
  },
);

watch(
  () => props.format,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      format.value = props.format;
    }
  },
);

onMounted(() => {
  if (props.value) {
    date.value = convertDateToUnix(props.value as string) as string | number;
  }
  if (props.isDisabled) {
    isDisabled.value = props.isDisabled;
  }
})
</script>

<template>
  <n-date-picker
    v-model:value="date"
    :disabled="isDisabled"
    :format="format"
    clearable
  />
</template>