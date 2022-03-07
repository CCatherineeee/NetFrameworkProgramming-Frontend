import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from "../views/Register/Register.vue";
import passwordLogin from "../views/Login/passwordLogin.vue"
import phoneLogin from "../views/Login/phoneLogin";

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/passwordLogin',
    name: 'passwordLogin',
    component: passwordLogin
  },
  {
    path: '/phoneLogin',
    name: 'phoneLogin',
    component: phoneLogin
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
