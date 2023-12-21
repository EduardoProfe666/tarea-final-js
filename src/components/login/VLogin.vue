<template>
  <div class="modal login-modal">
    <VSlider />

    <form action="" class="componente-cristal modal__contenedor" @submit.prevent="aceptar()">
      <label class="modal__titulo">Inicia sesión</label>
      <div class="modal__inputs">
        <label for="usuario">
          <span>Nombre usuario: </span>
          <input type="text" v-model="usuario" />
        </label>
        <label for="contraseña">
          <span>Contraseña: </span>
          <input type="text" v-model="contraseña" />
        </label>
        <a href="" class="uao">¿Aún no te has registrado?</a>
      </div>
      <div class="modal__botones">
        <button type="submit" class="componente-cristal">Aceptar</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import VSlider from './VSlider.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const aceptar = () => {
  router.push('/')
}
</script>

<style scoped>
.uao {
  color: whitesmoke;
  margin-top: 1rem;
  font-size: 1.5rem;
}
.router-link,
.router-link:active,
.router-link:visited {
  color: white;
  text-decoration: none;
}

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
  .login-modal form {
  height: 35rem;
}
  .uao {
    font-size: 2rem;
  }
  .login-modal {
    flex-direction: row;
  }
}
</style>
