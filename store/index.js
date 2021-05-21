import { auth } from '@/plugins/firebase.js'

export const state = () => ({
  drawer: true,
  user: '',

})

export const getters= () => ({
  user(state) {
    return state.user
  },

  isAuthenticated(state) {
    return !!state.user
  }
})

export const actions = {
  signUp({ commit }, { email, password }) {
    return auth.createUserWithEmailAndPassword(email, password)
  },

  signInWithEmail({ commit }, { email, password }) {
    return auth.signInWithEmailAndPassword(email, password)
  },

  signOut() {
    return auth.signOut()
  }
}

export const mutations = {
  toggleDrawer(state) {
    state.drawer = !state.drawer
  },
  drawer(state, val) {
    state.drawer = val
  },
  setUser(state, payload) {
    state.user = payload
  }
}
