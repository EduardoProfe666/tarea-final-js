<template>
  <div class="modal login-modal">
    <VSlider />

    <form action="" class="componente-cristal modal__contenedor" @submit.prevent="aceptar()">
      <label class="modal__titulo">Inicia sesión</label>
      <div class="modal__inputs">
        <label for="usuario">
          <span>Nombre de usuario: </span>
          <input type="text" v-model="usuario" />
        </label>
        <label for="contraseña">
          <span>Contraseña: </span>
          <input type="text" v-model="contrasenia" />
        </label>
        <span class="uao" @click="router.push('/createAccount')">¿Aún no te has registrado?</span>
      </div>
      <div class="modal__botones">
        <button type="submit" class="componente-cristal">Aceptar</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import VSlider from './VSlider.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {logIn} from '../../code/controller'
const router = useRouter()
const usuario = ref('')
const contrasenia = ref('')
const aceptar = async () => {
  router.push('/')
  try{ /*ESTO ESTA A MEDIO IMPLEMENTAR, DESCOMENTAR Y COMENTAR LA LINEA DE ARRIBA
    const user = await logIn(
      usuario.value,
      contrasenia.value,
    )
    if(user !=null)
    router.push('/')*/
  } catch (e) {
    alert(e.message)
  }
}
</script>
