import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    // Home
    {
        path: '/',
        name: 'home',
        alias: '/home',
        component: () => import('@/views/Home.vue'),
        meta: {
            title: 'home',
        },
    },
    // 입력
    {
        path: '/write',
        name: 'write',
        alias: '/write',
        component: () => import('@/views/Write.vue'),
        meta: {
            title: 'write',
        },
    },
    // list
    {
        path: '/list',
        name: 'list',
        alias: '/list',
        component: () => import('@/views/List.vue'),
        meta: {
            title: 'list',
        },
    },
    // 신고하
    {
        path: '/Report',
        name: 'report',
        alias: '/report',
        component: () => import('@/views/Report.vue'),
        meta: {
            title: 'report',
        },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location) {
    // console.log(this)
    return originalPush.call(this, location).catch(err => {
        if (err.name !== 'NavigationDuplicated') throw err;
    });
};

export default router;
