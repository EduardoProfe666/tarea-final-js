import './assets/css/main.css'
import  router  from './code/router'
import { createApp } from 'vue'
import { createPinia} from 'pinia'
import App from './App.vue'
const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
