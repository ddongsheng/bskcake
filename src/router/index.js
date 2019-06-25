import Vue from 'vue'
import Router from 'vue-router'
import api from '@/core/api/index'
// console.log(global.getParam())


Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: '/',
    component: resolve => require(['@/components/home'], resolve),
    redirect:'index',
    children: [{
        path: 'index',
        name: 'index',
        meta:{
          keepAlive:false,
   
        },
        component: resolve => require(['@/components/main/index'], resolve)
      },
   
      {
        path: 'class',
        name: 'class',
        meta:{
          keepAlive:false,
        },
        component: resolve => require(['@/components/main/class'], resolve),
      },
      {
        path: 'cart',
        name: 'cart',
        component: resolve => require(['@/components/main/cart'], resolve),
      },
      {
        path: 'user',
        name: 'user',
        component: resolve => require(['@/components/main/user'], resolve),
      },
      {
        path: 'show',
        name: 'show',
        meta:{
          keepAlive:false,
        },
        component: resolve => require(['@/components/main/show'], resolve),
      },
      {
        path: 'edit',
        name: 'edit',
        component: resolve => require(['@/components/main/edit'], resolve),
      },
      {
        path: 'userinfo',
        name: 'userinfo',
        component: resolve => require(['@/components/main/userinfo'], resolve),
      }
    ]
  }]
})



export default router;
