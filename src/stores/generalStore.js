import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
  state:()=>({
    libroActual:null,
    mostrarComponenteAniadir:false,
    mostrarComponenteModificar:false,
    mostrarComponenteEliminar:false,
    mostrarFiltrosBuscador:false,
    mostrarUsuarioModal:false
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
    getUsuarioModal(){
      return this.mostrarUsuarioModal
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
    switchUsuarioModal(){
      this.mostrarUsuarioModal = !this.mostrarUsuarioModal
  },
    setFiltrosBuscador(value){
      this.mostrarFiltrosBuscador = value
  },
  },
})