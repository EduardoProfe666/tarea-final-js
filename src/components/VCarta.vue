<template>
  <div class="componente-cristal carta">
    <img class="carta__cover" :src="props.cover" />
    <label class="carta__titulo">{{ props.titulo }}</label>
    <label class="carta__subtitulo">por {{ props.autor }}</label>
    <label class="carta__subtitulo">publicado por {{ props.publicador }} en {{ props.anio }}</label>
    <p class="carta__contenido">{{ props.contenido }}</p>
    <div class="carta__botones">
      <img
        class="boton-modificar boton-mini"
        src="/icons/edit_icon.png"
        @click="modificar_libro(props.codigo)"
      />
      <img
        @click="emit_eliminar(props.codigo)"
        class="boton-borrar boton-mini"
        src="/icons/delete_icon.png"
      />
    </div>
  </div>
</template>
<script setup>
import { useEventEmitter } from '../code/useEventEmitter'
const props = defineProps({
  codigo: String,
  titulo: String,
  autor: String,
  anio: Number,
  publicador: String,
  contenido: String,
  cover: {
    type: String,
    default: '/covers/default.png',
    required: true
  }
})
const emit = defineEmits(['modificar_libro','eliminar_libro'])

const modificar_libro = (id) => emit('modificar_libro', id)
const emit_eliminar = (id) => {
  useEventEmitter().dispatchEvent('eliminar_libro', id)
}
</script>

<style scoped>
.carta {
  box-shadow: 0px 0px 8px white;
  flex-direction: column;
  overflow: auto;
  width: 30rem;
  height: 65vh;
}
.carta > * {
  margin: auto 2rem;
}

.carta__cover {
  border-color: white;
  border-radius: 1.5rem;
  border-style: solid;
  width: 20rem;
  pointer-events: none;
  user-select: none;
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
.carta__botones{
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 1rem;
  top: 1rem;
  margin: 0;
  opacity: 0;
  transition: all ease 250ms;
  gap: 1.5rem;
}

.carta:hover .carta__botones {
  opacity: 1;
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
