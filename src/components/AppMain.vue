<script>
import AppHero from "./AppHero.vue";
import SectionNews from "./SectionNews.vue";
import SectionForum from "./SectionForum.vue";
import SectionJoin from "./SectionJoin.vue";
import { store } from "../store";
export default {
  data() {
    return { store };
  },
  components: { AppHero, SectionNews, SectionForum, SectionJoin },
};
</script>
<template>
  <app-hero :hero="store.hero" />
  <section-news />
  <section-forum />
  <section-join />
</template>
<style lang="scss"></style>
