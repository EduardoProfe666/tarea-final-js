<template>
  <div class="componente-cristal carta">
    <Transition name="fade"><div class="carta__info" v-if="crudStore.getLibroActual">
      <img class="carta__cover" :src="`http://localhost:3000/files/cover/${crudStore.getLibroActual.cover_url.split('/')[2]}`" />
      <span class="carta__titulo">{{ crudStore.getLibroActual.titulo }}</span>
      <span class="carta__subtitulo">por {{ crudStore.getLibroActual.autor }}</span>
      <span class="carta__subtitulo"
        >publicado por {{ crudStore.getLibroActual.publicador }} en
        {{ crudStore.getLibroActual.anno_publicacion }}</span
      >
      <p class="carta__contenido">{{ crudStore.getLibroActual.sinopsis }}</p>
    </div>
      <span v-else class="placeholder-span">Selecciona un libro</span>
    </Transition>
    <div class="carta__botones">
      <img class="boton-aniadir boton-mini" src="/icons/add_icon.png" @click="aniadirLibro()" />
      <Transition name="fade"><img
        v-if="crudStore.getLibroActual"
        class="boton-modificar boton-mini"
        src="/icons/edit_icon.png"
        @click="modificarLibro()"
      /></Transition>
      <Transition name="fade"><img
        v-if="crudStore.getLibroActual"
        @click="eliminarLibro()"
        class="boton-borrar boton-mini"
        src="/icons/delete_icon.png"
      /></Transition>
    </div>
  </div>
</template>
<script setup>
import { useCRUDStore } from '../stores/crudStore'
const crudStore = useCRUDStore()

const aniadirLibro = () => {
  crudStore.switchAniadir()
}
const modificarLibro = () => {
  crudStore.switchModificar()
}
const eliminarLibro = () => {
  crudStore.switchEliminar()
}
</script>

<style>
.carta {
  box-shadow: 0 0 0.8rem white;
  flex-direction: column;
  
  width: 30rem;
  height: 65vh;
}

.carta__info > * {
  margin: auto 2rem;
}
.carta__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: auto;
}

.carta__cover {
  border-color: white;
  border-radius: 1.5rem;
  border-style: solid;
  width: 20rem;
  pointer-events: none;
  user-select: none;
  margin: 2rem;
  box-shadow: 0 0 0.8rem white;
}
.carta__titulo {
  font-weight: bold;
  font-size: 2rem;
}
.carta__subtitulo {
  font-size: 1.7rem;
}
.carta__contenido {
  font-size: 1.5rem;
  text-align: justify;
}
.carta__botones {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 1rem;
  top: 1rem;
  margin: 0;
  transition: all ease 250ms;
  gap: 1.5rem;
}
.placeholder-span{
  font-size: 3rem;
  margin: auto;
}
@media (min-width: 768px) {
  .carta {
    order: 1;
    height: 80vh;
  }
}
@media (min-width: 480px) {
  .carta {
    width: 45rem;
  }
}
@media (min-width: 768px) {
  .carta {
    height: 80vh;
  }
}
@media (min-width: 1024px) {
  .carta {
    width: 65rem;
  }
}
</style>
