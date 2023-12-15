<script setup>
import VEstanteria from './VEstanteria.vue'
import VCarta from './VCarta.vue'
import VAniadirLibro from './book/VAniadirLibro.vue'
import VEliminarLibro from './book/VEliminarLibro.vue'
import VModificarLibro from './book/VModificarLibro.vue'
import VFiltrosBuscador from './VFiltrosBuscador.vue'
import VUsuarioModal from './VUsuarioModal.vue'
import VPDFTest from './book/VPDFTest.vue'
import { useGeneralStore } from '../../stores/generalStore'
const generalStore = useGeneralStore()
</script>

<template>
  <div class="main__content centrado">
    <VEstanteria />
    <VCarta />
    <Transition name="fade"><VAniadirLibro v-if="generalStore.getAniadir" /></Transition>
    <Transition name="fade"><VEliminarLibro v-if="generalStore.getEliminar" /></Transition>
    <Transition name="fade"
      ><VModificarLibro v-if="generalStore.getModificar" :libro="generalStore.getLibroActual"
    /></Transition>
    <Transition name="fade"><VUsuarioModal v-if="generalStore.getUsuarioModal" /></Transition>
    <Transition name="fade_from_up"
      ><VFiltrosBuscador v-if="generalStore.getFiltrosBuscador"
    /></Transition>
    <Transition name="fade"><VPDFTest v-if="generalStore.getLeer" /></Transition>
  </div>
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
