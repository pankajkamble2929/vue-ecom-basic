import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "Home" */ "@/views/HomePage.vue"),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "Login" */ "@/views/LoginPage.vue"),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "Dashboard" */ "@/views/DashboardPage.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/add-product',
      name: 'add-product',
      component: () => import(/* webpackChunkName: "Add-Product" */ "@/views/AddProduct.vue"),
    },
  ]
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
    next('/login')
  } else if (to.name === 'dashboard' && !isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
