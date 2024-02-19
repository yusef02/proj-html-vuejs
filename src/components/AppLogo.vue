<script>
import { store } from "../store";

export default {
  data() {
    return { store };
  },
  methods: {
    getLogo() {
      return new URL(`/${store.logo}`, import.meta.url).href;
    },
  },
};
</script>
<template>
  <div><img :src="getLogo()" alt="logo" /></div>
</template>
<style lang="scss"></style>
