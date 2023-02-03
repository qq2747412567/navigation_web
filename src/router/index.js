import {createRouter, createWebHashHistory} from "vue-router"

const routes = [
    {
        path: '/',
        name: "navigationIndex",
        component: () => import('../views/NavigationIndex.vue')
    }
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

// router.beforeEach((to,form,next) => {
//     console.log(to);
//     next();
// });


export default router