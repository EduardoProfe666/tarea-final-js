<template>
  <div class="componente-cristal estanteria">
    <VLibro
      v-for="libro in librosStore.getListaLibros"
      :key="libro.id_libro"
      :codigo="libro.id_libro"
      :titulo="libro.titulo"
      :autor="libro.autor"
      :thumbnail="libro.cover_url"
    />
  </div>
</template>

<script setup>
import VLibro from './VLibro.vue'
import { solicitarLibros } from '../code/controller'
import { useEventEmitter } from '../code/useEventEmitter'
import { useLibrosStore } from '../stores/librosStore'

const librosStore = useLibrosStore()

solicitarLibros().then((response) => librosStore.setListaLibros(response))
useEventEmitter().listen('actualizar', async (event) => {
  let { titulo, autor, anno, publicador } = event.detail || [null, null, null, null]
  solicitarLibros(titulo, autor, anno, publicador).then((response) =>
    librosStore.setListaLibros(response)
  )
})
</script>

<style scoped>
.estanteria {
  flex-direction: row;
  overflow: auto;
  width: 30rem;
  height: 18vh;
  box-shadow: 0px 0px 8px white;
  order: 2;
}
@media (min-width: 480px) {
  .estanteria {
    width: 45rem;
  }
}
@media (min-width: 768px) {
  .estanteria {
    width: 20rem;
    height: 80vh;
    flex-direction: column;
    order: 1;
  }
}
@media (min-width: 1024px) {
  .estanteria {
    width: 25rem;
  }
}
</style>
