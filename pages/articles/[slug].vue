<template>
  <main class="min-h-screen m-0">
    <div
      class="w-full max-w-3xl mx-auto prose prose-blockquote:not-italic prose-img:ring-1 prose-img:ring-gray-200 prose-img:rounded-lg prose-pre:bg-white"
    >
      <ContentDoc v-slot="{ doc }" tag="article">
        <article class="p-4 md:p-10 nuxt-content w-full mx-auto">
          <AppBadge
            blue
            class="text-xs md:text-sm mx-auto mb-4 font-medium mt-5 md:mt-12 text-center"
          >
            Updated: {{ getReadableDate(doc.published) }}
          </AppBadge>
          <h1 class="text-center font-semibold text-3xl md:text-4xl">
            {{ doc.title }}
          </h1>
          <img :src="doc.img" :alt="doc.title" class="rounded-3xl w-full" />
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>
  </main>
</template>
<script lang="ts" setup>
import { getReadableDate } from "@/utils/util";

useHead({
  htmlAttrs: {
    class: "scroll-smooth",
  },
});
</script>
<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
.prose h2[id] {
  @apply text-2xl md:text-4xl font-medium;
}
.prose h3[id] {
  @apply text-xl md:text-3xl font-medium;
}

.prose article > div > p,
.prose article > div > ul > li,
.prose article > div > ol > li {
  @apply text-black text-sm sm:text-base md:text-lg;
}

.prose code:not(pre code) {
  @apply before:hidden after:hidden border-gray-300/90 border shadow-sm p-1 px-2 rounded-lg m-1;
}

.prose a:not(h2 a, h3 a) {
  @apply text-primary-500;
}

.prose > article > div > img {
  @apply w-full rounded-lg ring-gray-300/70;
}
</style>
