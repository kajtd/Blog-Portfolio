<template>
  <main class="min-h-screen m-0">
    <div
      class="w-full max-w-3xl mx-auto prose prose-blockquote:not-italic prose-img:ring-1 prose-img:ring-gray-200 prose-img:rounded-lg prose-pre:bg-white"
    >
      <ContentDoc v-slot="{ doc }" tag="article">
        <article class="p-4 md:p-10 nuxt-content w-full mx-auto">
          <AppBadge
            blue
            class="text-sm mx-auto mb-4 font-medium mt-12 text-center"
          >
            Updated: {{ getReadableDate(doc.published) }}
          </AppBadge>
          <h1 class="text-center font-semibold text-4xl">{{ doc.title }}</h1>
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
  @apply text-3xl xl:text-4xl font-medium;
}
.prose h3[id] {
  @apply text-2xl xl:text-3xl font-medium;
}

.prose article > div > p,
.prose article > div > ul > li {
  @apply text-black text-base xl:text-lg;
}

.prose code:not(pre code) {
  @apply before:hidden after:hidden border-gray-300/90 border shadow-sm p-1 px-2 rounded-lg m-1;
}

.prose a:not(h2 a, h3 a) {
  @apply relative inline-block no-underline after:block after:absolute after:bg-blue-500 after:h-0.5 after:left-1/2 after:bottom-0 after:w-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 after:scale-x-0 after:hover:scale-x-100;
}
</style>
