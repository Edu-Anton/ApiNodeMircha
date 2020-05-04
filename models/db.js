const mongoose = require('mongoose');
const config = require('../config');

// Otra forma de configurar
// mongoose.set('useCreateIndex', true)

class Database {
  constructor(){
    this.connect()
  }
  connect(){
    mongoose.connect(process.env.URL_DB, {useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true})
      .then(() => console.log(`Conexión exitosa a MongoDB: ${process.env.URL_DB}`))
      .catch(err => console.log(`Error de conexión al servidor de BD: ${err.message}`))
  }
}

module.exports = new Database()