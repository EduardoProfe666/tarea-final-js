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
})
</script>

<template>
  <div class="modal">
    <div class="modal__contenedor componente-cristal">
      <label class="modal__titulo">{{ generalStore.getLibroActual.titulo }}</label>

      <div>
        <div class="container-pdf">
          <VuePDF class="pdf" :pdf="pdf" :page="page" fit-parent />
          <div>
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
      </div>
      <div class="modal__botones">
        <button class="componente-cristal" @click="cerrar()">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<style>
.pdf {
  border-radius: 1.5rem;
  max-height: 70vh;
}
</style>
