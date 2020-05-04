const express = require('express');
const app = express();
const config = require('./config');
const router = require('./router');

// Settings
app
  .set('port', process.env.PORT)
  .use(express.urlencoded({extended:false}))// ayuda a recibir todos los datos desde el formulario // false porque solo se enviará texto simple
  .use(express.json())
  .use('/api', router)

module.exports = app;