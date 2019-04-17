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
router.beforeEach((to, from, next) => {
  if (to.path) {
    _hmt.push(['_trackPageview', '/#' + to.fullPath])
  }
  next()
})

export default router
