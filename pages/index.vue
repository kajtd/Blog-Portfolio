<template>
  <main class="min-h-screen flex flex-col items-center">
    <div class="space-y-8 flex flex-col items-center px-4">
      <HomeIntro />
      <!-- <AppMessenger :queued-messages="queuedMessages" class="min-h-72" />  -->
      <HomeAbout />
      <!-- <HomeProjects /> -->
      <HomeFeaturedArticles />
    </div>
  </main>
</template>

<script setup lang="ts">
import AppButton from "../components/App/Button.vue";

import type { Message } from "@/types/Message";

const ButtonComponent = markRaw(AppButton);

useHead({
  htmlAttrs: {
    class: "scroll-smooth",
  },
});

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

const queuedMessages = ref<Message[]>([
  {
    name: "Kajetan",
    text: "Hello, thank you for checking out my website!",
    avatar: "/my-avatar.webp",
  },
  {
    name: "Kajetan",
    text: "First, let me introduce myself...",
    avatar: "/my-avatar.webp",
  },
  {
    name: "Kajetan",
    text: "I'm a web developer based in Poland. I like building apps and documenting my journey through written content.",
    avatar: "/my-avatar.webp",
  },
  {
    name: "Kajetan",
    text: "If you’d like to check out my work or articles, just scroll down!",
    avatar: "/my-avatar.webp",
  },
  {
    name: "You 😎",
    avatar: "/user-avatar.svg",
    text: "Thanks a bunch!",
    userTyping: true,
  },
  {
    name: "Kajetan",
    component: ButtonComponent,
    html: `<p>You are welcome!</p><p>Feel free to reach out to me if you need anything.</p><br /><p class="text-gray-500/90 text-xs md:text-sm font-regular">Would you like to get in touch?</p>`,
    props: {
      slot: "Drop me a message!",
      secondary: true,
      class: "max-w-48 mt-2",
      href: "mailto:contact@kajetan.io",
      icon: "fa:send",
    },
    avatar: "/my-avatar.webp",
  },
]);
</script>
