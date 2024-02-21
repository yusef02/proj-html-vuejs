<script>
export default {
  data() {
    return {};
  },
  props: ["hero"],
  methods: {},
};
</script>
<template>
  <section
    class="hero"
    :style="{ backgroundImage: `url('${hero.bgImageSrc}')` }"
  >
    <div class="container hero__container">
      <h1 class="hero__title">{{ hero.title }}</h1>
      <p class="hero__desc">{{ hero.desc }}</p>
      <div class="btn">GET AVADA NOW!</div>
    </div>
  </section>
  <section class="heroMotto">
    <div class="container heroMotto__container">
      <div class="col-md-6 mx-auto">
        <h3>{{ hero.motto.title }}</h3>
        <p>{{ hero.motto.desc }}</p>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.hero {
  &__container {
    color: white;
    padding: 200px 0;
    .hero__title {
      font-size: 100px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    .hero__desc {
      font-size: 20px;
      margin-bottom: 40px;
    }
    .btn {
      color: white;
      background-color: #28afc3;
      padding: 10px 20px;
    }
  }
}

.heroMotto {
  &__container {
    color: #191919;
    background-color: #f2f2f2;
    padding: 100px 0;
    text-align: center;
  }
}
</style>
