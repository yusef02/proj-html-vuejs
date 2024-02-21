<script>
import { store } from "../store";

export default {
  data() {
    return { store };
  },
  methods: {},
};
</script>
<template>
  <div><img :src="store.logo" alt="logo" /></div>
</template>
<style lang="scss"></style>
