<script>
import CardForum from "./CardForum.vue";
export default {
  data() {
    return {
      forumLinks: [
        {
          forumTitle: "News & Community",
          forumTag: "#",
          forumIcon: "",
        },
        {
          forumTitle: "Apple Forum",
          forumTag: "#",
          forumIcon: "",
        },
        {
          forumTitle: "Microsoft Forum",
          forumTag: "#",
          forumIcon: "",
        },
        {
          forumTitle: "Android Forum",
          forumTag: "#",
          forumIcon: "General Discussion",
        },
        {
          forumTitle: "App & Software",
          forumTag: "#",
          forumIcon: "",
        },
        {
          forumTitle: "Gadgets & Stuff",
          forumTag: "#",
          forumIcon: "",
        },
        {
          forumTitle: "Tutorial & Guides",
          forumTag: "#",
          forumIcon: "",
        },
      ],
    };
  },
  components: { CardForum },
};
</script>
<template>
  <section>
    <div class="container">
      <h3>section name</h3>
      <h2>forum</h2>
      <div class="row">
        <card-forum
          v-for="obj in forumLinks"
          :title="obj.forumTitle"
          :tag="obj.forumTag"
          :icon="obj.forumIcon"
        />
      </div>
    </div>
    <section></section>
  </section>
</template>
<style lang="scss"></style>
