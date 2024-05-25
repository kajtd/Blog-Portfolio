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
              src="/Avatar.svg"
              alt="Kajetan Domagała"
              class="w-8 h-8 mr-4 transition-all duration-300 hover:ring-2 ring-primary-200 rounded-full hover:scale-125"
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
        <li>
          <AppButton @click="isNewsletterModalVisible = true" icon="fa:send">
            Newsletter
          </AppButton>
        </li>
        <li class="block sm:hidden ml-3">
          <button @click="isMenuOpen = !isMenuOpen">
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
        class="mx-auto absolute top-22 w-[calc(100%-32px)] left-0 right-0 shadow-sm items-center py-2 px-12 text-sm font-medium text-gray-600/90 rounded-2xl bg-white backdrop-blur border border-gray-300/70"
      >
        <ul class="flex flex-col items-center py-4">
          <li v-for="item in items" :key="item.path" class="py-2">
            <NuxtLink
              :to="item.path"
              class="text-gray-700 hover:text-primary-400"
              >{{ item.name }}</NuxtLink
            >
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
</script>
