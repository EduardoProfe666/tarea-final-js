import { defineStore } from 'pinia'

export const useUsuarioStore = defineStore('usuario', {
  state:()=>({
    usuario:{
        nombre:"",
        contrasenia:"",
        rol:"",
        listaLibrosUsuario:[]
    }
  }),
  getters:{
    getUsuario(){
      return this.usuario
    }
  },
  actions:{
    setUsuario(usuario){
      this.usuario = usuario
    }
  },
})