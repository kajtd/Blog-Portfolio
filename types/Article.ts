import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

export interface Article extends ParsedContent {
  _path?: string;
  title?: string;
  img?: string;
  description?: string;
  tags?: string[];
  published?: string;
  slug?: string;
}
