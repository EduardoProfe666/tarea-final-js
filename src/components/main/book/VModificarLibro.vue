<template>
  <div class="modal">
    <form action="" class="componente-cristal modal__contenedor" @submit.prevent="aceptar()">
      <label class="modal__titulo">Por favor, provéenos los datos del libro a modificar:</label>
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
import { editarLibro } from '../../../code/controller'
import { useGeneralStore } from '../../../stores/generalStore'
const generalStore = useGeneralStore()
const props = defineProps({
  libro: Object
})
const titulo = ref(props.libro.titulo)
const autor = ref(props.libro.autor)
const anio = ref(props.libro.anno_publicacion)
const publicador = ref(props.libro.publicador)
const contenido = ref(props.libro.sinopsis)
const inputCover = ref()
const inputPDF = ref()
const cover = ref(null)
const pdf = ref(null)

const manejarCoverInsertado = () => {
  const archivo = inputCover.value.files[0]
  cover.value = archivo
}

const manejarPDFInsertado = () => {
  const archivo = inputPDF.value.files[0]
  pdf.value = archivo
}

const cancelar = () => {
  generalStore.switchModificar()
  document.removeEventListener('keydown', cerrarModal)
}
const aceptar = async () => {
  try {
    await editarLibro(
      props.libro.id_libro,
      titulo.value,
      autor.value,
      anio.value,
      publicador.value,
      contenido.value,
      cover.value,
      pdf.value
    )
    const libro = props.libro
    generalStore.setLibroActual(null)
    generalStore.setLibroActual(libro)
    generalStore.switchModificar()
  } catch (e) {
    alert(e.message)
  }
}

const cerrarModal = (event) => {
  if (event.key === 'Escape') {
    generalStore.switchModificar()
    document.removeEventListener('keydown', cerrarModal)
  }
}
onMounted(() => {
  document.addEventListener('keydown', cerrarModal)
})
</script>
