<template>
  <div class="modal">
    <div class="modal__contenedor componente-cristal">
      <label class="modal__titulo">{{ generalStore.getLibroActual.titulo }}</label>
      <vue-pdf-embed class="pdf" :source="`http://localhost:3000/files/content/${generalStore.getLibroActual.contenido_url}`" :annotation-layer="false" />
      <div class="modal__botones">
        <button class="componente-cristal" @click="cerrar()">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGeneralStore } from '../../../stores/generalStore'
import VuePdfEmbed from 'vue-pdf-embed'

const generalStore = useGeneralStore()

const cerrar = () => generalStore.switchLeer()
</script>
<style>
.pdf{
  height: 70vh;
  width: 25rem;
  overflow-y: scroll;
  border-radius: 1.5rem;
}
@media (min-width: 480px) {
  .pdf{
    width: 40rem;
  }
}
</style>
