<script setup lang="ts">
import { useClipboard } from "@vueuse/core";

defineProps<{
  code: string;
  language?: string;
  filename?: string;
  highlights?: number[];
}>();

const { copy, copied } = useClipboard();

const colors = ["bg-primary-600/70", "bg-primary-500/70", "bg-primary-400/70"];
</script>

<template>
  <div
    class="code-wrapper relative my-4 overflow-hidden rounded-xl shadow border-gray-300/90 border bg-white"
  >
    <header
      class="w-full flex items-center justify-between py-2 px-4 z-50 border-b border-gray-300/90"
    >
      <div class="flex items-center gap-1 mr-auto flex-1">
        <div
          v-for="color in colors"
          :key="color"
          class="shadow-xl w-3 h-3 rounded-full"
          :class="color"
        ></div>
      </div>
      <span
        v-if="filename"
        class="text-sm text-black border-[3px] border-black bg-white font-medium px-8 py-2 rounded-xl mr-4 flex justify-center"
      >
        {{ filename }}
      </span>
      <AppButton
        secondary
        class="ml-auto flex justify-end !p-0 w-8"
        @click="copy(code)"
      >
        <Icon v-if="copied" icon="akar-icons:check" color="black" />
        <Icon v-else icon="akar-icons:copy" color="black" />
      </AppButton>
    </header>
    <slot />
  </div>
</template>

<style scoped>
:slotted(pre) {
  @apply my-0 flex flex-1 overflow-x-auto p-4 leading-[1.625];
  counter-reset: lines;
}
:slotted(pre code p::before) {
  counter-increment: lines;
  content: counter(lines);
  @apply w-4 mr-6 inline-block text-left text-black;
}
</style>
