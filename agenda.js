const users = require('./export.js')

const obtenerUsuario = async(name) => {
  const user = await users.find(u => u.name === name);
  if(name > users.length){
    throw new Error('El usuario no existe');
  } else if(!user.phone){
    throw new Error('El usuario no tiene teléfono');
  } else {
    console.log('el usuario es: ', user);
  }
}

obtenerUsuario('Marie')