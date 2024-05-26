<template>
  <div :class="badgeClasses">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface BadgeProps {
  blue?: boolean;
  purple?: boolean;
  green?: boolean;
  yellow?: boolean;
  red?: boolean;
  pink?: boolean;
}

const props = defineProps<BadgeProps>();

const badgeClasses = computed(() => {
  return [
    "px-2 py-0.5 w-fit grid place-items-center text-sm border-[1.25px] rounded-full font-medium",
    {
      "bg-[#E3EAFD] text-[#133A9A] border-gray-900/10": props.blue,
      "bg-[#ECDFFB] text-[#5314A3] border-purple-900/10": props.purple,
      "bg-[#E3F9E5] text-[#137A1A] border-green-900/10": props.green,
      "bg-[#F9F8E3] text-[#9A8A13] border-yellow-900/10": props.yellow,
      "bg-[#F9E3E3] text-[#9A1313] border-red-900/10": props.red,
      "bg-[#F3E3F9] text-[#8A139A] border-pink-900/10": props.pink,
    },
  ];
});
</script>
