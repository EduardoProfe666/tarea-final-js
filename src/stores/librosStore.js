
import { defineStore } from 'pinia'

export const useLibrosStore = defineStore('libros', {
  state:()=>({
    listaLibros:[],
  }),
  getters:{
    getListaLibros(){
      return this.listaLibros
    }
  },
  actions:{
    setListaLibros(lista){
      this.listaLibros = lista
    },
    addLibro(nuevoLibro){
      this.listaLibros.push(nuevoLibro)
    }
  },
})
