<script>
export default {
  data() {
    return {};
  },
  props: ["navLinks"],
};
</script>
<template>
  <ul class="navList">
    <li v-for="tag in navLinks">
      <a :href="tag.tag">{{ tag.tagText }}</a>
    </li>
  </ul>
</template>
<style lang="scss"></style>
