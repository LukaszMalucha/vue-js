import Vue from "vue";
import Router from "vue-router";
import AuthHandler from './components/AuthHandler.vue';
import Home from "./components/Home.vue";

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: '/oauth2/callback',
      name: "AuthHandler",
      component: AuthHandler,
    },
  ]
})