<template>
  <component :is="iconComponent" :class="computedClass" />
</template>

<script setup lang="ts">
import type { IconName } from "~/types/iconNames";

const props = defineProps<{
  name: IconName;
  class?: string;
}>();

const icons = import.meta.glob(`@/**/*.svg`);

const iconComponent = computed(() => {
  return defineAsyncComponent(() => {
    return icons[`/assets/icons/${props.name}.svg`]() as Promise<Component>;
  });
});

const computedClass = computed(() => {
  return `inline-block ${props.class || ""}`;
});
</script>
