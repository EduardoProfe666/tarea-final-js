<template>
  <div class="modal">
    <div class="modal__contenedor componente-cristal">
      <label class="modal__titulo">{{ generalStore.getLibroActual.titulo }}</label>
      <div class="webviewer" ref="webviewer"></div>
      <div class="modal__botones">
        <button class="componente-cristal" @click="cerrar()">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGeneralStore } from '../stores/generalStore'
import { ref, onMounted } from 'vue'
import WebViewer from '@pdftron/webviewer'
const generalStore = useGeneralStore()
let viewerInstance = null
onMounted(() => {
  WebViewer(
    {
      path: `webviewer`,
      initialDoc: '/Conceptos.pdf',
      disabledElements: ['header', 'toolsHeader', 'viewControlsOverlay']
    },
    document.querySelector('.webviewer')
  ).then((instance) => {
    viewerInstance = instance
    instance.setCurrentPage(3, true)
    console.log(instance)
  })
})
const setCP = () => {
  viewerInstance.setCurrentPage(3, true)
}

const cerrar = () => setCP() //generalStore.switchLeer()
</script>
<style>
.webviewer {
  height: 70vh;
  width: 25rem;
  border-radius: 1.5rem;
}
@media (min-width: 1024px) {
  .webviewer {
    width: 40rem;
  }
}
</style>
