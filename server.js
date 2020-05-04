const c = console.log
const app = require('./app')
const db = require('./models/db')

app.listen(
  app.get('port'),
  () => c(`Iniciando Api Restful en el puerto ${app.get('port')}`)
)
c(
  '**********VARIABLES DE ENTORNO**********\n',
  process.env.NODE_ENV,
  '\n',
  process.env.URL_DB,
  '\n',
  process.env.PORT,
  '\n**********VARIABLES DE ENTORNO**********'
)