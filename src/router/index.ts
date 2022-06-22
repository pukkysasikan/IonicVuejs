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
    component: () => import("@/views/SelectCar.vue")
  },
  {
    path: '/detailcar',
    name: 'detailCar',
    component: () => import("@/views/DetailCar.vue")
  },
  {
    path: '/cartedit',
    name: 'cartEdit',
    component: () => import("@/views/CartEdit.vue")
  },
  {
    path: '/cartdialog',
    name: 'cartDialog',
    component: () => import("@/views/CartDialog.vue")
  },
  {
    path: '/cartcheckout',
    name: 'cartCheckOut',
    component: () => import("@/views/CartCheckOut.vue")
  }
]

const router = createRouter({
  history: createWebHistory("#"),
  routes,
})

export default router
