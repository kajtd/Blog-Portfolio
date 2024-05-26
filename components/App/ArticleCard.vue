<template>
  <NuxtLink :to="article._path" class="group">
    <article
      class="h-full max-w-sm space-y-6 pb-6 rounded-2xl shadow-xs border border-gray-300/70 bg-white min-h-52 w-full flex flex-col justify-between"
    >
      <img
        class="rounded-md border border-gray-200/80 shadow-sm w-full object-cover h-64 mb-2"
        :src="article.img"
        alt=""
      />
      <div class="flex px-6">
        <AppBadge
          v-if="article.tags && article.tags.length > 0"
          v-bind="badgeProps"
          class="px-4"
          >{{ article?.tags[0] }}</AppBadge
        >
      </div>
      <h2
        class="text-2xl font-medium font-display tracking-tight text-gray-800 group-hover:text-primary-900 px-6"
      >
        {{ article.title }}
      </h2>
      <p class="relative z-10 mt-2 text-base text-gray-700/80 px-6">
        {{ article.description }}
      </p>
      <time
        v-if="article.published"
        class="relative mb-3 flex items-center text-sm text-gray-900 px-6"
        datetime="2022-09-05"
      >
        {{ getReadableDate(article.published) }}
      </time>
    </article>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Article } from "@/types/Article";
import { getReadableDate } from "@/utils/util";
const props = defineProps<{
  article: Article;
}>();

const badgeProps = computed(() => ({
  purple: props.article.labelColor === "purple" || !props.article.labelColor,
  green: props.article.labelColor === "green",
}));
</script>
