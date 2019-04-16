import Vue from 'vue'

function getList({ time, limit }) {
  let data = {
    time,
    limit
  }
  return Vue.axios({
    url: '/video',
    method: 'get',
    params: data
  })
}

export { getList }
