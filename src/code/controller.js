import biblioteca from './biblioteca'
import { useEventEmitter } from './useEventEmitter'
import { useGeneralStore } from '../stores/generalStore'

export const eliminarLibro = async (id) => {
  await fetch(`http://localhost:3000/books/${id}`, {
    method: 'DELETE',
    mode: 'cors'
  })
  useEventEmitter().dispatchEvent('actualizar',{
    titulo: '',
    autor: '',
    anno: '',
    publicador: ''
  })
}

export const nuevoLibro = async (titulo, autor, anio, publicador, contenido, cover, pdf) => {
  biblioteca.validar(titulo, autor, anio, publicador, contenido, cover, pdf)
  const formData = new FormData()
  formData.append('title', titulo)
  formData.append('author', autor)
  formData.append('publication_year', anio)
  formData.append('editorial', publicador)
  formData.append('cover', cover)
  formData.append('synopsis', contenido)
  formData.append('content', pdf)
  await fetch(`http://localhost:3000/books`, {
    method: 'POST',
    mode: 'cors',
    header: {
      'Content-Type': 'form-data'
    },
    redirect: 'follow',
    body: formData
  })
  useEventEmitter().dispatchEvent('actualizar',{
    titulo: '',
    autor: '',
    anno: '',
    publicador: ''
  })
}

export const editarLibro = async (id, titulo, autor, anio, publicador, contenido, cover, pdf) => {
  biblioteca.validar(titulo, autor, anio, publicador, contenido, cover, pdf)
  const formData = new FormData()
  formData.append('title', titulo)
  formData.append('author', autor)
  formData.append('publication_year', anio)
  formData.append('editorial', publicador)
  formData.append('cover', cover)
  formData.append('synopsis', contenido)


  await fetch(`http://localhost:3000/books/${id}`, {
    method: 'PATCH',
    mode: 'cors',
    header: {
      'Content-Type': 'form-data'
    },
    redirect: 'follow',
    body: formData
  })
  useEventEmitter().dispatchEvent('actualizar',{
    titulo: '',
    autor: '',
    anno: '',
    publicador: ''
  })
  const generalStore = useGeneralStore()
  const libro = await buscarLibroporID(id)
  generalStore.setLibroActual(libro)
  
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
  const response = await fetch(`http://localhost:3000/books?title=${titulo}&author=${autor}&publication_year=${anno}&editorial=${publicador}`, {
    mode: 'cors'
  })
  const books = await response.json()
  return books
  //    return biblioteca.buscarLibros(titulo, autor, anno, publicador);
}

export const logIn = async (usuario, contrasenia) => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  const raw = JSON.stringify({ username: usuario, password: contrasenia })
  const requestoptions = {
    method: 'POST',
    mode: 'cors',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
    credentials: "same-origin"
  }
  const response = await fetch('http://localhost:3000/login', requestoptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Inicio de sesión inválido')
    }
    return response.json()
  })
  const jwtCookie = response.headers.get('set-cookie')

  const jwtToken = jwtCookie.split('.')[1]
  const decodedToken = window.atob(jwtToken)

  console.log(jwtCookie)
  //const user = (window.atob( ALGO.split('.')[2])).json()
  //return user
}
