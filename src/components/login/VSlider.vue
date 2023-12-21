<template>
  <div class="componente-cristal slider__container">
    <h1 class="slider__title">Bienvenido a VueLib!</h1>
    <h1 class="slider__subtitle">Inicia para disfrutar de estos libros y más</h1>
    <div class="slider-frame">
      <ul>
        <li><img src="slider1.png" alt="" /></li>
        <li><img src="slider2.png" alt="" /></li>
        <li><img src="slider3.png" alt="" /></li>
        <li><img src="slider4.png" alt="" /></li>
      </ul>
      
    </div>
    <button type="submit" @click="aceptar()" class="componente-cristal modal__botones">Iniciar</button>

  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const aceptar = async () => {
  router.push('/')
}
</script>
<style>
.slider__container {
  background: rgba(255, 200, 161, 0.29);

  display: flex;
  flex-direction: column;
  width: 35rem;
}
.slider-frame {
  width: 15rem;
  height: auto;
  margin: 1rem auto;
  overflow: hidden;
}
.slider__container button{
    margin-bottom: 2rem;
}
.slider__title {
  font-size: 3rem;
  margin: 1rem;
}
.slider__subtitle {
  font-size: 1.8rem;
  margin: 1rem;
}

.slider-frame ul {
  display: flex;
  gap: 1rem;
  padding: 0;
  width: 400%;

  animation: slide 20s infinite alternate ease-in-out;
}

.slider-frame li {
  width: 100%;
  list-style: none;
}

.slider-frame img {
  width: 100%;
  border-radius: 1.5rem;
  border: 0.5rem solid white;
}

@keyframes slide {
  0% {
    margin-left: 0;
  }
  20% {
    margin-left: 0;
  }

  25% {
    margin-left: -100%;
  }
  45% {
    margin-left: -100%;
  }

  50% {
    margin-left: -200%;
  }
  70% {
    margin-left: -200%;
  }

  75% {
    margin-left: -300%;
  }
  100% {
    margin-left: -300%;
  }
}
@media (min-width: 480px) {
  .slider__container {
    width: 45rem;
  }
}
@media (min-width: 1200px) {
  .slider__container {
    width: 60rem;
  }
  .slider-frame {
    width: 20rem;
  }
  .slider__title {
    font-size: 4rem;
  }
  .slider__subtitle {
    font-size: 3rem;
  }
}
</style>
