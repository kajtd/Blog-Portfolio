<template>
  <div
    :class="isArticle ? 'bg-white' : 'bg-[url(\'/dot-grid.webp\')]'"
    :style="
      isArticle
        ? ''
        : {
            'background-image': `url('/dot-grid.webp')`,
            'background-position': 'center top',
          }
    "
  >
    <NuxtLoadingIndicator color="#E4D9FF" />
    <div
      :class="isArticle ? '' : 'bg-[url(\'/hero.webp\')] bg-no-repeat'"
      :style="
        isArticle
          ? ''
          : {
              'background-image': `url('/hero.webp')`,
              'background-position': 'center -160vh',
            }
      "
    >
      <div class="h-32"></div>
      <div>
        <AppNavbar />
        <NuxtPage />
      </div>
    </div>
    <div class="h-12"></div>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const isArticle = computed(() => {
  // Check if the current route is an article
  return /^\/articles\/.+/.test(route.path);
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>
