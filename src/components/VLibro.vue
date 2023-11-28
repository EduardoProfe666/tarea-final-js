<template>
  <div class="libro" @click="emit('enviar_id', props.codigo)">
    <img class="caratula" :src="props.thumbnail" />
  </div>
</template>

<script setup>
const props = defineProps({
  codigo: String,
  thumbnail: String
})
const emit = defineEmits(['enviar_id'])
</script>
<style scoped>
.libro {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-duration: 1s;
  animation-name: fade-in;
  transition: all ease 250ms;
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
