import biblioteca from './biblioteca'
import { Libro } from './libro'
import { useEventEmitter } from './useEventEmitter'

export const eliminarLibro = async (id) => {
  await fetch(`http://localhost:3000/books/${id}`, {
    method: 'DELETE',
    mode: 'cors'
  })
  useEventEmitter().dispatchEvent('actualizar')
}

export const nuevoLibro = async (titulo, autor, anio, publicador, contenido, cover, pdf) => {
  biblioteca.validar(titulo, autor, anio, publicador, contenido)
  const formData = new FormData()
  formData.append("title",titulo)
  formData.append("author",autor)
  formData.append("publication_year",anio)
  formData.append("editorial",publicador)
  formData.append("cover",cover)
  formData.append("synopsis",contenido)
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

export const editarLibro = async (id, titulo, autor, anio, publicador, contenido) => {
  biblioteca.validar(titulo, autor, anio, publicador, contenido)
  biblioteca.editarLibro(id, titulo, autor, anio, publicador, contenido)
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
