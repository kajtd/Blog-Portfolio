<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  type: "info" | "success" | "warning" | "error";
}>();

const iconName = computed(() => {
  switch (props.type) {
    case "success":
      return "mdi:success";
    case "error":
      return "material-symbols:error";
    case "warning":
      return "material-symbols:warning";
    case "info":
      return "material-symbols:info";
    default:
      return "material-symbols:info";
  }
});

const iconClass = computed(() => {
  switch (props.type) {
    case "success":
      return "text-emerald-500";
    case "error":
      return "text-red-500";
    case "warning":
      return "text-yellow-500";
    case "info":
      return "text-blue-500";
    default:
      return "text-gray-500";
  }
});
</script>

<template>
  <div
    class="border border-gray-300/70 rounded-2xl backdrop-blur box-content px-4 py-2 pt-6 text-sm flex flex-col items-start justify-start text-black font-medium"
  >
    <Icon :name="iconName" :class="['w-4 h-4', iconClass]" />
    <slot />
  </div>
</template>
