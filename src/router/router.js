export default [
    { path: '/', redirect: '/dio' },
    {
        path: '/dio',
        name: 'dio',
        meta: { index: 0 },
        component: () => import('@/views/Dio.vue')
    }
]
