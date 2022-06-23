import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import("@/views/Dashboard.vue")
  },
  {
    path: '/car',
    name: 'carRental',
    component: () => import("@/views/CarRental.vue")
  },
  {
    path: '/selectcar',
    name: 'selectCar',
    component: () => import("@/views/selectCar.vue")
  },
  {
    path: '/detailcar',
    name: 'detailCar',
    component: () => import("@/views/detailCar.vue")
  },
  {
    path: '/cartedit',
    name: 'cartEdit',
    component: () => import("@/views/cartEdit.vue")
  },
  {
    path: '/cartdialog',
    name: 'cartDialog',
    component: () => import("@/views/cartDialog.vue")
  },
  {
    path: '/cartcheckout',
    name: 'cartCheckOut',
    component: () => import("@/views/CartCheckOut.vue")
  },
  {
    path: '/air-ticket',
    name: 'Air-ticket',
    component: () => import("@/views/Air-ticket.vue")
  },
  
  {
    path: '/air-oneway-ticket',
    name: 'Air-oneway-ticket',
    component: () => import("@/views/Air-oneway-ticket.vue")
  },
  {
    path: '/air-oneway-payment',
    name: 'Air-oneway-payment',
    component: () => import("@/views/Air-oneway-payment.vue")
  },
  {
    path: '/air-twoway-out',
    name: 'Air-twoway-ticket',
    component: () => import("@/views/Air-twoway-out.vue")
  },
  {
    path: '/air-twoway-in',
    name: 'Air-twoway-in',
    component: () => import("@/views/Air-twoway-in.vue")
  }
]

const router = createRouter({
  history: createWebHistory("#"),
  routes,
})

export default router
