<template>
  <div class="componente-cristal estanteria" >
    <VLibro
      v-for="libro in libros"
      :key="libro.getId()"
      :codigo="libro.getId()"
      :titulo="libro.getTitulo()"
      :autor="libro.getAutor()"
      :thumbnail="libro.getThumbnail()"
      v-on:enviar_id="(id) => enviar_libro_para_carta(id)"
    />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { solicitarLibros, buscarLibroporID } from '../code/controller';
import { useEventEmitter } from '../code/useEventEmitter';
import VLibro from './VLibro.vue';

const data = ref([]);

const libros = computed(() => data.value)

const emit = defineEmits(['enviar_libro'])

const enviar_libro_para_carta = async (id)=>{
    const libro = await buscarLibroporID(id);
    emit('enviar_libro', libro);
}

onMounted(async ()=>{
    data.value = await solicitarLibros()
    useEventEmitter().listen('actualizar', async (event)=>{ 
        let { titulo , autor, anno, publicador } = event.detail || [null, null, null, null];
        data.value = await solicitarLibros(titulo, autor, anno, publicador);
    })
})

</script>

<style scoped>
.estanteria {
  flex-direction: row;
  overflow: auto;
  width: 30rem;
  height: 18vh;
  box-shadow: 0px 0px 8px white;
  gap: 2rem;
  order:2;
}
@media (min-width: 480px) {
  .estanteria{
    width: 45rem;
  } 
}
@media (min-width: 768px) {
  .estanteria{
    width: 20rem;
    height: 80vh;
    flex-direction: column;
    order:1;
  }
  
}
@media (min-width: 1024px) {
  .estanteria{
    width: 25rem;
  }
  
}

</style>
