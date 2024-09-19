<script setup lang="ts">
defineProps<{
  img: string;
  title: string;
  description: string;
  url: string;
}>();
</script>

<template>
  <div
    class="border border-gray-300/70 rounded-2xl backdrop-blur md:h-48 box-content p-4 flex flex-col md:flex-row md:items-center gap-6"
  >
    <img :src="img" alt="tiptap nuxt thumbnail" class="h-48 m-0 object-cover" />
    <div
      class="h-full flex flex-col justify-center items-start gap-5 pt-6 pb-2"
    >
      <div class="space-y-1">
        <p class="text-lg font-semibold m-0">{{ title }}</p>
        <p class="text-sm m-0">{{ description }}</p>
      </div>
      <AppButton
        :href="url"
        secondary
        tailIcon="mdi:github"
        iconClass="w-4 h-4"
        class="mt-auto no-underline"
        target="_blank"
      >
        See the code
      </AppButton>
    </div>
  </div>
</template>
