<template>
  <main class="flex flex-col items-center">
    <div class="space-y-8 flex flex-col items-center px-4 pb-4 w-full h-full">
      <AppMessenger :queued-messages="queuedMessages" class="min-h-[468px]" />
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

const queuedMessages = ref<Message[]>([
  {
    name: "Kajetan",
    text: "Hi, nice to see you here 🖐",
    avatar: "/my-avatar.png",
  },
  {
    name: "Kajetan",
    html: "<p>If you've come on this page, you probably want to contact me. Just send me a message at <a href='mailto:contact@kajetan.io' class='text-blue-500 underline'>contact@kajetan.io</a></p>",
    avatar: "/my-avatar.png",
  },
  {
    name: "Kajetan",
    component: ButtonComponent,
    html: `<p>Feel free to reach out to me if you need anything.</p><br /><p class="text-gray-500/90 text-sm font-regular">You can also click the button below 👇</p>`,
    props: {
      slot: "Drop me a message!",
      secondary: true,
      class: "max-w-48 mt-2",
      icon: "fa:send",
      href: "mailto:contact@kajetan.io",
    },
    avatar: "/my-avatar.png",
  },
]);
</script>
