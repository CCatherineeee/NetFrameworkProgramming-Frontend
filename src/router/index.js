import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register/Register.vue'
import PasswordLogin from '../views/Login/passwordLogin.vue'
import PhoneLogin from '../views/Login/phoneLogin.vue'

const routes = [
  {
    path: '/',
    name: '/',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/password-login',
    name: 'password-login',
    component: PasswordLogin
  },
  {
    path: '/phone-login',
    name: 'phone-login',
    component: PhoneLogin
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
