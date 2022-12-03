import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/views/Login.vue";
import Accueil from "@/views/Accueil.vue";
import Accounts from "@/views/Accounts.vue";
import HistoryView from "@/views/HistoryView.vue";
import RibView from "@/views/RibView.vue";
import OperationDetail from "@/views/OperationDetail.vue";
import store from '@/store';
import ErrorView from "@/views/ErrorView.vue";
import CardsView from "@/views/CardsView.vue";
import TransactionStatement from "@/views/TransactionStatement.vue";
import BenefView from "@/views/BenefView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cards',
    name: 'Cards',
    component: CardsView,
  },
  {
    path: '/beneficiaries',
    name: 'Benefs',
    component: BenefView,
  },
  {
    path: '/accueil',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/comptes',
    name: 'Comptes',
    component: Accounts
  },
  {
    path: '/history',
    name: 'History',
    component: HistoryView
  },
  {
    path: '/operation/:monthKey/:operationKey',
    name: 'Detail',
    component: OperationDetail,
    beforeEnter: (to, from, next) => {

      store.commit('setCurrentOperation', store.getters.getOperation({monthKey: to.params.monthKey, operationKey: to.params.operationKey}));
      next();
    }
  },
  {
    path: '/error/:title',
    name: 'Error',
    component: ErrorView,
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
router.beforeEach((to, from, next) => {
  store.commit('hideMenu');
  next();
})
export default router
