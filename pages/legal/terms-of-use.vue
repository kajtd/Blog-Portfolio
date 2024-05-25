<template>
  <main class="min-h-screen pt-12">
    <div
      class="mx-auto max-w-3xl prose prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 prose-img:rounded-lg"
    >
      <ContentDoc v-slot="{ doc }">
        <article>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>
  </main>
</template>
