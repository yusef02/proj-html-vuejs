<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import { store } from "./store";
import axios from "axios";

export default {
  data() {
    return {};
  },
  components: { AppHeader, AppMain, AppFooter },
  created() {
    axios.get(`${store.uriServer}/articles`).then((res) => {
      res.data.forEach((article) => store.allArticlesDb.push(article));
    });
  },
};
</script>
<template>
  <app-header />
  <app-main />
  <app-footer />
</template>
<style lang="scss">
@use "./assets/style/general.scss";
</style>
