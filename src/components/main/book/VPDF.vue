<script setup>
import { ref, watch } from 'vue'
import { VuePDF, usePDF } from '@tato30/vue-pdf'
import { useGeneralStore } from '../../../stores/generalStore'

const generalStore = useGeneralStore()

const page = ref(1)
const page_input = ref(1)
const { pdf, pages } = usePDF(
  `http://localhost:3000/files/content/${generalStore.getLibroActual.contenido_url}`
)
const pdfContainer= ref()

const cerrar = () => {
  generalStore.switchLeer()
}
const pageInputIsValid = () => {
  return page_input.value >= 1 && page_input.value <= pages.value
}
const setPageInputCorrectly = () => {
  if (!pageInputIsValid()) page_input.value = page.value
}
watch(page_input, () => {
  if (pageInputIsValid()) page.value = page_input.value
})
watch(page, () => {
  page_input.value = page.value
  pdfContainer.value.scrollTop=0
})
</script>

<template>
  <div class="modal">
    <div class="modal__contenedor componente-cristal modal-pdf">
      <label class="modal__titulo">{{ generalStore.getLibroActual.titulo }}</label>

      <div class="modal-pdf__contenido">
        <div class="container-pdf" ref="pdfContainer">
          <VuePDF class="pdf" :pdf="pdf" :page="page" fit-parent />
        </div>
        <div class="modal-pdf__paginas">
          <button @click="page = page > 1 ? page - 1 : page">Prev</button>
          <input
            type="number"
            v-on:blur="setPageInputCorrectly"
            v-on:keypress.enter="setPageInputCorrectly"
            v-model="page_input"
          />
          <span> / {{ pages }}</span>
          <button @click="page = page < pages ? page + 1 : page">Next</button>
        </div>
      </div>
      <div class="modal__botones">
        <button class="componente-cristal" @click="cerrar()">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<style>
.modal-pdf {
  width: 40rem;
  border-radius: 1.5rem;
}
.modal-pdf__contenido{
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: scroll;
  flex-direction: column;
}
.container-pdf {
  height: 30rem;
  border-radius: 1.5rem;
  width: 30rem;
  overflow: scroll;
}
.modal-pdf__paginas{
  margin: 1rem auto;
  font-size: 2rem;
}
.modal-pdf__paginas input{
  width:8rem;
  font-size: 2rem;
}
@media (min-width: 768px) {
  .modal-pdf {
    width: 70rem;
  }
  .container-pdf{
    width: 60rem;
    height: 40rem;
  }
}
@media (min-width: 1024px) {
  .modal-pdf {
    width: 90rem;
  }
  .container-pdf{
    width: 80rem;
  }
}
</style>
