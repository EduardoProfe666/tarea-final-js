<template>
  <div class="barra-navegacion">
    <div class="barra-navegacion__titulo centrado">
      <img src="/favicon.png" />
      <h1>Books</h1>
    </div>
    <div class="barra-navegacion__contenedor-buscador">
      <button @click="generalStore.switchAniadir" class="componente-cristal boton-aniadir">
        <img src="/icons/add_icon.png" />
      </button>
      <Transition name="fade_from_down">
        <button
          v-if="!generalStore.getFiltrosBuscador"
          @click="generalStore.setFiltrosBuscador(true)"
          class="componente-cristal boton-buscar"
        >
          <img src="/icons/search_icon.png" />
        </button>
      </Transition>
    </div>
    <img
      @click="generalStore.switchUsuarioModal"
      class="barra-navegacion__usuario"
      src="/icons/user_icon.svg"
    />
  </div>
</template>

<script setup>
import { useGeneralStore } from '../stores/generalStore'
const generalStore = useGeneralStore()
</script>

<style>
.barra-navegacion {
  display: flex;
  flex-direction: row;
  position: fixed;
  backdrop-filter: blur(12.1px);
  -webkit-backdrop-filter: blur(12.1px);
  background-color: rgba(0, 0, 0, 0.3);
  height: 8rem;
  width: 100%;
  z-index: 2000;
  justify-content: space-between;
}

.barra-navegacion__titulo {
  flex-direction: column;
  margin-left: 1.5rem;
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
.boton-refrescar,
.boton-aniadir {
  height: 5rem;
  width: 5rem;
  margin: auto 1rem;
}
.boton-buscar:active img,
.boton-aniadir:active img {
  animation-duration: 250ms;
  animation-name: pop;
}

.barra-navegacion__usuario {
  height: 5rem;
  margin: auto 1.5rem;
  cursor: pointer;
}

@media (min-width: 768px) {
  .barra-navegacion__titulo,
  .barra-navegacion__usuario {
    margin: auto 3rem;
  }
}
</style>
