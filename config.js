process.env.NODE_ENV = process.env.NODE_ENV || 'dev'
process.env.PORT = process.env.PORT || 3000

if ( process.env.NODE_ENV === 'dev' ) {
  process.env.URL_DB = 'mongodb://127.0.0.1:27017/edmaratones'
} else {
  // enlace que provee el hosting de la base de datos:
  // process.env.URL_DB = 'mongodb://edteam:edteam2018@ds235418.mlab.com:35418/edmaratones'
}
