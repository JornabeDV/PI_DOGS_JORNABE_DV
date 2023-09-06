//1.IMPORTACIÓN DE MÓDULOS Y ARCHIVOS.-
//Se importan varios módulos y archivos necesarios para configurar el servidor de Express.
const express = require('express'); //El módulo principal de Express que se utiliza para crear el servidor.-
const cookieParser = require('cookie-parser');//Middleware para manejar cookies en las solicitudes y respuestas.-
const bodyParser = require('body-parser');//Middleware para analizar el cuerpo de las solicitudes en formato JSON y URL codificado.-
const morgan = require('morgan'); //Middleware de registro (logging) que registra detalles de las solicitudes HTTP en la consola.-
const routes = require('./routes/index.js');//El archivo que contiene las rutas y controladores de la API.-
const cors = require ("cors");//Middleware para manejar las políticas de Same-Origin Policy y permitir solicitudes desde diferentes orígenes.-
require('./db.js');//Se utiliza para cargar el contenido del archivo db.js, que contiene la configuración y la inicialización de la base de datos utilizada por esta aplicación.-

//2.CREACIÓN DEL SERVIDOR DE EXPRESS.-
//Se crea una instancia de un servidor Express y se le asigna el nombre "API". Este nombre es útil para identificar el servidor en el código.-
const server = express();
server.name = 'API';

//3.CONFIGURACIÓN DE MIDDLEWARE.-
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));// Se configura para analizar el cuerpo de las solicitudes en formato URL codificado,se establece un límite de tamaño de 50MB.
server.use(bodyParser.json({ limit: '50mb' }));// Se configura para analizar el cuerpo de las solicitudes en formato URL JSON,se establece un límite de tamaño de 50MB.-
server.use(cookieParser());//Se utiliza para analizar las cookies en las solicitudes y hacerlas accesibles en el objeto req.cookies.-
server.use(morgan('dev'));//Se utiliza para registrar detalles de las solicitudes HTTP en la consola en el formato "dev".-
server.use(cors()); //Se configura para manejar las políticas de Same-Origin Policy y permitir solicitudes desde diferentes orígenes. Se definen encabezados para controlar el acceso permitido.-

//4.CONFIGURACION DE HEADERS CORS.-
// Se configuran las cabeceras CORS para permitir el acceso desde diferentes orígenes. Esto permite que el servidor sea accesible desde otros dominios o direcciones IP.-
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//5.ENRUTAMIENTO.-
//Se montan las rutas definidas en el archivo routes/index.js en la raíz del servidor. Esto significa que todas las rutas definidas en ese archivo estarán disponibles bajo la raíz del servidor (por ejemplo, /api/ruta).-
server.use('/', routes);

//6.MIDDLEWARE DE CAPTURA DE ERRORES.-
//Se define un middleware para manejar errores. Si ocurre un error en alguna parte de la aplicación, este middleware captura el error y devuelve una respuesta HTTP con el estado y el mensaje de error adecuados.-
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

//7.EXPORTACIÓN DEL SERVIDOR.-
//El servidor de Express se exporta para que pueda ser utilizado en otros módulos de la aplicación.-
module.exports = server;

//8.ANÁLISIS DE CÓDIGO.-
//Este módulo tiene la responsabilidad de crear el servidor.-
//También tiene la responsabilidad de establecer los MiddleWare(son funciones que se encargan de recibir la request, hacer algo con ella y luego entregarla a su EndPoint).-
//Este código configura un servidor de Express para una API web, establece varios middleware para manejar solicitudes, cookies, registro y políticas CORS, monta las rutas de la API y proporciona un manejo de errores centralizado. Es una estructura típica para una aplicación web basada en Express.-