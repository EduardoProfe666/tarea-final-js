import { defineStore } from 'pinia'

export const useCRUDStore = defineStore('libroActual', {
  state:()=>({
    libroActual:null,
    mostrarComponenteAniadir:false,
    mostrarComponenteModificar:false,
    mostrarComponenteEliminar:false,
    mostrarFiltrosBuscador:false
  }),
  getters:{
    getLibroActual(){
      return this.libroActual
    },
    getAniadir(){
      return this.mostrarComponenteAniadir
    },
    getModificar(){
      return this.mostrarComponenteModificar
    },
    getEliminar(){
      return this.mostrarComponenteEliminar
    },
    getFiltrosBuscador(){
      return this.mostrarFiltrosBuscador
    },
  },
  actions:{
    setLibroActual(libro){
      this.libroActual = libro
    },
    switchAniadir(){
      this.mostrarComponenteAniadir = !this.mostrarComponenteAniadir
    },
    switchModificar(){
        this.mostrarComponenteModificar = !this.mostrarComponenteModificar
    },
    switchEliminar(){
        this.mostrarComponenteEliminar = !this.mostrarComponenteEliminar
    },
    setFiltrosBuscador(value){
      this.mostrarFiltrosBuscador = value
  },
  },
})