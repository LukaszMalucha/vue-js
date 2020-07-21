import api from '../../api/imgur.js';
import qs from 'qs'
import router from '../../router.js'

const state = {
  token: window.localStorage.getItem('imgur_token')
};

const getters = {
// Check if token exists or not
  isLoggedIn: state => !!state.token
};


const actions = {
  login: () => {
    api.login();
  },
  finalizeLogin( { commit }, hash ) {
    const query = qs.parse(hash.replace('#', ''));
    commit('setToken', query.access_token);
    window.localStorage.setItem('imgur_token', query.access_token);
    router.push('/');
  },
  logout: ({ commit }) => {
    commit('setToken', null);
    window.localStorage.removeItem('imgur_token');
  }
};

const mutations = {
// Update token
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}