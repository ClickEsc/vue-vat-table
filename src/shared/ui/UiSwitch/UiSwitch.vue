<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';

const props = withDefaults(
  defineProps<{
    isActive?: boolean,
    isDisabled?: boolean
  }>(),
  {
    isActive: false,
    isDisabled: false,
  },
);

const isActive = ref(false);
const isDisabled = ref(false);

const toggleActive = () => {
  isActive.value = !isActive.value;
}

watch(
  () => props.isActive,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      isActive.value = props.isActive;
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

onMounted(() => {
  if (props.isActive) {
    isActive.value = props.isActive;
  }
  if (props.isDisabled) {
    isDisabled.value = props.isDisabled;
  }
})
</script>

<template>
  <n-switch
    v-model:value="isActive"
    :disabled="isDisabled"
    @on-update:value="toggleActive"
  />
</template>