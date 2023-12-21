export const validarNoNullUndefined = (x) => x !== null && x !== undefined

export const validarTituloPublicador = (cad) => {
  const regex1 = /^(?!.*\s\s)[áÁéÉíÍóÓúÚñÑa-zA-Z0-9 ! @#%$^&()_+\-=\[\]{};':"\\|,\.<>\/?]{1,128}$/ // No haya más de un espacio seguido, no esté vacía y tenga como máximo 128 caracteres
  const regex2 = /^(?!\s*$).+/ // Valida que la cadena no sea solo espacios
  const valid = cad.trim() === cad // Valida que la cadena no comience o termine con espacios
  return validarNoNullUndefined(cad) && regex1.test(cad) && regex2.test(cad) && valid
}

export const validarAutor = (cad) => {
  const regex1 = /^(?!.*\s\s)[áÁéÉíÍóÓúÚñÑa-zA-Z\s]{1,128}$/ // Valida que la cadena solo tenga caracteres alfabéticos y espacios, no haya más de un espacio seguido, no esté vacía y tenga como máximo 128 caracteres
  const regex2 = /^(?!\s*$).+/ // Valida que la cadena no sea solo espacios
  const valid = cad.trim() === cad // Valida que la cadena no comience o termine con espacios
  return validarNoNullUndefined(cad) && regex1.test(cad) && regex2.test(cad) && valid
}

export const validarSinopsis = (cad) => {
  const regex1 = /^(?!.*\s\s)[áÁéÉíÍóÓúÚñÑa-zA-Z0-9 ! @#%$^&()_+\-=\[\]{};':"\\|,\.<>\/?]{1,1024}$/ // No haya más de un espacio seguido, no esté vacía y tenga como máximo 1024 caracteres
  const regex2 = /^(?!\s*$).+/ // Valida que la cadena no sea solo espacios
  const valid = cad.trim() === cad // Valida que la cadena no comience o termine con espacios
  return validarNoNullUndefined(cad) && regex1.test(cad) && regex2.test(cad) && valid
}

export const validarAnnoPublicacion = (anno) => {
  return validarNoNullUndefined(anno) && anno <= new Date().getFullYear()
}
