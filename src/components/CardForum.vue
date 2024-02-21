<script>
export default {
  data() {
    return {};
  },
  props: ["title", "tag", "icon"],
};
</script>
<template>
  <div class="col-md-3">
    <a :href="tag">
      <img src="" alt="icon" />
      <p>{{ title }}</p>
    </a>
  </div>
</template>
<style lang="scss"></style>
