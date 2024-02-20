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
<style lang="scss">
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
</style>
