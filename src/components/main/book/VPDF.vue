<script setup>
import { ref, watch, onMounted } from 'vue'
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
  document.removeEventListener('keydown', cerrarModal);
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

const cerrarModal = (event) => {
  if (event.key === 'Escape') {
    generalStore.switchLeer()
    document.removeEventListener('keydown', cerrarModal);
  }}
  onMounted(()=>{
    document.addEventListener('keydown', cerrarModal);
  })

</script>

<template>
  <div class="modal">
    <div class="modal__contenedor componente-cristal modal-pdf">
      <label class="modal__titulo">{{ generalStore.getLibroActual.titulo }}</label>
      <div class="checkbox-contenedor">
      <input type="checkbox" id="favourite" class="check-input"/>
      <label for="favourite" class="checkbox">
        <svg viewBox="0 0 22 16" fill="none">
          <path d="M1 6.85L8.09677 14L21 1" />
        </svg>
      </label>
      <label class="checkbox-contenedor__text" for="favourite">Favorito</label>
    </div>
      <div class="modal-pdf__contenido">
        <div class="container-pdf" ref="pdfContainer">
          <VuePDF class="pdf" :pdf="pdf" :page="page" fit-parent />
        </div>
        <div class="modal-pdf__paginas">
          <button @click="page = page > 1 ? page - 1 : page"><img class="arrow_right" src="icons/arrow.png"></button>
          <input
            type="number"
            v-on:blur="setPageInputCorrectly"
            v-on:keypress.enter="setPageInputCorrectly"
            v-model="page_input"
          />
          <span> / {{ pages }}</span>
          <button @click="page = page < pages ? page + 1 : page"><img class="arrow_left" src="icons/arrow.png"></button>
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
.modal-pdf__paginas button{
  margin: auto 1rem;
}
.arrow_right, .arrow_left{
  width: 2rem;
 
}
.arrow_left{
  transform: rotate(180deg);
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
