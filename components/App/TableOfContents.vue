<template>
  <aside class="p-2 w-fit">
    <nav
      class="flex flex-col p-4 mx-0 rounded-xl bg-white shadow-xs border border-gray-300/90"
    >
      <h4 class="mx-0 my-0">Table of Contents</h4>
      <ul class="mx-0 mt-2 px-0">
        <li
          v-for="{ id, text, children } in tocLinks"
          :id="`toc-${id}`"
          :key="id"
          ref="tocLinksH2"
          class="mb-2 ml-0 cursor-pointer list-none text-sm last:mb-0"
          @click="onClick(id)"
        >
          {{ text }}
          <ul v-if="children" class="my-2">
            <li
              v-for="{ id: childId, text: childText } in children"
              :id="`toc-${childId}`"
              :key="childId"
              ref="tocLinksH3"
              class="mb-2 ml-0 cursor-pointer list-none text-xs last:mb-0"
              @click.stop="onClick(childId)"
            >
              {{ childText }}
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <div class="flex flex-col space-y-2 mt-4 bg-white">
      <div class="flex space-x-2 items-center">
        <AppButton
          @click="copyArticleLink"
          secondary
          class="w-32"
          icon="material-symbols:link"
        >
          Copy Link
        </AppButton>
        <AppButton @click="shareOnTwitter" tail-icon="prime:twitter">
          Share on Twitter
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
