import { createRouter, createWebHistory,createWebHashHistory } from "vue-router";

const routes = [
    // {
    //     path: "/",
    //     component: () => import('../components/home.vue'),
    // },
    {
        path: "/",
        component: () => import('../components/business.vue')
    },
    {
        path: "/core",
        component: () => import('../components/core.vue')
    },
    {
        path: "/achievement",
        component: () => import('../components/achievement.vue')
    },
    {
        path: "/partner",
        component: () => import('../components/partner.vue')
    },
    {
        path: "/about",
        component: () => import('../components/about.vue')
    },
    {
        path: "/contact",
        component: () => import('../components/contact.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// router.afterEach((to, from) => {
//     history.pushState(null, null, location.protocol + '//' + location.host + '/#' + to.path)
//     })
export default router