import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register/Register.vue'
import PasswordLogin from '../views/Login/passwordLogin.vue'
import PhoneLogin from '../views/Login/phoneLogin.vue'
import MorePost from "@/views/Post/MorePost";
import NewPost from "@/views/Post/NewPost";
import PostDetail from "@/views/Post/PostDetail";

const routes = [
  {
    path: '/',
    name: '/',
    component: Home
  },
  {
    path: '/more-post',
    name: 'more-post',
    component: MorePost
  },
  {
    path: '/new-post',
    name: 'new-post',
    component: NewPost
  },
  {
    path: '/post-detail/:id',
    name: 'post-detail',
    component: PostDetail
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
  },
  {
    path: '/admin-home',
    name: 'adminHome',
    component: ()=> import('@/views/Admin/AdminHome')
  },
  {
    path: '/userHome',
    name: 'userHome',
    component: () => import('@/views/User/userHome'),
    meta: {title: '用户中心'},
    children: [
      {
        path: '/userHome/profileHome',
        name: 'profileHome',
        component: () => import('@/views/User/profileHome'),
        children:[
          {
            path: '/userHome/profile',
            name: 'profile',
            component: () => import('@/views/User/Profile'),
          },
          {
            path: '/userHome/resetPassword',
            name: 'resetPassword',
            component: () => import('@/views/User/resetPassword'),
          }
        ]
      },
      {
        path: '/userHome/follow',
        name: 'follow',
        component: () => import('@/views/User/Follow'),
      },
      {
        path: '/userHome/favorite',
        name: 'Favorite',
        component: () => import('@/views/User/Favorite'),
      },
      {
        path: '/userHome/posts',
        name: 'Post',
        component: () => import('@/views/User/Post'),
      }
    ],
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
