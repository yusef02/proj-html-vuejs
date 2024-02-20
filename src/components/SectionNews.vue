<script>
import NewsArticle from "./NewsArticle.vue";
import { store } from "../store";
import { toDisplayString } from "vue";

export default {
  data() {
    return { store };
  },
  components: {
    NewsArticle,
  },
  methods: {
    getLatestArticles() {},
    getTrend() {},
    getTutorials() {},

    getlast10days() {},
  },
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
      <div class="row">slider</div>
      <div class="row">more articles</div>
      <div class="row">tutorial</div>
    </div>
    <section>read our blog</section>
  </section>
</template>
<style lang="scss"></style>
