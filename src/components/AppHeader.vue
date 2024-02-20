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
  <header>
    <div class="container">
      <app-logo />
      <app-nav :navLinks="navLinks" />
      <div class="btn">JOIN US</div>
    </div>
  </header>
</template>
<style lang="scss"></style>
