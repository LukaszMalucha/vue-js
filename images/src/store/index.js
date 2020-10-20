import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';
import images from './modules/images';


// Connect Vue with Vuex
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    images
  }
});