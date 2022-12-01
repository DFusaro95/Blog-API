//? email
//? password

const { findUserByEmail } = require('../users/users.controllers')
const { comparePassword } = require('../utils/crypto')

//? Esta funcion va a validar si los datos pertenecen o no a un usuario
const checkUserCredentials = async (email, password) => {
  try {
    const user = await findUserByEmail(email)
    const verifyPassword = comparePassword(password, user.password)
    if(verifyPassword){
      return user
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}

//! Aqui tengo el error, cuando ejecuto y realizo el then y catch con console.log no importa lo que pase, 
//! todo me da null, incluso haciendo copy paste de las credenciales de un usuario creado hace 3 segundos :v

module.exports = checkUserCredentials