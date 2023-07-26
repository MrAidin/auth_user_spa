import {createRouter, createWebHistory} from 'vue-router';
import Home from "../components/Home.vue";


const routes = [
    {
        path: '/',
        name:'Home',
        component: Home,
        meta: {
            progress: {
                func: [
                    { call: "color", modifier: "temp", argument: "#ffb000" },
                    { call: "fail", modifier: "temp", argument: "#6e0000" },
                    { call: "location", modifier: "temp", argument: "top" },
                    {
                        call: "transition",
                        modifier: "temp",
                        argument: { speed: "1.5s", opacity: "0.6s", termination: 400 },
                    },
                ],
            },
        },
    },
    {
        path: '/login',
        name:'Login',
        component: () => import('../components/Login.vue'),
        meta: {
            progress: {
                func: [
                    { call: "color", modifier: "temp", argument: "#ffb000" },
                    { call: "fail", modifier: "temp", argument: "#6e0000" },
                    { call: "location", modifier: "temp", argument: "top" },
                    {
                        call: "transition",
                        modifier: "temp",
                        argument: { speed: "1.5s", opacity: "0.6s", termination: 400 },
                    },
                ],
            },
        },
    },
    {
        path: '/register',
        name:'Register',
        component: () => import('../components/Register.vue'),
        meta: {
            progress: {
                func: [
                    { call: "color", modifier: "temp", argument: "#ffb000" },
                    { call: "fail", modifier: "temp", argument: "#6e0000" },
                    { call: "location", modifier: "temp", argument: "top" },
                    {
                        call: "transition",
                        modifier: "temp",
                        argument: { speed: "1.5s", opacity: "0.6s", termination: 400 },
                    },
                ],
            },
        },
    },

];
const router = createRouter({
    history: createWebHistory(),
    routes: routes

});

export default router;

