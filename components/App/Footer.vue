<template>
  <AppLoader v-show="loading" />
  <AppAlert
    v-show="alert"
    :type="alert"
    :title="alertTitle"
    :description="alertDescription"
  />
  <footer class="py-16 px-4 md:px-0">
    <div class="max-w-xl mx-auto w-full">
      <div class="space-y-6 w-full">
        <div class="flex flex-col space-y-4">
          <h2 class="text-xl text-black font-medium">
            Subscribe to the newsletter
          </h2>
          <p class="text-xs md:text-sm text-gray-600/80 max-w-lg">
            I'm writing on application development, checking out tools to make
            it faster, and sharing updates along the way.
          </p>
        </div>
        <form class="space-y-4" @submit.prevent="subscribeToNewsletter">
          <AppInput
            v-model="email"
            placeholder="john.doe@gmail.com"
            type="email"
          />
          <AppButton type="submit">I want in!</AppButton>
        </form>
      </div>
    </div>
    <div class="mx-auto max-w-xl pt-12">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-600/90 font-medium mb-2 mt-12">Links</p>
          <ul class="flex flex-col space-y-2 text-black text-sm font-medium">
            <li
              v-for="link in links"
              :key="link._path"
              class="transition duration-200 hover:scale-105 hover:-translate-y-[1px]"
            >
              <NuxtLink
                :to="link._path"
                class="relative hover:text-primary-400 transition duration-200 hover:scale-105 hover:-translate-y-[1px]"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <p class="text-sm text-gray-600/90 font-medium mb-2 mt-12">Legal</p>
          <ul class="flex flex-col space-y-2 text-black text-sm font-medium">
            <li
              v-for="link in legalLinks"
              :key="link._path"
              class="transition duration-200 hover:scale-105 hover:-translate-y-[1px]"
            >
              <NuxtLink
                :to="link._path"
                class="relative hover:text-primary-400 transition duration-200 hover:scale-105 hover:-translate-y-[1px]"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-2 mx-auto max-w-xl mt-12">
      <a href="https://github.com/kajtd" target="_blank">
        <Icon name="mdi:github" class="w-5 h-5 text-gray-500/80"></Icon>
      </a>
      <a href="https://www.linkedin.com/in/kajetan-domagala/" target="_blank">
        <Icon name="pajamas:linkedin" class="w-5 h-5 text-gray-500/80"></Icon>
      </a>
      <a href="https://twitter.com" target="_blank">
        <Icon name="prime:twitter" class="w-4 h-4 text-gray-500/80"></Icon>
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useNewsletterSubscription } from "@/composables/useNewsletterSubscription";

const {
  email,
  loading,
  alert,
  alertTitle,
  alertDescription,
  subscribeToNewsletter,
} = useNewsletterSubscription();

const currentYear = computed(() => new Date().getFullYear());

const links = ref([
  {
    name: "Home",
    _path: "/",
  },
  {
    name: "About",
    _path: "/#about",
  },
  // {
  //   name: "Projects",
  //   _path: "/#projects",
  // },
  {
    name: "Contact",
    _path: "/contact",
  },
  {
    name: "Articles",
    _path: "/articles",
  },
]);

const legalLinks = ref([
  {
    name: "Privacy Policy",
    _path: "/legal/privacy-policy",
  },
  {
    name: "Terms of use",
    _path: "/legal/terms-of-use",
  },
  {
    name: "Disclaimer",
    _path: "/legal/disclaimer",
  },
]);
</script>
