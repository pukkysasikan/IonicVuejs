import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/dashboard'
  },
  {
    path: '/car',
    name: 'carRental',
    component: () => import("@/views/CarRental.vue")
  },
  {
    path: '/selectcar',
    name: 'selectcar',
    component: () => import("@/views/selectcar.vue")
  },
  {
    path: '/detailcar',
    name: 'detailcar',
    component: () => import("@/views/detailcar.vue")
  },
  {
    path: '/cartedit',
    name: 'cartedit',
    component: () => import("@/views/cartedit.vue")
  },
  {
    path: '/cartdialog',
    name: 'cartdialog',
    component: () => import("@/views/cartdialog.vue")
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
  },
  {
    path: '/detailtour',
    name: 'Detailtour',
    component: () => import("@/views/Detailtour.vue")
  },
  {
    path: '/selecttour',
    name: 'Selecttour',
    component: () => import("@/views/Selecttour.vue")
  },
  {
    path: '/hotelbooking',
    name: 'hotelbooking',
    component: () => import("@/views/hotelBooking.vue")
  },
  {
    path: '/selecthotel',
    name: 'Selecthotel',
    component: () => import("@/views/Selecthotel.vue")
  },
  {
    path: '/selectroom',
    name: 'Selectroom',
    component: () => import("@/views/Selectroom.vue")
  },
  {
    path: '/tabs/',
    component: () => import("@/views/tab.vue"),
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/Dashboard.vue')
      },
      {
        path: 'deal',
        component: () => import('@/views/deal.vue')
      },
      {
        path: 'booking',
        component: () => import('@/views/booking.vue')
      },
      
      {
        path: 'account',
        component: () => import('@/views/Account.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
