import Vue from 'vue'
import Vuex from 'vuex'

import history from './modules/history'
import music from './modules/music'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    history,
    music
  }
})
