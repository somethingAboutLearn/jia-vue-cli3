import Vue from 'vue'

function getList({ time, limit }) {
  let data = {
    time,
    limit
  }
  return Vue.axios({
    url: '/music',
    method: 'get',
    params: data
  })
}

export { getList }
