<script setup>
import { ref, watch, onMounted } from 'vue'
import { VuePDF, usePDF } from '@tato30/vue-pdf'
import { useGeneralStore } from '../../../stores/generalStore'

const generalStore = useGeneralStore()

const page = ref(1)
const { pdf, pages } = usePDF(
  `http://localhost:3000/files/content/${generalStore.getLibroActual.contenido_url}`
)

const cerrar = () => {
  generalStore.switchLeer()
}
watch(page, () => {
  if (page.value !== '') {
    if (!isNaN(page.value)) {
      if (page.value <= 0) page.value = 1
      else if (page.value > pages._value) page.value = pages._value
    } else {
      console.log(page.value)
      page.value = 1
    }
  }else page.value=1
})

const cerrarModal = (event) => {
  if (event.key === 'Escape') {
    generalStore.switchLeer();
    document.removeEventListener('keydown', cerrarModal);
  }}
  onMounted(()=>{
    document.addEventListener('keydown', cerrarModal);
  })
</script>
<style>
.pdf {
  border-radius: 1.5rem;
}
</style>

<template>
  <div class="modal">
    <div class="modal__contenedor componente-cristal">
      <label class="modal__titulo">{{ generalStore.getLibroActual.titulo }}</label>

      <div>
        <div>
          <VuePDF class="pdf" :pdf="pdf" :page="page" fit-parent />
          <div>
            <button @click="page = page > 1 ? page - 1 : page">Prev</button>
            <input type="number" v-model="page" />
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
