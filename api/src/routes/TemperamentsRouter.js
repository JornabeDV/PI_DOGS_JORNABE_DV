//1.IMPORTACIÓN DE MÓDULOS Y CONTROLADORES.-
const {Router} = require('express');//Se importa el módulo Router de Express.js para crear un nuevo enrutador.-
const TemperamentsRouter = Router();//Se crea un enrutador llamado TemperamentsRouter.-
const getAllTemperamentsHandler = require('../Handlers/getAllTemperamentsHandler');//Se importa un controlador llamado getAllTemperamentsHandler, que se encarga de manejar las solicitudes HTTP relacionadas con la obtención de todos los temperamentos de los perros.-

//2.DEFINICIÓN DE RUTAS.-
//Se define una única ruta en este enrutador utilizando el método get(). La ruta es '/', lo que significa que esta ruta manejará las solicitudes HTTP GET en la raíz de la ruta del enrutador.-
TemperamentsRouter.get('/', getAllTemperamentsHandler);//Se asocia el controlador getAllTemperamentsHandler a la ruta definida. Esto significa que cuando se realice una solicitud GET a la ruta raíz ('/') de este enrutador, se ejecutará el controlador getAllTemperamentsHandler para manejar esa solicitud.-

//3.EXPORTACIÓN DE ENRUTADOR.-
//El enrutador TemperamentsRouter se exporta para que pueda ser utilizado en otros módulos de la aplicación principal. Esto permite que la ruta definida en este enrutador esté disponible para su uso en la aplicación principal.-
module.exports = TemperamentsRouter;

//4.ANÁLISIS DEL CÓDIGO.-
//Este código define un enrutador de Express llamado TemperamentsRouter que maneja una sola ruta ('/') para obtener todos los temperamentos de los perros. Cuando se accede a esta ruta, el controlador getAllTemperamentsHandler se encargará de procesar la solicitud y devolver la respuesta adecuada. Este enrutador puede ser utilizado en la aplicación principal para gestionar las solicitudes relacionadas con los temperamentos de los perros.-