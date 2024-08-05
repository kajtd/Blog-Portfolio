<template>
  <AppNewsletterModal
    :isModalVisible="isNewsletterModalVisible"
    @update:isModalVisible="(value) => (isNewsletterModalVisible = value)"
  />
  <div
    ref="headerRef"
    :style="styles"
    class="fixed top-0 w-full z-50 px-4 md:px-0"
  >
    <nav class="mx-auto py-8 max-w-xl">
      <ul
        class="flex shadow-sm items-center py-2 px-3 text-sm font-medium text-gray-600/90 rounded-2xl bg-white backdrop-blur border border-gray-300/70"
      >
        <li>
          <NuxtLink to="/">
            <img
              src="/my-avatar.png"
              alt="Kajetan Domagała"
              class="w-8 h-8 mr-4 transition-all duration-300 rounded-full hover:scale-110"
            />
          </NuxtLink>
        </li>
        <li
          v-for="item in items"
          :key="item.path"
          class="transition duration-200 hover:scale-105 hover:-translate-y-[2px] hidden sm:block"
        >
          <NuxtLink
            :to="item.path"
            class="relative px-2 hover:text-primary-400"
          >
            <span>{{ item.name }}</span>
          </NuxtLink>
        </li>
        <li class="flex-1"></li>
        <li class="hidden md:block">
          <AppButton @click="isNewsletterModalVisible = true" icon="fa:send">
            Newsletter
          </AppButton>
        </li>
        <li class="block sm:hidden ml-3">
          <button @click="toggleMobileMenu">
            <Icon
              :name="
                isMenuOpen ? 'iconamoon:close-duotone' : 'charm:menu-hamburger'
              "
              class="w-5 h-5"
            ></Icon>
          </button>
        </li>
      </ul>
      <div
        v-if="isMenuOpen"
        class="mx-auto absolute top-0 bottom-0 w-full h-screen left-0 right-0 grid place-items-center py-2 px-12 text-sm font-medium text-gray-600/90 bg-white"
      >
        <button
          class="absolute top-3 right-3 bg-gray-300/30 rounded-full w-6 h-6 grid place-items-center ring-offset-2 hover:ring-2 hover:ring-primary-300 transition-all duration-300"
          @click="toggleMobileMenu"
        >
          <Icon name="mdi:times" class="w-3.5 h-3.5 mt-[1px] text-gray-500" />
        </button>
        <ul class="flex flex-col items-center py-4 justify-center gap-4">
          <li v-for="item in items" :key="item.path" class="py-2">
            <button
              @click="navigateAndHideMenu(item.path)"
              class="text-gray-700 hover:text-primary-400 text-base"
            >
              {{ item.name }}
            </button>
          </li>
          <li>
            <AppButton @click="openNewsletterModal" icon="fa:send">
              Newsletter
            </AppButton>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useFixedHeader } from "vue-use-fixed-header";
const headerRef = ref(null);
const { styles } = useFixedHeader(headerRef);
const isMenuOpen = ref(false);
const isNewsletterModalVisible = ref(false);

const router = useRouter();

const items = [
  { name: "Home", path: "/" },
  {
    name: "Articles",
    path: "/articles",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const toggleMobileMenu = () => {
  document.body.classList.toggle("modal-visible");
  isMenuOpen.value = !isMenuOpen.value;
};

const navigateAndHideMenu = (path) => {
  router.push(path);
  isMenuOpen.value = false;
  document.body.classList.remove("modal-visible");
};

const openNewsletterModal = () => {
  isMenuOpen.value = false;
  document.body.classList.remove("modal-visible");
  isNewsletterModalVisible.value = true;
};
</script>
