import Vue from 'vue'

function getList({ page, limit, keyword }) {
  let data = {
    page,
    limit,
    keyword
  }
  return Vue.axios({
    url: '/music',
    method: 'get',
    params: data
  })
}

export { getList }
