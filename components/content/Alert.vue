<script setup lang="ts">
defineProps<{
  type: string;
}>();
</script>

<template>
  <div
    class="w-full flex items-center gap-4 p-4 bg-white border-[1.25px] border-gray-300/80 shadow rounded-md pr-6"
  >
    <Icon
      v-if="type === 'success'"
      name="mdi:success"
      class="w-5 h-5 text-emerald-500"
    />
    <Icon
      v-else-if="type === 'error'"
      name="material-symbols:info"
      class="w-5 h-5 text-red-500"
    />
    <Icon
      v-else-if="type === 'warning'"
      name="material-symbols:warning"
      class="w-5 h-5 text-yellow-500"
    />
    <slot />
  </div>
</template>
