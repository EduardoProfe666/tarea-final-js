<template>
  <div class="modal">
    <div class="modal__contenedor componente-cristal">
      <label class="modal__titulo">{{ generalStore.getLibroActual.titulo }}</label>

      <div class="pdf">
        <div v-for="page in pages" :key="page">
          <VuePDF class="pdf__page" :pdf="pdf" :page="page" :scale="0.7"/>
        </div>
      </div>
      <div class="modal__botones">
        <button class="componente-cristal" @click="cerrar()">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGeneralStore } from '../../../stores/generalStore'
import { VuePDF, usePDF } from '@tato30/vue-pdf'

const generalStore = useGeneralStore()
let { pdf, pages, info } = usePDF(`http://localhost:3000/files/content/${generalStore.getLibroActual.contenido_url}`)


const cerrar = () => {
  generalStore.switchLeer()
  pdf=null
}
</script>
<style>
.pdf {
  height: 70vh;
  width: 80%;
  overflow: auto;
  border-radius: 1.5rem;
}
.pdf__page{
 overflow: auto;
}

</style>
