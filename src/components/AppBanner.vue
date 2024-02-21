<script>
export default {
  data() {
    return {};
  },
  props: ["newsTitle", "newsPreview", "newsBackImage"],
};
</script>
<template>
  <div class="container">
    <div
      class="col-12 banner"
      :style="{ backgroundImage: `url('${newsBackImage}')` }"
    >
      <h3>FEATURED NEWS</h3>
      <h2>{{ newsTitle }}</h2>
      <p>{{ newsPreview }}</p>
      <button class="btn">READ MORE</button>
    </div>
  </div>
</template>
<style lang="scss">
.banner {
  color: white;
  font-weight: 600;
  padding: 200px 100px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  h3 {
    font-size: 1rem;
    letter-spacing: 0.5rem;
  }
  h2 {
    font-size: 40px;
  }
  * {
    margin-bottom: 30px;
  }
  .btn {
    color: white;
    background-color: rgb(19, 19, 19);
  }
}
</style>
