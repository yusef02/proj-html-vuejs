<script>
export default {
  data() {
    return {
      joinUs: {
        title: "Hey join our community",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur maxime rerum rem, amet nisi assumenda harum iste accusamus et soluta  doloribus sapiente eum eos. Unde fuga necessitatibus accusantium esse  eum!",
        bgImageSectionPath: "/join_now_cta_bg.jpg",
      },
      contactUs: {
        title: "Subscibe to our Newsletter",
      },
    };
  },
};
</script>
<template>
  <section
    class="joinUs"
    :style="{ backgroundImage: `url('${joinUs.bgImageSectionPath}')` }"
  >
    <div class="container joinUs__container">
      <div class="col-md-6 mx-auto">
        <h2>{{ joinUs.title }}</h2>
        <p>{{ joinUs.desc }}</p>
        <button class="btn">SIGN UP</button>
      </div>
    </div>
  </section>
  <section id="contactUs">
    <div class="container">
      <h2>{{ contactUs.title }}</h2>
      <div class="col-md-6 mx-auto">
        <div class="input-group">
          <input
            type="email"
            placeholder="Insert your mail"
            class="form-control"
          />
          <button class="btn">SEND</button>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.joinUs {
  color: white;
  &__container {
    padding: 100px 0;
    text-align: center;
    * {
      margin-bottom: 20px;
    }
    h2 {
      font-size: 4rem;
      font-weight: 600;
    }

    .btn {
      color: white;
      background-color: #28afc3;
      padding: 10px 20px;
    }
  }
}
#contactUs {
  padding: 70px 0;
  background-color: #f2f2f2;
  text-align: center;
  * {
    margin-bottom: 20px;
  }
  .btn {
    color: white;
    background-color: #191919;
    padding: 10px 20px;
  }
}
</style>
