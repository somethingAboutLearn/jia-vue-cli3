const state = {
  currentMusicItem: null
}

const getter = {}

const actions = {}

const mutations = {
  setValue(state, { key, value }) {
    state[key] = value
  }
}

export default {
  namespaced: true,
  state,
  getter,
  actions,
  mutations
}
