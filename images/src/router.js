import Vue from "vue";
import Router from "vue-router";
import AuthHandler from './components/AuthHandler.vue';
import Images from "./components/Images.vue";
import UploadForm from "./components/UploadForm.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Images",
      component: Images,
    },
    {
      path: '/oauth2/callback',
      name: "AuthHandler",
      component: AuthHandler,
    },
    {
      path: '/upload',
      name: "UploadForm",
      component: UploadForm,
    },
  ]
})