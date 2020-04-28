import Vue from "vue";
import Router from "vue-router";

import Home from "../components/GitHubIssues/GithubIssues.vue";
import Details from "../components/Details/Details.vue";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/details",
      name: "Details",
      component: Details,
    },
  ],
});
