<template>
  <div
    class="bg-[url('/dot-grid.webp')]"
    style="background-position: center top"
  >
    <NuxtLoadingIndicator color="#E4D9FF" />
    <div
      class="bg-[url('/hero.webp')] bg-no-repeat"
      style="background-position: center -160vh"
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
