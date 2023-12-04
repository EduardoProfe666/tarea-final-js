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
import { eliminarLibro } from '../code/controller'
import { useCRUDStore } from '../stores/crudStore'
const crudStore = useCRUDStore()

const cancelar = () => crudStore.switchEliminar()
const aceptar = () => {
  eliminarLibro(crudStore.getLibroActual.getId())
  crudStore.setLibroActual(null)
  crudStore.switchEliminar()
}
</script>
