<script setup>
import VBarraNavegacion from './components/main/VBarraNavegacion.vue';
import VPrincipal from './components/main/VPrincipal.vue'
import {useRouter,useRoute} from 'vue-router'
</script>

<template>
  <header>
    <VBarraNavegacion />
  </header>

  <main class="centrado">
    <VPrincipal/>
  </main>
</template>

