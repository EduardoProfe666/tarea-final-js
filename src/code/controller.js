import biblioteca from './biblioteca'
import { useEventEmitter } from './useEventEmitter'

export const eliminarLibro = async (id) => {
  await fetch(`http://localhost:3000/books/${id}`, {
    method: 'DELETE',
    mode: 'cors'
  })
  useEventEmitter().dispatchEvent('actualizar')
}

export const nuevoLibro = async (titulo, autor, anio, publicador, contenido, cover, pdf) => {
  biblioteca.validar(titulo, autor, anio, publicador, contenido, cover, pdf)
  const formData = new FormData()
  formData.append("title",titulo)
  formData.append("author",autor)
  formData.append("publication_year",anio)
  formData.append("editorial",publicador)
  formData.append("cover",cover)
  formData.append("synopsis",contenido)
  formData.append("content",pdf)
  await fetch(`http://localhost:3000/books`, {
    method: 'POST',
    mode: 'cors',
    header: {
      'Content-Type': 'form-data'
    },
    redirect:'follow',
    body: formData
  })
  useEventEmitter().dispatchEvent('actualizar')
}

export const editarLibro = async (id, titulo, autor, anio, publicador, contenido, cover, pdf) => {
  biblioteca.validar(titulo, autor, anio, publicador, contenido, cover, pdf)
  const formData = new FormData()
  formData.append("title",titulo)
  formData.append("author",autor)
  formData.append("publication_year",anio)
  formData.append("editorial",publicador)
  formData.append("cover",cover)
  formData.append("synopsis",contenido)
  formData.append("content",pdf)
  await fetch(`http://localhost:3000/books:${id}`, {
    method: 'PATCH',
    mode: 'cors',
    header: {
      'Content-Type': 'form-data'
    },
    redirect:'follow',
    body: formData
  })
  useEventEmitter().dispatchEvent('actualizar')
}

export const buscarLibroporID = async (id) => {
  const response = await fetch(`http://localhost:3000/books/${id}`, {
    mode: 'cors'
  })
  const book = await response.json()
  return book
  //return biblioteca.buscarLibro(id);
}

export const solicitarLibros = async (titulo = '', autor = '', anno, publicador = '') => {
  const response = await fetch('http://localhost:3000/books', {
    mode: 'cors'
  })
  const books = await response.json()
  return books
  //    return biblioteca.buscarLibros(titulo, autor, anno, publicador);
}

export const logIn = async(usuario,contrasenia)=>{
  const formData = new FormData()
  formData.append("username",usuario)
  formData.append("password",contrasenia)
  const response = await fetch('http://localhost:3000/login',{
    method: 'POST',
    mode: 'cors',
    header: {
      'Content-Type': 'form-data'
    },
    redirect:'follow',
    body: formData
  })
  
  const cookie = await response.headers.get('set-cookie')

  //const user = (window.atob( ALGO.split('.')[2])).json()
  //return user
}
