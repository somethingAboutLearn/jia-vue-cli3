const routes = [
  {
    path: '/',
    redirect: '/picture' //  path 为 '/' 时，重定向到 '/picture' ，设置默认选中该导航
  },
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/Index.vue'),
    meta: { title: '首页' },
    children: [
      {
        path: '/picture',
        name: 'picture',
        component: () => import('@/views/Picture.vue'),
        meta: { title: '图片' }
      },
      {
        path: '/music',
        name: 'music',
        component: () => import('@/views/Music.vue'),
        meta: { title: '音乐' }
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/Video.vue'),
        meta: { title: '视频' }
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/My.vue'),
        meta: { title: '我的' }
      }
    ]
  },
  {
    path: '*',
    name: 'notFount',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/404.vue')
  }
]

export default routes
