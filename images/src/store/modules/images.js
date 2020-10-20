import api from "../../api/imgur.js";
import router from "../../router.js"

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};


const actions = {
// reference to all state stored in Vuex store
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit('setImages', response.data.data);
  },
  async uploadImages({ rootState }, images) {
    const { token } = rootState.auth;
    await api.uploadImages(images, token);
    router.push('/')
  }
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}