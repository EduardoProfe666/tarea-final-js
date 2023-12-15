<script setup>
import { ref } from 'vue'
import { VuePDF, usePDF } from '@tato30/vue-pdf'
import { useGeneralStore } from '../../../stores/generalStore'


const generalStore = useGeneralStore()

const page = ref(1)
const { pdf, pages } = usePDF(`http://localhost:3000/files/content/${generalStore.getLibroActual.contenido_url}`)


const cerrar = () => {
  generalStore.switchLeer()
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


<template>
  <div class="modal">
    <div class="modal__contenedor componente-cristal">
      <label class="modal__titulo">{{ generalStore.getLibroActual.titulo }}</label>

      <div class="pdf">
        <div>
          <div>
            <button @click="page = page > 1 ? page - 1 : page">Prev</button>
            <span>{{ page }} / {{ pages }}</span>
            <button @click="page = page < pages ? page + 1 : page">Next</button>
          </div>
          <VuePDF :pdf="pdf" :page="page" />
        </div>
      </div>
      <div class="modal__botones">
        <button class="componente-cristal" @click="cerrar()">Cerrar</button>
      </div>
    </div>
  </div>
</template>
