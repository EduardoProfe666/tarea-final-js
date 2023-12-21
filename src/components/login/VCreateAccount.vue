<template>
  <div class="modal login-modal">

    <form action="" class="componente-cristal modal__contenedor" @submit.prevent="aceptar()">
      <label class="modal__titulo">Crea una cuenta</label>
      <div class="modal__inputs">
        <label for="usuario">
          <span>Nombre de usuario: </span>
          <input type="text" v-model="usuario" />
        </label>
        <label for="contraseña">
          <span>Contraseña: </span>
          <input type="text" v-model="contraseña" />
        </label>
      </div>
      <div class="modal__botones">
        <button type="submit" class="componente-cristal">Aceptar</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const aceptar = () => {
  router.push('/')
}
</script>

<style scoped>

.login-modal {
  background: none;
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  flex-direction: column;
  gap: 3rem;
}
.login-modal form {

  height: 30rem;
}
@media (min-width: 1200px) {
  .login-modal {
    flex-direction: row;
  }
}
</style>
