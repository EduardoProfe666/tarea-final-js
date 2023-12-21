<template>
    <div class="checkbox-contenedor">
      <input type="checkbox" id="favourite" class="check-input" checked/>
      <label for="favourite" class="checkbox">
        <svg viewBox="0 0 22 16" fill="none">
          <path d="M1 6.85L8.09677 14L21 1" />
        </svg>
      </label>
      <span>Favorito</span>
    </div>
</template>

<style>
.checkbox-contenedor {
  margin: 1rem;
  display: flex;
  align-items: center;
}
.checkbox-contenedor span {
  margin-left: 1rem;
  font-size: 2rem;
}
.check-input {
  display: none;
}
.checkbox {
  width: 2.5rem;
  height: 2.5rem;
  border: 0.2rem solid #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 250ms ease all;
}
.checkbox svg {
  size: 2rem;
}

.check-input:checked + .checkbox {
  background: white;
}
.check-input:checked + .checkbox svg path {
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  stroke: black;
  stroke-width: 3;
  animation: check 4s forwards;
}
.checkbox::before {
  content: '';
  background: rgba(255, 200, 161, 0.29);
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  display: block;
  width: 6rem;
  height: 6rem;
  z-index: -1;
}
.check-input:checked + .checkbox::before {
  animation: ripple 0.3s;
}
@keyframes check {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes ripple {
  to {
    transform: scale(1);
  }
}
</style>
