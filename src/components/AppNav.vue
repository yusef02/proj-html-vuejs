<script>
export default {
  data() {
    return {};
  },
  props: ["navLinks"],
};
</script>
<template>
  <div>
    <ul>
      <li v-for="tag in navLinks">
        <a :href="tag.tag">{{ tag.tagText }}</a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss"></style>
