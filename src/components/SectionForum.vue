<script>
import CardForum from "./CardForum.vue";
export default {
  data() {
    return {
      forumLinks: [
        {
          forumTitle: "News & Community",
          forumTag: "#",
          forumIcon: "fa-solid fa-file-lines",
        },
        {
          forumTitle: "Apple Forum",
          forumTag: "#apple",
          forumIcon: "fa-brands fa-apple",
        },
        {
          forumTitle: "Microsoft Forum",
          forumTag: "#microsoft",
          forumIcon: "fa-brands fa-windows",
        },
        {
          forumTitle: "Android Forum",
          forumTag: "#android",
          forumIcon: "fa-brands fa-android",
        },
        {
          forumTitle: "General Discussion",
          forumTag: "#",
          forumIcon: "fa-solid fa-mug-saucer",
        },
        {
          forumTitle: "App & Software",
          forumTag: "#",
          forumIcon: "fa-solid fa-cubes",
        },
        {
          forumTitle: "Gadgets & Stuff",
          forumTag: "#",
          forumIcon: "fa-solid fa-laptop",
        },
        {
          forumTitle: "Tutorial & Guides",
          forumTag: "#",
          forumIcon: "fa-solid fa-wrench",
        },
      ],
    };
  },
  components: { CardForum },
};
</script>
<template>
  <section id="forums">
    <div class="container">
      <h3 class="sectionTitle">SECTION FORUMS</h3>
      <h2 class="sectionTitle">Forums Section</h2>
      <div class="row gy-4">
        <card-forum
          v-for="obj in forumLinks"
          :title="obj.forumTitle"
          :tag="obj.forumTag"
          :icon="obj.forumIcon"
        />
      </div>
    </div>
    <section class="section--dark">GO TO OUR FORUMS</section>
  </section>
</template>
<style lang="scss">
#forums {
  padding-top: 50px;
  background-color: #f2f2f2;
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
      padding: 50px 0;
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
