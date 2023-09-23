import validator from 'validator'

const errores = {
  vacio: 'All fields are required',
  email: 'The email is not valid',
  nombre: 'The name only can contain letters',
  cc: 'The cc only can contain numbers',
  telefono: 'The phone is not valid',
  cantidad: 'The message must contain more than 15 characters',
  correcto: 'Send successfully',
  cero: 0
}

export const validateForm = (datos) => {
  for (const key in datos) {
    if (datos[key] === '') {
      return 1
    }
  }
  if (!validator.isEmail(datos.email)) {
    return 2
  }

  if (!validator.isNumeric(datos.cc)) {
    return 3
  }

  if (!validator.isNumeric(datos.phone)) {
    return 4
  }

  if (!validator.isLength(datos.message, { min: 15 })) {
    return 5
  }

  return 0
}
