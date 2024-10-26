<script setup lang="ts">
interface Props {
  type: "success" | "error" | "";
  title: string;
  description: string;
}

defineProps<Props>();
</script>

<template>
  <transition name="fade">
    <div
      class="z-[150] fixed top-4 right-4 flex items-start space-x-4 p-4 bg-white border-[1.25px] border-gray-300/80 shadow rounded-md max-w-sm pr-6"
    >
      <transition name="fade">
        <span v-if="type === 'success'">🥰</span>
        <span v-else-if="type === 'error'">😥</span>
      </transition>
      <div class="space-y-2">
        <p class="font-medium text-base leading-none">{{ title }}</p>
        <p class="text-sm text-gray-600">{{ description }}</p>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
