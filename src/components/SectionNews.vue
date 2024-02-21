<script>
import NewsArticle from "./NewsArticle.vue";
import AppBanner from "./AppBanner.vue";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      newsPreview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corrupti repudiandae iure expedita veniam quidem quas quibusdam, dolor ratione porro adipisci quam tempore nemo, labore odio aliquid consequuntur vitae. Aut?",
      newsTitle: "titolo titolo titolo",
    };
  },
  components: {
    NewsArticle,
    AppBanner,
  },
  methods: {},
};
</script>
<template>
  <section id="news">
    <div class="container">
      <div class="row">
        <news-article
          v-for="article in store.allArticlesDb"
          :article="article"
        />
      </div>
      <div class="row">
        <app-banner
          :newsTitle="newsTitle"
          :newsPreview="newsPreview"
          :newsBackImage="'/featured_article_1_bg.jpg'"
        />
      </div>
      <div class="row">
        <news-article
          v-for="article in store.allArticlesDb"
          :article="article"
        />
      </div>

      <div class="row">tutorial</div>
    </div>
    <section>read our blog</section>
  </section>
</template>
<style lang="scss"></style>
