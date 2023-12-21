<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
router.push('/login')
router.beforeEach((to, from, next) => {
  //if (from.fullPath === '/' && to.fullPath === '/login' /*&&user ===null*/) next('/')
  if (from.fullPath === '/' && to.fullPath === '/createAccount') next('/')
  if (from.fullPath === 'createAccount' && to.fullPath === '/') next('/createAccount')
  const isAuthenticated = true
  if (!isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})
</script>

<template>
  <router-view></router-view>
</template>
