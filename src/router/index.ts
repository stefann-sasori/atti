import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/views/Login.vue";
import Accueil from "@/views/Accueil.vue";
import HistoryView from "@/views/HistoryView.vue";
import RibView from "@/views/RibView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/accueil',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/history',
    name: 'History',
    component: HistoryView
  },
  {
    path: '/rib',
    name: 'Rib',
    component: RibView
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
