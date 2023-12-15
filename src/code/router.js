import VLogin from "../components/login/VLogin.vue"
import VPrincipal from "../components/main/VPrincipal.vue"
import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
    { path: '/', component: VPrincipal },
    { path: '/login', component: VLogin },
  ]
const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  export default router