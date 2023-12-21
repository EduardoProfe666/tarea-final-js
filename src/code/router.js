import VLogin from '../components/login/VLogin.vue'
import VCreateAccount from '../components/login/VCreateAccount.vue'
import VPrincipal from '../components/main/VPrincipal.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: VPrincipal },
  { path: '/login', component: VLogin },
  { path: '/createAccount', component: VCreateAccount }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
