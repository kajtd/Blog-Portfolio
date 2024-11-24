<template>
  <main class="min-h-screen m-0">
    <div
      class="w-full max-w-3xl mx-auto prose prose-blockquote:not-italic prose-img:ring-1 prose-img:ring-gray-200 prose-img:rounded-lg prose-pre:bg-white"
    >
      <LazyContentDoc v-slot="{ doc }" tag="article">
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
          <img
            :src="doc.img"
            :alt="doc.title"
            class="rounded-3xl w-full !ring-0"
            loading="lazy"
          />
          <LazyContentRenderer :value="doc" />
        </article>
      </LazyContentDoc>
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
.prose h3 a,
.prose h4 a {
  text-decoration: none;
}

.prose h2[id] {
  font-size: 1.5rem;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
}

.prose h3[id] {
  font-size: 1.25rem;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
}

.prose h4[id] {
  font-size: 1.125rem;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
}

.prose article > div > p,
.prose article > div > ul > li,
.prose article > div > ol > li {
  color: black;
  font-size: 0.875rem;

  @media (min-width: 640px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
}

.prose article > div > ul,
.prose article > div > ol {
  width: 100%;
}

.prose code:not(pre code) {
  border: 1px solid rgb(209 213 219 / 0.9);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  border-radius: 0.5rem;
  margin: 0.25rem;
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;

  &::before {
    display: none;
  }

  &::after {
    display: none;
  }
}

.prose a:not(h2 a, h3 a, h4 a) {
  color: #a064e8;
}

.prose > article > div > img {
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid rgb(209 213 219 / 0.9);
}

@media (max-width: 370px) {
  .prose article > div > ul {
    padding-inline-start: 0.5em;
  }
  .prose article > div > ul > li {
    padding-inline-start: 0;
  }
}
</style>
