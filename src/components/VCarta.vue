<template>
  <div class="componente-cristal carta">
    <Transition name="fade_from_left"
      ><div class="carta__info" v-if="generalStore.getLibroActual">
        <img
          class="carta__cover"
          :src="`http://localhost:3000/files/cover/${generalStore.getLibroActual.cover_url}`"
          crossorigin="anonymous"
        />
        <span class="carta__titulo">{{ generalStore.getLibroActual.titulo }}</span>
        <span class="carta__subtitulo">por {{ generalStore.getLibroActual.autor }}</span>
        <span class="carta__subtitulo"
          >publicado por {{ generalStore.getLibroActual.publicador }} en
          {{ generalStore.getLibroActual.anno_publicacion }}</span
        >
        <p class="carta__contenido">{{ generalStore.getLibroActual.sinopsis }}</p>
      </div>
      <span v-else class="placeholder-span">Selecciona un libro</span>
    </Transition>

    <div v-if="generalStore.getLibroActual" class="carta__botones">
      <div class="right-tooltip tooltip-container">
        <img
          class="boton-modificar boton-mini"
          src="/icons/edit_icon.png"
          @click="modificarLibro()"
        />
        <div class="tooltip">
          <p>Editar Libro</p>
        </div>
      </div>
      <div class="right-tooltip tooltip-container">
        <img
          @click="eliminarLibro()"
          class="boton-borrar boton-mini"
          src="/icons/delete_icon.png"
        />
        <div class="tooltip">
          <p>Eliminar Libro</p>
        </div>
      </div>
      <div class="right-tooltip tooltip-container">
        <img
          class="boton-modificar boton-mini"
          src="/icons/read_icon.png"
          @click="leerLibro()"
        />
        <div class="tooltip">
          <p>Leer Libro</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useGeneralStore } from '../stores/generalStore'
const generalStore = useGeneralStore()

const modificarLibro = () => {
  generalStore.switchModificar()
}
const eliminarLibro = () => {
  generalStore.switchEliminar()
}
const leerLibro=()=>{
  generalStore.switchLeer()
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
  width: 95%;
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
.placeholder-span {
  font-size: 3rem;
  margin: auto;
}
.boton-leer {
  height: 5rem;
  width: 5rem;
  margin: auto 1rem;
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
