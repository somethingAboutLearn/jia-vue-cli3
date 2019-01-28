const routes = [
    {
        path: '/',
        name: '',
        component: () => import('@/views/Index.vue'),
        children: [
            {
                path: '/music',
                name: 'music',
                component: () => import('@/views/Music.vue')
            },
            {
                path: '/video',
                name: 'video',
                component: () => import('@/views/Video.vue')
            },
            {
                path: '/my',
                name: 'my',
                component: () => import('@/views/My.vue')
            },
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