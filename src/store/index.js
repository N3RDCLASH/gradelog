import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      isSignedUp: false,
      isLoggedIn: false,
      registerCompleted: false,
      data: null
    }
  },
  mutations: {
    SET_SIGN_UP_STATUS(state, value) {
      state.user.isSignedUp = value
    },
    SET_REGISTER_STATUS(state, value) {
      state.user.registerCompleted = value
    }, SET_LOGGED_IN(state, value) {
      state.user.isLoggedIn = value
    },
    SET_USER(state, data) {
      state.user.data = data
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
          photo: user.photoURL
        });
      } else {
        commit("SET_USER", null);
      }
    }

  },
  getters: {
    user(state) {
      return state.user
    },

  },
  modules: {
  }
})
