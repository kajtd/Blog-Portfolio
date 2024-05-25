<template>
  <div
    id="projects"
    class="mx-auto max-w-xl w-full space-y-4 flex flex-col items-center py-8"
  >
    <AppBadge blue class="w-24">My Work</AppBadge>
    <h4 class="text-3xl md:text-4xl font-medium">Projects</h4>
    <p class="text-base md:text-lg text-gray-800/70 text-center pb-8">
      I enjoy building applications from scratch, testing different
      methodologies and technologies. <br />
      Let me show you some of my work from past.
    </p>
    <HomeProjectCard
      v-show="currentSlide === index"
      v-for="(project, index) in projects"
      :project="project"
    />
    <div class="flex gap-2 items-center">
      <button
        class="rounded-full md:w-10 md:h-10 w-8 h-8 bg-gray-200/80 grid place-items-center transition duration-300 ring-primary-300 ring-offset-2 hover:ring-2"
        @click="prevSlide"
      >
        <Icon
          name="ion:arrow-back-sharp"
          class="text-gray-900/70 md:h-5 h-4 md:w-5 w-4"
        />
      </button>
      <button
        class="rounded-full md:w-10 md:h-10 w-8 h-8 bg-gray-200/80 grid place-items-center transition duration-300 ring-primary-300 ring-offset-2 hover:ring-2"
        @click="nextSlide"
      >
        <Icon
          name="ic:sharp-arrow-forward"
          class="text-gray-900/70 md:h-5 h-4 md:w-5 w-4"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = ref([
  {
    id: 1,
    name: "BubbleBase",
    url: "https://bubblebase.ai",
    title: "BubbleBase",
    description:
      "Create solid and secure database for your Bubble in seconds. Kickstart your apps with solid backend.",
    label: "Bubble",
    img: "download.jpg",
  },
  {
    id: 2,
    name: "ShipWithNuxt",
    url: "https://shipwithnuxt.com",
    title: "ShipWithNuxt",
    description:
      "A collection of Nuxt3 boilerplates and libraries. Made with Nuxt3 and TypeScript.",
    label: "Nuxt",
    img: "download.jpg",
    labelColor: "green",
  },
  {
    id: 3,
    name: "Portfolio & Blog",
    url: "https://kajetan.io",
    title: "Portfolio & Blog",
    description:
      "Portfolio website combined with a blog. Made with Nuxt3 and TypeScript.",
    label: "Nuxt",
    img: "download.jpg",
    labelColor: "green",
  },
]);

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % projects.value.length;
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value + projects.value.length - 1) % projects.value.length;
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}
</style>
