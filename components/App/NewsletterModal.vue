<template>
  <AppLoader v-show="loading" />
  <AppAlert
    v-show="alert"
    :type="alert"
    :title="alertTitle"
    :description="alertDescription"
  />
  <div
    v-show="isModalVisible"
    class="fixed inset-0 bg-white/90 flex justify-center items-center z-[100] px-2 newsletter-modal"
    :class="{ open: isModalVisible }"
  >
    <div
      class="bg-white p-6 rounded-2xl shadow max-w-[400px] w-full border border-gray-300/90 relative"
    >
      <button
        class="absolute top-3 right-3 bg-gray-300/30 rounded-full w-6 h-6 grid place-items-center ring-offset-2 hover:ring-2 hover:ring-primary-300 transition-all duration-300"
        @click="closeModal"
      >
        <Icon name="mdi:times" class="w-3.5 h-3.5 mt-[1px] text-gray-500" />
      </button>
      <h2 class="text font-medium mb-2 mt-3 md:mt-0 text-lg">
        Subscribe to the Newsletter
      </h2>
      <p class="mb-4 text-base text-[#0F132499]">
        Join for tips and updates. You can unsubscribe anytime.
      </p>
      <form @submit.prevent="subscribeToNewsletter">
        <AppInput
          v-model="email"
          placeholder="john.doe@gmail.com"
          button-text="I'm in!"
          type="email"
          button-type="submit"
        />
      </form>
      <div class="text-center h-4 my-6 border-t border-gray-300/70">
        <p
          class="text-xs font-medium bg-white text-center relative -top-[16px] p-2 inline-block text-gray-700/80"
        >
          Last Newsletters [{{ emails.length }}]
        </p>
      </div>
      <ul class="space-y-4">
        <li v-for="email in emails" :key="email.secondary_id" class="flex">
          <div
            class="w-10 h-10 rounded-full mr-3 bg-gray-300/30 grid place-items-center"
          >
            <Icon name="fa:send" class="w-4 h-4 text-gray-500" />
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-sm text-black">{{ email.subject }}</span>
            <a
              :href="email.absolute_url"
              target="_blank"
              class="text-blue-500 text-sm"
            >
              Link
              <Icon name="tabler:link" class="w-4 h-4 mb-1" />
            </a>
          </div>
          <span class="text-sm ml-auto text-gray-400/80">{{
            getReadableDate(email.creation_date)
          }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNewsletterSubscription } from "@/composables/useNewsletterSubscription";
import { getReadableDate } from "@/utils/util";
import type { Email } from "~/types/Email";

const props = defineProps<{
  isModalVisible: boolean;
}>();

const emit = defineEmits(["update:isModalVisible"]);

const {
  email,
  loading,
  alert,
  alertTitle,
  alertDescription,
  subscribeToNewsletter,
} = useNewsletterSubscription();
const emails = ref<Email[]>([]);
watch(
  () => props.isModalVisible,
  async (newValue, oldValue) => {
    if (newValue === true) {
      loading.value = true;

      // Start the timer
      const timer = new Promise((resolve) => setTimeout(resolve, 1000));

      // Fetch the emails
      const fetchEmails = async (): Promise<Email[]> => {
        const response = await fetch("/api/fetchEmails");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data: Email[] = await response.json();
        return data;
      };

      // Run the fetch and the timer in parallel
      const [emailResults] = await Promise.all([fetchEmails(), timer]);

      emails.value = emailResults;
      loading.value = false;
    }
  }
);
const closeModal = () => {
  emit("update:isModalVisible", false);
};
</script>
