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
      <div class="forumCard">
        <div class="forumIcon"><i :class="icon"></i></div>
        <h4>{{ title }}</h4>
      </div>
    </a>
  </div>
</template>
<style lang="scss">
.col-md-3 {
  a {
    text-decoration: none;
    .forumCard {
      background-color: white;
      padding: 50px 0;
      text-align: center;
      .forumIcon {
        width: 6rem;
        height: 6rem;
        margin: 0 auto;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ff8d61;
        font-size: 3rem;
        color: white;
      }
      h4 {
        font-weight: 600;
        margin-top: 10px;
        color: #191919;
      }
    }
  }
}
</style>
