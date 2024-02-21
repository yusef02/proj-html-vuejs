<script>
export default {
  data() {
    return {};
  },
  props: ["article", "isToast"],
  methods: {},
};
</script>
<template>
  <div v-if="isToast" class="articolo row">
    <div class="col-md-4"><img :src="article.imgPrevSrc" alt="" /></div>
    <div class="col-md-8">
      <h4>{{ article.articleTitle }}</h4>
      <p>{{ article.date }}</p>
    </div>
  </div>
  <div v-else class="articolo">
    <img :src="article.imgPrevSrc" alt="" />
    <h4>{{ article.articleTitle }}</h4>
    <p>{{ article.date }}</p>
    <p>{{ article.articlePreview }}</p>
  </div>
</template>
<style lang="scss">
.articolo {
  img {
    width: 100%;
  }
  h4 {
    font-weight: 600;
    margin-top: 10px;
  }
}
</style>
