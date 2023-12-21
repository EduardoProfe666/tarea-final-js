<template>
  
  <form
    action=""
    class="barra-navegacion__buscador__filtros componente-cristal"
    @submit.prevent="enviarEvento"
  >
  <h1 class="barra-navegacion__buscador__filtros_h1_buscar">Buscar</h1>
    <input type="text" placeholder="Título" class="input-busqueda" v-model="titulo" />
    <input type="text" placeholder="Autor" class="input-busqueda" v-model="autor" />
    <input
      type="number"
      placeholder="Año de publicación"
      min="0"
      class="input-busqueda"
      v-model="anno"
    />
    <input type="text" placeholder="Publicador" class="input-busqueda" v-model="publicador" />
    <div class="barra-navegacion__buscador__filtros__botones">
      
        <button
          type="submit"
          @click="generalStore.setFiltrosBuscador(true)"
          class="componente-cristal boton-buscar"
        >
          <img src="/icons/search_icon.png" />
        </button>

      <button
        type="button"
        class="componente-cristal boton-refrescar"
        @click="refrescarBuscadores()"
      >

        <img src="/icons/refresh_icon.png" />
      </button>

      
      <button 
       type="button"
        class="componente-cristal boton-salir"
        @click="salir()">X
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useEventEmitter } from '../../code/useEventEmitter.js'
import { useGeneralStore } from '../../stores/generalStore'
const generalStore = useGeneralStore()

const titulo = ref('')
const autor = ref('')
const anno = ref('')
const publicador = ref('')

const enviarEvento = () => {
  useEventEmitter().dispatchEvent('actualizar', {
    titulo: titulo.value,
    autor: autor.value,
    anno: anno.value,
    publicador: publicador.value
  })
  generalStore.setFiltrosBuscador(false)
}
const refrescarBuscadores = () => {
  titulo.value = ''
  autor.value = ''
  anno.value = ''
  publicador.value = ''
  enviarEvento()
}

const salir = () =>{
  generalStore.setFiltrosBuscador(false)
}
const cerrarModal = (event) => {
  if (event.key === 'Escape') {
    generalStore.setFiltrosBuscador(false);
    document.removeEventListener('keydown', cerrarModal);
  }}
  onMounted(()=>{
    document.addEventListener('keydown', cerrarModal);
  })
</script>
<style>
.barra-navegacion__buscador__filtros_h1_buscar{
  font-size: 2.7rem;
  margin-top: 1.7rem;
}
.barra-navegacion__buscador__filtros {
  position: fixed;
  top: 8rem;
  align-items: center;
  flex-direction: column;
  z-index: 900;
  gap: 1rem;
  
}
.barra-navegacion__buscador__filtros__botones {
  display: flex;
  margin-bottom: 1rem;
}
.input-busqueda {
  margin: 0.5rem 1rem;
  width: 25rem;
  border-radius: 1rem;
  height: 3rem;
}
.boton-refrescar:active img {
  animation-duration: 250ms;
  animation-name: rotate;
}

.boton-salir{
  position: absolute;
  top: 0.6rem;
  right: 0.7rem;
  font-size: 1.2rem;
  border-radius: 30%;
}
</style>
