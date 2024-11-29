<template>
  <div class="mx-auto flex flex-col items-center space-y-4 py-8 px-4">
    <AppBadge pink class="w-auto">Content</AppBadge>
    <h4 class="text-2xl text-center md:text-4xl font-medium">
      Featured Articles
    </h4>
    <p class="text-xs sm:text-sm md:text-lg text-gray-800/70 text-center pb-8">
      I write on SEO, productivity, SaaS products or development tools.<br />Here,
      you'll find a bunch of articles I did in the past.
    </p>
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <li v-for="(article, id) in articles" :key="id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
    <ul
      v-if="totalPages > 1"
      class="flex items-center justify-center pt-6 space-x-2"
    >
      <li v-for="page in totalPages" :key="page">
        <AppButton
          @click="setCurrentPage(page)"
          :secondary="currentPage !== page"
        >
          {{ page }}
        </AppButton>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { Article } from "@/types/Article";

const currentPage = ref(1);
const articlesPerPage = 10;
const totalArticles = ref(0);

const articles = ref<Article[]>([]);

useSeoMeta({
  title: "Blog & Portfolio",
  ogTitle: "Blog & Portfolio",
  description:
    "This is my personal blog and portfolio website. Here I share my thoughts, experiences and projects.",
  ogDescription:
    "This is my personal blog and portfolio website. Here I share my thoughts, experiences and projects.",
  ogImage: "https://kajetan.io/my-avatar.webp",
  twitterCard: "summary_large_image",
});

watch(
  currentPage,
  async () => {
    const { data } = await useAsyncData<Article[]>(
      `articles-page-${currentPage.value}`,
      () =>
        queryContent("/articles")
          .sort({ published: -1 })
          .skip((currentPage.value - 1) * articlesPerPage)
          .limit(articlesPerPage)
          .find()
    );
    if (data.value) {
      articles.value = data.value;
    }
  },
  { immediate: true }
);

const { data: total } = await useAsyncData<number>("all-articles", () =>
  queryContent("/articles").count()
);

if (typeof total.value === "number") {
  totalArticles.value = total.value;
}

const totalPages = computed(() =>
  Math.ceil(totalArticles.value / articlesPerPage)
);

function setCurrentPage(page: number) {
  currentPage.value = page;
}
</script>
