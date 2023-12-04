<script setup>
import VEstanteria from './components/VEstanteria.vue'
import VCarta from './components/VCarta.vue'
import VBarraNavegacion from './components/VBarraNavegacion.vue'
import VAniadirLibro from './components/VAniadirLibro.vue'
import VEliminarLibro from './components/VEliminarLibro.vue'
import VModificarLibro from './components/VModificarLibro.vue'
import VFiltrosBuscador from './components/VFiltrosBuscador.vue'
import { useCRUDStore } from './stores/crudStore'
const crudStore = useCRUDStore()
</script>

<template>
  <header>
    <VBarraNavegacion />
  </header>

  <main class="centrado">
    <div class="main__content centrado">
      <VEstanteria />
      <VCarta />
      <Transition name="fade"><VAniadirLibro v-if="crudStore.getAniadir" /></Transition>
      <Transition name="fade"><VEliminarLibro v-if="crudStore.getEliminar" /></Transition>
      <Transition name="fade"><VModificarLibro v-if="crudStore.getModificar" :libro="crudStore.getLibroActual" /></Transition>
      <Transition name="fade"><VFiltrosBuscador v-if="crudStore.getFiltrosBuscador"/></Transition>
    </div>
  </main>
</template>

<style scoped>
.main__content {
  flex-direction: column;
}
@media (min-width: 768px) {
  .main__content {
    flex-direction: row;
    gap: 10rem;
  }
}
.main__content {
  margin-top: 10rem;
  gap: 2rem;
}
</style>
