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
      <div class="socialIcon"><i :class="tag.icon"></i></div>
    </li>
  </ul>
</template>
<style lang="scss"></style>
