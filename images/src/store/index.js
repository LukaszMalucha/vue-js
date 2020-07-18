import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';

// Connect Vue with Vuex
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth
  }
});