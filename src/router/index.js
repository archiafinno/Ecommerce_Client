import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: {
      name: 'Login'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token')
      if (!token) {
        next()
      } else {
        next({ path: '/dashboard' })
      }
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    redirect: {
      name: 'Table'
    },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('../components/Table.vue')
      },
      {
        path: 'formProduct',
        name: 'FormProduct',
        component: () => import('../components/FormProduct.vue')
      },
      {
        path: 'editProduct',
        name: 'EditProduct',
        component: () => import('../components/FormEdit.vue'),
        props: true
      }
    ],
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token')
      if (token) {
        next()
      } else {
        next({ path: '/login' })
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
