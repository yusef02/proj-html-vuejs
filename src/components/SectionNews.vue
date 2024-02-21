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
    <h3 class="sectionTitle">SECTION NEWS</h3>
    <h2 class="sectionTitle">All the latest news</h2>
    <div class="container">
      <div class="row">
        <div v-for="article in store.allArticlesDb" class="col-md-4 mb-3">
          <news-article :article="article" />
        </div>
      </div>
      <div class="row">
        <app-banner
          :newsTitle="newsTitle"
          :newsPreview="newsPreview"
          :newsBackImage="'/featured_article_1_bg.jpg'"
        />
      </div>
      <div class="row">
        <div v-for="article in store.allArticlesDb" class="col-md-4 mb-3">
          <news-article :article="article" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-8">
          <app-banner
            :newsTitle="newsTitle"
            :newsPreview="newsPreview"
            :newsBackImage="'/featured_article_2_bg.jpg'"
          />
        </div>
        <div class="col-md-4">
          <h2>Tutorial & guides</h2>
          <div class="row flex-column">
            <div v-for="article in store.allArticlesDb" class="col-12 mb-3">
              <news-article :article="article" :isToast="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section--dark"><a href="#">READ OUR BLOG</a></section>
  </section>
</template>
<style lang="scss">
#news {
  padding-top: 50px;
  h3.sectionTitle {
    font-size: 1rem;
    text-align: center;
    letter-spacing: 0.5rem;
  }
  h2.sectionTitle {
    text-align: center;
  }
  .container {
    .row {
      padding: 30px 0;
    }
  }
  .section--dark {
    background-color: #191919;
    color: white;
    padding: 70px 0;
    text-align: center;
    a {
      display: inline-block;
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>
