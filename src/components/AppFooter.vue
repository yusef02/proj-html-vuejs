<script>
import AppNav from "./AppNav.vue";
import AppSocials from "./AppSocials.vue";
export default {
  data() {
    return {
      companyInfo: {
        name: "AVADA FORUMS TECH",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod eos, nobis enim ex quos quas! Nobis facilis sapiente delectus nesciunt distinctio dicta laudantium sint perferendis dolorem. A quasi consectetur repudiandae.",
      },
      navLinksFooter: {
        groupFirst: {
          groupTitle: "lorem ipsum dolor",
          links: [
            {
              tag: "",
              tagText: "Lorem ipsum dolor sit amet.",
            },
            {
              tag: "",
              tagText: "Lorem ipsum dolor sit amet.",
            },
            {
              tag: "",
              tagText: "Lorem ipsum dolor sit amet.",
            },
            {
              tag: "",
              tagText: "Lorem ipsum dolor sit amet.",
            },
            {
              tag: "",
              tagText: "Lorem ipsum dolor sit amet.",
            },
            {
              tag: "",
              tagText: "Lorem ipsum dolor sit amet.",
            },
          ],
        },

        groupSecond: {
          groupTitle: "lorem ipsum dolor",
          links: [
            {
              tag: "",
              tagText: "Lorem ipsum dolor sit amet.",
            },
            {
              tag: "",
              tagText: "Lorem ipsum dolor sit amet.",
            },
            {
              tag: "",
              tagText: "Lorem ipsum dolor sit amet.",
            },
            {
              tag: "",
              tagText: "Lorem ipsum dolor sit amet.",
            },
            {
              tag: "",
              tagText: "Lorem ipsum dolor sit amet.",
            },
            {
              tag: "",
              tagText: "Lorem ipsum dolor sit amet.",
            },
          ],
        },

        groupThird: {
          groupTitle: "lorem ipsum dolor",
          links: [
            {
              tag: "",
              tagText: "Lorem ipsum dolor sit amet.",
            },
            {
              tag: "",
              tagText: "Lorem ipsum dolor sit amet.",
            },
            {
              tag: "",
              tagText: "Lorem ipsum dolor sit amet.",
            },
            {
              tag: "",
              tagText: "Lorem ipsum dolor sit amet.",
            },
            {
              tag: "",
              tagText: "Lorem ipsum dolor sit amet.",
            },
            {
              tag: "",
              tagText: "Lorem ipsum dolor sit amet.",
            },
          ],
        },
      },
      navSocials: [
        { tag: "", icon: "fa-brands fa-youtube" },
        { tag: "", icon: "fa-brands fa-youtube" },
        { tag: "", icon: "fa-brands fa-youtube" },
        { tag: "", icon: "fa-brands fa-youtube" },
      ],
      copyright: "copyright copyright copyright copyright",
    };
  },
  components: { AppNav, AppSocials },
};
</script>
<template>
  <footer>
    <section class="sectionNavLinks">
      <div class="container">
        <div class="row flex-row">
          <div class="col-md-3">
            <h4>{{ companyInfo.name }}</h4>
            <p>{{ companyInfo.desc }}</p>
          </div>
          <div v-for="section in navLinksFooter" class="col-md-3">
            <h4>{{ section.groupTitle }}</h4>
            <app-nav :navLinks="section.links" />
          </div>
        </div>
      </div>
    </section>
    <section class="sectionCopySocials">
      <div class="container">
        <div>
          <span>{{ copyright }}</span>
        </div>
        <div>
          <app-socials :navLinks="navSocials" />
        </div>
      </div>
    </section>
  </footer>
</template>
<style lang="scss">
footer {
  .sectionNavLinks {
    padding: 100px;
    .navList {
      list-style: none;
      padding-left: 0;
      margin-bottom: 0;
      display: flex;
      flex-direction: column;

      li {
        padding: 10px;
        a {
          text-decoration: none;
          color: inherit;
        }
      }
    }
  }
  .sectionCopySocials > .container {
    padding: 50px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .navList {
      list-style: none;
      padding-left: 0;
      margin-bottom: 0;
      display: flex;
      flex-direction: row;

      li {
        padding: 10px;

        .socialIcon {
          width: 3rem;
          height: 3rem;
          margin: 0 auto;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: black;
          font-size: 1.5rem;
          color: white;
        }
      }
    }
  }
}
</style>
