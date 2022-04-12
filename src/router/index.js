import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register/Register.vue'
import PasswordLogin from '../views/Login/passwordLogin.vue'
import PhoneLogin from '../views/Login/phoneLogin.vue'
import MorePost from "@/views/Post/MorePost";
import NewPost from "@/views/Post/NewPost";

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
    path: '/userHome',
    name: 'userHome',
    component: () => import('@/views/User/userHome'),
    meta: {title: '用户中心'},
    children: [
      {
        path: '/userHome/myOrder',
        name: 'myOrder',
        component: () => import('@/views/User/myOrder'),
        meta: {title: '我的订单'}},
      {
        path: '/userHome/myChart',
        name: 'myChart',
        component: () => import('@/views/User/myCart'),
        meta: {title: '我的购物车'},
        // children: [
        //   {
        //     path: '/createOrder',
        //     name: 'selectAddress',
        //     component: () => import('@/views/payment/selectAddress'),
        //     meta: {title: '选择收货地址'},
        //     children: [{
        //       path: '/createOrder/payment',
        //       name: 'createOrder',
        //       component: () => import('@/views/payment/createOrder'),
        //       meta: {title: '创建订单'}
        //     }]
        //   }
        // ]
      },
      {
        path: '/userHome/mySecurity',
        name: 'mySecurity',
        component: () => import('@/views/User/mySecurity'),
        meta: {title: '登录和安全'},
        children: [{
          path: '/userHome/mySecurity/resetMyPhone',
          name: 'resetMyPhone',
          component: () => import('@/views/User/resetMyPhone'),
          meta: {title: '重置手机号'}
        },
          {
            path: '/userHome/mySecurity/resetMyPassword',
            name: 'resetMyPassword',
            component: () => import('@/views/User/resetMyPassword'),
            meta: {title: '重置密码'}
          }]
      },
      {
        path: '/userHome/myAddress',
        name: 'myAddress',
        component: () => import('@/views/User/myAddress'),
        meta: {title: '我的地址'}
      }
    ]}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
