import api from '../../api/imgur';

const state = {
  token: null
};

const getters = {
// Check if token exists or not
  isLoggedIn: state => !!state.token
};


const actions = {
  login: () => {
    api.login();
  },
  logout: ({ commit }) => {
    commit('setToken', null);
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