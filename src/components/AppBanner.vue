<script>
export default {
  data() {
    return {};
  },
  props: ["newsTitle", "newsPreview", "newsBackImage"],
};
</script>
<template>
  <div
    class="container"
    :style="{ backgroundImage: `url('${newsBackImage}')` }"
  >
    <p>fetured news</p>
    <p>{{ newsTitle }}</p>
    <p>{{ newsPreview }}</p>

    <button class="btn">READ MORE</button>
  </div>
</template>
<style lang="scss"></style>
