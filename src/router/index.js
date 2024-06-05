import Vue from "vue";
import Router from "vue-router";
import KeyWordsPage from "@/components/KeyWordsPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/keywords",
      name: "keywords",
      component: KeyWordsPage,
    },
  ],
});
