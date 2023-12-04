<template>
  <div class="barra-navegacion">
    <div class="barra-navegacion__titulo centrado">
      <img src="/favicon.png" />
      <h1>Books</h1>
    </div>
    <div class="barra-navegacion__contenedor-buscador">
      <form class="barra-navegacion__buscador" action="" @submit.prevent="enviarEvento">
      
          <input type="text" id="input-busqueda" class="input-busqueda" placeholder="Buscar..." @click="crudStore.setFiltrosBuscador(true)" v-model="textoInput" />
          <button class="componente-cristal boton-buscar">
            <img src="/icons/search_icon.png" />
          </button>
       
        
      </form>

      <button class="componente-cristal boton-refrescar" @click="refrescarBuscadores()">
        <img src="/icons/refresh_icon.png" />
      </button>
    </div>
    <img class="barra-navegacion__usuario" src="/icons/user_icon.svg" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { useEventEmitter } from '../code/useEventEmitter.js'
import { useCRUDStore } from '../stores/crudStore'
const crudStore = useCRUDStore()

const textoInput = ref('')


const enviarEvento = () => {
  useEventEmitter().dispatchEvent('actualizar', {
    texto: textoInput.value,
  })

  crudStore.setFiltrosBuscador(false)
}
const refrescarBuscadores = () => {
  textoInput.value = ''
  enviarEvento()
}
</script>

<style scoped>
.barra-navegacion {
  display: flex;
  flex-direction: row;
  position: fixed;
  backdrop-filter: blur(12.1px);
  -webkit-backdrop-filter: blur(12.1px);
  background-color: rgba(0, 0, 0, 0.3);
  height: 8rem;
  width: 100%;
  justify-content: space-between;
}

.barra-navegacion__titulo {
  flex-direction: column;
  margin-left: 1rem;
  user-select: none;
}
.barra-navegacion__contenedor-buscador {
  display: flex;
  flex-direction: row;
}
.barra-navegacion__buscador {
  width: 100%;
  align-items: center;
  display: flex;
}

.boton-buscar,
.boton-refrescar {
  margin-right: 0.2rem;
  height: 5rem;
  width: 5rem;
  margin: auto 0;
}
.boton-buscar:active img {
  animation-duration: 250ms;
  animation-name: pop;
}
.boton-refrescar:active img {
  animation-duration: 250ms;
  animation-name: rotate;
}

form {
  display: flex;
}
form input {
  margin-right: 10px;
}
.input-busqueda {
  width: 15rem;
  border-radius: 1rem;
  height: 5rem;
}
.barra-navegacion__usuario{
  height: 5rem;
  margin: auto 0;
}

@media (min-width: 768px) {
  .input-busqueda {
    width: 40rem;
  }
}
</style>
