import Main from '/src/pages/Main.vue'
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "../pages/PostPage.vue";
import CurrentPost from "../pages/CurrentPost.vue"
import About from "../pages/About.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: CurrentPost
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})


export default router