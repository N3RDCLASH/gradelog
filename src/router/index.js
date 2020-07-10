import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import SchoolYear from '@/views/SchoolYear.vue'
import Grades from '@/views/Grades/Grades.vue'
import Subjects from '@/views/Subjects/Subjects.vue'
import DashboardLayout from '@/layout/DashboardLayout'

import firebase from 'firebase/app'

// const auth = firebase.auth
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: DashboardLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'home', /* changed */
        name: 'Home',
        component: Home
      },
      {
        path: 'results',
        redirect: 'results/schoolyear', /* changed */
        name: 'Results',
        component: {
          render(c) {
            return c("router-view");
          }
        },
        children: [
          {
            path: 'schoolyear',
            name: 'Schoolyear',
            component: SchoolYear
          },
          {
            path: 'grades',
            name: 'Grades',
            component: Grades
          }
        ]
      },
      {
        path: 'subjects', /* changed */
        name: 'Subjects',
        component: Subjects
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  }
  ,
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  ,
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser
  if (requiresAuth && !isAuthenticated) {
    next("/login")
  } else {
    console.log(isAuthenticated) 
    next()
  }

  if (to.name == "Login" && isAuthenticated || to.name == "Register" && isAuthenticated) {
    next("/home")
  } else {
    next()
  }
})
export default router
