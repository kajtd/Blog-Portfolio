<template>
  <AppLoader v-show="loading" />
  <AppAlert
    v-show="alert"
    :type="alert"
    :title="alertTitle"
    :description="alertDescription"
  />
  <div
    class="space-y-1 rounded-2xl shadow-xs max-w-xl w-full border border-gray-300/70 bg-white min-h-52"
  >
    <div
      class="h-14 border-b border-gray-300/70 px-4 py-3 flex justify-between"
    >
      <div class="flex gap-2">
        <img
          src="/my-avatar.webp"
          alt="Kajetan Domagała"
          class="w-8 h-8 rounded-full"
        />
        <div class="flex flex-col text-xs">
          <p class="font-medium text-black">Kajetan</p>
          <p class="text-gray-500/80">@kajetan</p>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <a href="https://github.com/kajtd" target="_blank">
          <AppIcon name="github" class="w-5 h-5 text-gray-500/80" />
        </a>
        <a href="https://www.linkedin.com/in/kajetan-domagala/" target="_blank">
          <AppIcon name="linkedin" class="w-5 h-5 text-gray-500/80" />
        </a>
        <a href="https://twitter.com" target="_blank">
          <AppIcon name="twitter" class="w-5 h-5 text-gray-500/80" />
        </a>
      </div>
    </div>
    <div class="flex flex-col text-xs md:text-sm px-4 py-3 text-gray-500/80">
      Web Developer, Based in Poland 🌐 <br />Building applications and websites
      using no, low and full-code. <br />Writing articles on app development and
      SaaS.
    </div>
    <div class="flex space-x-2 px-4">
      <AppButton class="px-6" secondary href="/#projects">Projects</AppButton>
      <AppButton secondary href="/#about">About</AppButton>
    </div>
    <div class="flex justify-between items-center px-4 py-3">
      <p class="text-xs text-gray-600/80 font-medium">Newsletter</p>
      <AppIcon
        v-if="isNewsletterBoxVisible"
        name="substract-line"
        class="h-5 w-5 text-gray-600/80 cursor-pointer"
        @click="isNewsletterBoxVisible = !isNewsletterBoxVisible"
      />
      <AppIcon
        v-else
        name="add-line"
        class="h-5 w-5 text-gray-600/80 cursor-pointer"
        @click="isNewsletterBoxVisible = !isNewsletterBoxVisible"
      />
    </div>
    <div v-show="isNewsletterBoxVisible" class="px-4 py-3 space-y-6">
      <div class="flex flex-col">
        <p class="text-base md:text-lg font-medium">
          You are just one click away.
        </p>
        <p class="text-xs md:text-sm max-w-md mt-2 text-gray-600/80">
          Subscribe to my newsletter for insights on app development, new tools,
          and regular updates.
        </p>
      </div>
      <form class="block md:hidden" @submit.prevent="subscribeToNewsletter">
        <AppInput
          v-model="email"
          placeholder="john.doe@gmail.com"
          type="email"
        />
        <AppButton class="mt-4" type="submit">I want in!</AppButton>
      </form>
      <form class="hidden md:block" @submit.prevent="subscribeToNewsletter">
        <AppInput
          v-model="email"
          placeholder="john.doe@gmail.com"
          type="email"
          button-text="Count me in!"
          button-type="submit"
        />
      </form>
    </div>
  </div>
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
const isNewsletterBoxVisible = ref(false);
</script>
