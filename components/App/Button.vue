<script setup lang="ts">
import type { IconName } from "~/types/iconNames";
interface Props {
  href?: string;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
  secondary?: boolean;
  tertiary?: boolean;
  small?: boolean;
  icon?: IconName;
  tailIcon?: IconName;
  iconClass?: string;
}

defineProps<Props>();
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href || ''"
    :disabled="disabled"
    :type="type || 'button'"
    :class="[
      'relative rounded-[10px] flex items-center justify-center cursor-pointer gap-2 overflow-hidden transition-all duration-200 text-sm font-medium px-3 h-8 bg-[#18181B] ring-offset-background hover:ring-2 hover:ring-primary-300 text-white',
      {
        '!bg-white !text-black border border-gray-300/80 shadow-sm': secondary,
        '!bg-[#0A0F290A] !text-black': tertiary,
      },
    ]"
  >
    <AppIcon v-if="icon" :name="icon" class="w-3 h-3" :class="iconClass" />
    <slot></slot>
    <AppIcon
      v-if="tailIcon"
      :name="tailIcon"
      class="w-3 h-3"
      :class="iconClass"
    />
  </component>
</template>
