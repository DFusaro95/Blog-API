const bcrypt = require('bcrypt')

const hashPassword = (plainPassword) => {
  //plainPassword = contraseña en texto plano
  return bcrypt.hashSync(plainPassword, 10)
}

// console.log(hashPassword('root'))

const comparePassword = (plainPassword, hashedPassword) => {
  return bcrypt.compareSync(plainPassword, hashedPassword)
}

console.log(comparePassword('root1', '$2b$10$AlzXzOXSI25fSK/CIEXas.NHDQe.ORXullR.VAxZHb4GE2x5kCToy'))