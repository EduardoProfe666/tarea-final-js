<template>
  <div class="modal">
    <div class="componente-cristal modal__contenedor">
      <label class="modal__titulo">¿Está seguro de que desea eliminar el libro?</label>
      <div class="modal__botones">
        <button class="componente-cristal" @click="aceptar()">Aceptar</button>
        <button class="componente-cristal" @click="cancelar()">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { eliminarLibro } from '../../../code/controller'
import { useGeneralStore } from '../../../stores/generalStore'
const generalStore = useGeneralStore()

const cancelar = () => generalStore.switchEliminar()
const aceptar = () => {
  eliminarLibro(generalStore.getLibroActual.id_libro)
  generalStore.setLibroActual(null)
  generalStore.switchEliminar()
}
</script>
