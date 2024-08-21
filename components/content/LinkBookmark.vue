<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  url: string;
}>();
</script>

<template>
  <a :href="url" target="_blank" class="no-underline !text-black">
    <div
      class="border border-gray-300/70 rounded-2xl backdrop-blur md:h-20 box-content p-4 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 hover:bg-gray-300/10 transition-colors"
    >
      <div class="h-full flex flex-col justify-center items-start gap-1 w-full">
        <p class="text-base font-semibold m-0">{{ title }}</p>
        <p class="text-xs m-0 text-ellipsis overflow-hidden text-nowrap w-full">
          {{ url }}
        </p>
      </div>
      <div
        class="bg-gray-300/20 rounded-lg p-2 h-10 w-10 md:h-20 md:w-20 grid place-items-center"
      >
        <Icon name="mdi:link" class="md:w-6 md:h-6 w-3 h-3 text-black" />
      </div>
    </div>
  </a>
</template>
