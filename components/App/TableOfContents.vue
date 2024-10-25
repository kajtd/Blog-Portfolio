<template>
  <aside class="p-2 w-fit">
    <nav
      class="flex flex-col py-2 mx-0 rounded-xl bg-white shadow-xs border border-gray-300/90"
    >
      <p class="text-lg font-semibold ml-6 mb-2 text-black">
        Table of Contents
      </p>
      <ul class="mx-0 my-0 px-2 font-medium text-black/90">
        <li
          v-for="{ id, text, children } in tocLinks"
          :id="`toc-${id}`"
          :key="id"
          ref="tocLinksH2"
          class="px-4 py-2 my-3 ml-0 cursor-pointer list-none text-base hover:bg-black hover:text-white rounded-lg"
          :class="{
            'bg-black text-white': router.currentRoute.value.hash === `#{id}`,
          }"
          @click="onClick(id)"
        >
          {{ text }}
        </li>
      </ul>
    </nav>
    <div class="flex flex-col space-y-2 mt-4">
      <div class="flex space-x-2 items-center">
        <AppButton @click="copyArticleLink" secondary class="w-32" icon="link">
          Copy Link
        </AppButton>
        <AppButton @click="shareOnTwitter" tail-icon="twitter">
          Share on
        </AppButton>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import type { Article } from "@/types/Article";

const router = useRouter();

const route = useRoute();
const { slug } = route.params;

const tocLinksH2: Ref<Array<HTMLElement>> = ref([]);
const tocLinksH3: Ref<Array<HTMLElement>> = ref([]);

const { data: blogPost } = await useAsyncData<Article>(`article`, () =>
  queryContent("/articles").where({ slug: slug }).findOne()
);

const tocLinks = computed(() => blogPost.value?.body?.toc?.links ?? []);

const onClick = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    router.push({ hash: `#${id}` });
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

const copyArticleLink = () => {
  const articleLink = window.location.href;
  navigator.clipboard.writeText(articleLink);
};

const shareOnTwitter = () => {
  const articleLink = window.location.href;
  window.open(
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleLink)}`
  );
};
</script>
