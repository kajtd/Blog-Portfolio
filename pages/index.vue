<template>
  <main class="min-h-screen flex flex-col items-center">
    <div class="space-y-8 flex flex-col items-center px-4">
      <HomeIntro />
      <HomeAbout />
      <HomeFeaturedArticles />
    </div>
  </main>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: "scroll-smooth",
  },
});

useSeoMeta({
  title: "Kajetan",
  ogTitle: "Blog & Portfolio",
  description:
    "This is my personal blog and portfolio website. Here I share my thoughts, experiences and projects.",
  ogDescription:
    "This is my personal blog and portfolio website. Here I share my thoughts, experiences and projects.",
  ogImage: "https://kajetan.io/my-avatar.webp",
  twitterCard: "summary_large_image",
});
</script>
