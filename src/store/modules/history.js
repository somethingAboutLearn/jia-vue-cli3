// 加载页面的 history 压栈记录，根据 history.state.key 属性判断 入栈/出栈
const state = {
  historyList: []
}

const getters = {}

const actions = {}

const mutations = {
  setValue(state, { key, value }) {
    state[key] = value
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
