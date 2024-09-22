<template>
  <AppLoader v-show="loading" />
  <AppAlert
    v-show="alert"
    :type="alert"
    :title="alertTitle"
    :description="alertDescription"
  />
  <div
    class="space-y-1 rounded-2xl shadow-xs max-w-xl w-full border border-gray-300/70 bg-white"
  >
    <div class="px-4">
      <div class="flex flex-col">
        <p class="text-lg font-medium mb-0">Subscribe to the newsletter</p>
        <p class="text-sm text-gray-600/80">
          I'm writing on application development, checking out tools to make it
          faster, and sharing updates along the way.
        </p>
      </div>
      <form @submit.prevent="subscribeToNewsletter">
        <AppInput
          v-model="email"
          placeholder="john.doe@gmail.com"
          button-text="Count me in!"
          type="email"
          button-type="submit"
        />
      </form>
      <div class="flex items-center space-x-2">
        <input
          v-model="checkboxChecked"
          type="checkbox"
          class="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
        />
        <p class="text-sm text-gray-600/80">
          I accept
          <NuxtLink to="/legal/privacy-policy">privacy policy</NuxtLink> when
          signing to newsletter
        </p>
      </div>
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
  subscribeToNewsletter: originalSubscribeToNewsletter,
} = useNewsletterSubscription();

const checkboxChecked = ref(false);

const subscribeToNewsletter = () => {
  if (!checkboxChecked.value) {
    alert.value = "error";
    alertTitle.value = "Please, accept privacy policy";
    alertDescription.value = "You need to check the checkbox first.";
    setTimeout(() => {
      alert.value = "";
    }, 3000);
    return;
  }
  originalSubscribeToNewsletter();
};
</script>
