import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 10,
    num: 2
  },
  getters: {
    getcount: state => {
      return state.count
    }
  },
  mutations: {
    changecount: (state, value) => {
      state.count += value
    }
  },
  actions: {
    changeasync({ commit }, value) {
      setTimeout(() => {
        commit('changecount', value)
      }, 1000)
    }
  }
});
