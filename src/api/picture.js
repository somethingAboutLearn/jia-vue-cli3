import Vue from 'vue'

function getList({ time, limit }) {
  let data = {
    time,
    limit
  }
  return Vue.axios({
    url: '/picture',
    method: 'get',
    params: data
  })
}

export { getList }
