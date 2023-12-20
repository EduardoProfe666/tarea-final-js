<template>
  <div class="modal">
    <div class="componente-cristal modal__contenedor">
      <img src="/icons/user_icon.svg" alt="usuario">
      <label class="modal__titulo">Usuario</label>
      <div class="modal__botones">
        <button class="componente-cristal" @click="cerrarSesion()">Cerrar Sesión</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGeneralStore } from '../../stores/generalStore'
import { onMounted } from 'vue';
const generalStore = useGeneralStore()

const cerrarSesion = () => {
  generalStore.setLibroActual(null)
  generalStore.switchUsuarioModal()
}

const cerrarModal = (event) => {
  if (event.key === 'Escape') {
    generalStore.switchUsuarioModal();
    document.removeEventListener('keydown', cerrarModal);
  }}
  onMounted(()=>{
    document.addEventListener('keydown', cerrarModal);
  })
</script>
