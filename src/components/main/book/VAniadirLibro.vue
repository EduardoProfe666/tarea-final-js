<template>
  <div class="modal">
    <form action="" class="componente-cristal modal__contenedor" @submit.prevent="aceptar()">
      <label class="modal__titulo">Por favor, provéenos los datos del libro a añadir:</label>
      <div class="modal__inputs">
        <label for="titulo">
          <span>Título: </span>
          <input type="text" v-model="titulo" required />
        </label>
        <label for="autor">
          <span>Autor: </span>
          <input type="text" id="autor" v-model="autor" required />
        </label>
        <label for="anio-publicacion">
          <span>Año Publicación: </span>
          <input type="number" id="anio-publicacion" v-model="anio" required />
        </label>
        <label for="publicador">
          <span>Publicador: </span>
          <input type="text" id="publicador" v-model="publicador" required />
        </label>

        <label for="contenido">
          <span>Sinopsis: </span>
          <textarea
            name="t_area"
            id="area_t"
            cols="30"
            rows="10"
            v-model="contenido"
            required
          ></textarea>
        </label>
        <label for="url-cover">
          <span>Cover: </span>
          <input
            type="file"
            id="url-cover"
            accept="image/png,image/jpeg"
            @change="manejarCoverInsertado()"
            ref="inputCover"
            required
          />
        </label>
        <label for="url-pdf">
          <span>Contenido: </span>
          <input
            type="file"
            id="url-pdf"
            accept=".pdf"
            @change="manejarPDFInsertado()"
            ref="inputPDF"
            required
          />
        </label>
      </div>
      <div class="modal__botones">
        <button type="submit" class="componente-cristal">Aceptar</button>
        <button type="button" class="componente-cristal" @click="cancelar()">Cancelar</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { nuevoLibro } from '../../../code/controller'
import { useGeneralStore } from '../../../stores/generalStore'
const generalStore = useGeneralStore()
const titulo = ref('')
const autor = ref('')
const anio = ref(0)
const publicador = ref('')
const contenido = ref('')
const cover = ref(null)
const pdf = ref(null)
const inputCover = ref()
const inputPDF = ref()

const manejarCoverInsertado = () => {
  const archivo = inputCover.value.files[0]
  cover.value = archivo
}

const manejarPDFInsertado = () => {
  const archivo = inputPDF.value.files[0]
  pdf.value = archivo
}
const cancelar = () => {
  generalStore.switchAniadir()
  document.removeEventListener('keydown', cerrarModal)
}
const aceptar = async () => {
  try {
    await nuevoLibro(
      titulo.value.trim(),
      autor.value.trim(),
      anio.value,
      publicador.value.trim(),
      contenido.value.trim(),
      cover.value,
      pdf.value
    )
    generalStore.switchAniadir()
  } catch (e) {
    alert(e.message)
  }
}

const cerrarModal = (event) => {
  if (event.key === 'Escape') {
    generalStore.switchAniadir()
    document.removeEventListener('keydown', cerrarModal)
  }
}
onMounted(() => {
  document.addEventListener('keydown', cerrarModal)
})
</script>
