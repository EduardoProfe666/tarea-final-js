<template>
  <div class="libro" @click="mostrarLibroEnCarta()">
    <img class="caratula" :src="`http://localhost:3000/files/cover/${props.thumbnail.split('/')[2]}`" />
  </div>
</template>

<script setup>
import { buscarLibroporID } from '../code/controller'
import { useCRUDStore } from '../stores/crudStore'
const props = defineProps({
  codigo: Number,
  thumbnail: String
})

const crudStore = useCRUDStore()

const mostrarLibroEnCarta = async () => {
  crudStore.setLibroActual(null)
  buscarLibroporID(props.codigo).then((response) => crudStore.setLibroActual(response))
}
</script>
<style scoped>
.libro {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-duration: 1s;
  animation-name: fade-in;
  transition: all ease 250ms;
  margin: 1rem;
}
.libro:hover {
  scale: 1.1;
  cursor: pointer;
}
.libro:active {
  scale: 1.2;
  opacity: 0.5;
}

.caratula {
  box-shadow: 0 0 0.8rem white;
  width: 8rem;
  height: 10rem;
  border-radius: 1rem;
  pointer-events: none;
  user-select: none;
  border-color: white;
  border-style: solid;
}
@media (min-width: 768px) {
  .caratula {
    width: 10rem;
    height: 12.5rem;
  }
}
@media (min-width: 1024px) {
  .caratula {
    width: 14rem;
    height: 17.5rem;
  }
}
</style>
