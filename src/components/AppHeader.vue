<script>
import AppLogo from "./AppLogo.vue";
import AppNav from "./AppNav.vue";

export default {
  data() {
    return {
      navLinks: [
        {
          tag: "#hero",
          tagText: "Home",
        },
        {
          tag: "#news",
          tagText: "News",
        },
        {
          tag: "#apple",
          tagText: "Apple",
        },
        {
          tag: "#microsoft",
          tagText: "Microsoft",
        },
        {
          tag: "#android",
          tagText: "Android",
        },
        {
          tag: "#forums",
          tagText: "Forums",
        },
        {
          tag: "#contactUs",
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
  position: sticky;
  top: 0;
  z-index: 2;
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
      .navList {
        list-style: none;
        padding-left: 0;
        margin-bottom: 0;
        display: flex;
        flex-direction: row;
        align-items: center;

        gap: 10px;
        li {
          padding: 10px;
          a {
            text-decoration: none;
            color: inherit;
          }
        }
      }
      .btn {
        color: white;
        background-color: rgb(19, 19, 19);
      }
    }
  }
}
</style>
