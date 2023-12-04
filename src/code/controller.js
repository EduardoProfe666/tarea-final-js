import biblioteca from "./biblioteca";
import { Libro } from "./libro";
import { useEventEmitter } from "./useEventEmitter";

export const eliminarLibro = async (id)=>{
    biblioteca.eliminarLibro(id);
    useEventEmitter().dispatchEvent('actualizar');
}

export const nuevoLibro = async (titulo, autor, anio, publicador, contenido) => {
    biblioteca.validar(titulo, autor, anio, publicador, contenido)
    const libro = new Libro(titulo, autor, anio, publicador, contenido, '/covers/default.png', '/thumbnails/default_t.png');
    biblioteca.agregarLibro(libro);
    console.log('Libro agregado:');
    libro.imprimir()
    useEventEmitter().dispatchEvent('actualizar');
}

export const editarLibro = async (id, titulo, autor, anio, publicador, contenido) => {
    biblioteca.validar(titulo, autor, anio, publicador, contenido)
    biblioteca.editarLibro(id, titulo, autor, anio, publicador, contenido)
}

export const buscarLibroporID = async (id) =>{
    const response = await fetch(`http://localhost:3000/books/${id}`,{
        mode:'cors'
    })
    const book = await response.json()
    return book
    //return biblioteca.buscarLibro(id);
}

export const solicitarLibros = async (titulo="", autor="", anno, publicador="") => {
    const response =await fetch('http://localhost:3000/books',{
        mode: 'cors'
    })
    const books = await response.json()
    console.log(books);
    return books
//    return biblioteca.buscarLibros(titulo, autor, anno, publicador);
}