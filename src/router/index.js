import Vue from 'vue'
import VueRouter from 'vue-router'

import Agen from '../views/Agen'
import Home from '../views/Home.vue'
import Produk from '../views/Produk.vue'
import KeranjangBelanja from '../views/KeranjangBelanja.vue'
import Success from '../views/Success.vue'



Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/product/:id',
        props: true,
        name: 'product',
        component: Produk
    },
    {
        path: '/KeranjangBelanja',
        name: 'KeranjangBelanja',
        component: KeranjangBelanja
    },
    {
        path: '/Success',
        name: 'Success',
        component: Success
    },

    {
        path: '/Agen',
        name: 'Agen',
        component: Agen
    }


]

const router = new VueRouter({
    routes
})

export default router