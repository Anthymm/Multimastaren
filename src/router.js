import { createRouter, createWebHashHistory } from "vue-router";
import TestView from "./views/TestView.vue";
import HomeView from "./views/HomeView.vue";
import ScoreView from "./views/ScoreView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: "/",
    },
    {
      component: TestView,
      path: "/test",
    },
    {
      component: ScoreView,
      path: "/score",
    },
  ],
});
