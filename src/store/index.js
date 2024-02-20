import { reactive } from "vue";

export const store = reactive({
  logo: "logo.png",
  allArticlesDb: [],
  uriServer: "http://localhost:3000",

  recentArticle: {
    articles: [],
    getLastArticles() {
      let maxDate = new Date();
      store.formatDate(maxDate.setDate(maxDate.getDate() - 10));
      console.log(store.allArticlesDb);
      this.articles.push(
        ...store.allArticlesDb.filter((article) => article.date >= this.maxDate)
      );
      console.log(this.articles);
      return this.articles;
    },
  },

  formatDate(date) {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  },
});
