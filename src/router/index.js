import Vue from 'vue'
import Router from 'vue-router'
import routes from './index.config'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active'
  // linkExactActiveClass: 'active'
})

// 百度统计
router.afterEach((to, from, next) => {
  setTimeout(() => {
    var _hmt = _hmt || []
    ;(function() {
      document.getElementById('baidu_tj') &&
        document.getElementById('baidu_tj').remove()
      var hm = document.createElement('script')
      hm.src = 'https://hm.baidu.com/hm.js?2bf062dd1aa6e1327d8274e19f65bc19'
      hm.id = 'baidu_tj'
      var s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(hm, s)
    })()
  }, 0)
})

export default router
