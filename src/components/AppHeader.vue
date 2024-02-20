<script>
import AppLogo from "./AppLogo.vue";
import AppNav from "./AppNav.vue";

export default {
  data() {
    return {
      navLinks: [
        {
          tag: "#",
          tagText: "Home",
        },
        {
          tag: "#",
          tagText: "Apple",
        },
        {
          tag: "#",
          tagText: "Microsoft",
        },
        {
          tag: "#",
          tagText: "Android",
        },
        {
          tag: "#",
          tagText: "Forums",
        },
        {
          tag: "#",
          tagText: "Contact us",
        },
      ],
    };
  },
  components: { AppLogo, AppNav },
};
</script>
<template>
  <header id="header">
    <div class="container">
      <div class="header__block">
        <app-logo />
      </div>
      <div class="header__block">
        <app-nav :navLinks="navLinks" />
        <div class="btn">JOIN US</div>
      </div>
    </div>
  </header>
</template>
<style lang="scss">
#header {
  color: white;
  background-color: #28afc3;
  padding: 20px 0;
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .header__block {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 30px;
      .btn {
        color: white;
        background-color: rgb(19, 19, 19);
      }
    }
  }
}
</style>
