<template>
  <div
    class="p-4 md:p-6 space-y-6 rounded-2xl shadow-xs max-w-2xl border border-gray-300/70 bg-white min-h-52 w-full"
  >
    <AppBadge v-bind="badgeProps" class="w-20">{{ project.label }}</AppBadge>
    <h5 class="text-lg md:text-[20px] font-medium">{{ project.name }}</h5>
    <div
      class="rounded-xl border border-gray-300/70 shadow-lg px-3 pb-1 w-full"
    >
      <div class="h-10 w-full flex items-center justify-between">
        <div class="flex gap-2 items-center">
          <div class="w-3 h-3 rounded-full bg-gray-700/40"></div>
          <div
            class="w-3 h-3 rounded-full bg-gray-700/40 hidden md:block"
          ></div>
          <div
            class="w-3 h-3 rounded-full bg-gray-700/40 hidden md:block"
          ></div>
        </div>
        <div
          class="bg-[#0A0F290A] rounded-lg font-medium py-1 px-2 w-44 md:w-64 text-center border border-[#0A0F2914] text-xs text-[#0F132499] flex items-center justify-between"
        >
          <Icon name="material-symbols:lock" class="text-gray-900/60 h-3 w-3" />
          <span class="mr-auto ml-auto">{{ project.url }}</span>
        </div>
        <Icon name="ic:baseline-plus" class="text-gray-900/60 h-5 w-5" />
      </div>
      <img
        class="rounded-md border border-gray-200/80 shadow-sm w-full object-cover h-32 md:h-64 mb-2"
        :src="project.img"
        alt=""
      />
    </div>
    <p class="text-sm md:text-base text-gray-800/70">
      {{ project.description }}
    </p>
    <AppButton secondary tailIcon="formkit:arrowright" iconClass="w-4 h-4">
      Learn more
    </AppButton>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  project: {
    name: string;
    title: string;
    label: string;
    labelColor?: string;
    url: string;
    img: string;
    description: string;
  };
}>();

const badgeProps = computed(() => ({
  purple: props.project.labelColor === "purple" || !props.project.labelColor,
  green: props.project.labelColor === "green",
}));
</script>
