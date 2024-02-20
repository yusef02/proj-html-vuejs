<script>
export default {
  data() {
    return {};
  },
  props: ["article"],
};
</script>
<template>
  <div class="col-md-4">
    <div>
      <img :src="article.imgPrevSrc" alt="" />
      <p>{{ article.articleTitle }}</p>
      <p>{{ article.date }}</p>
      <p>{{ article.articlePreview }}</p>
    </div>
  </div>
</template>
<style lang="scss"></style>
