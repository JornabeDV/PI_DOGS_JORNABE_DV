//1.IMPORTACIÓN DE MÓDULOS Y ENRUTADORES.-
const {Router} = require('express');//Se importa el módulo Router de Express.js para crear un nuevo enrutador.-
const DogsRouter = require("./DogsRouter")//Se importa el enrutador específico que gestiona la ruta relacionada con perros.- 
const TemperamentsRouter = require('./TemperamentsRouter')//Se importa el enrutador específico que gestiona la ruta relacionada con temperamentos.- 

//2.CREACIÓN DEL ENRUTADOR PRINCIPAL.-
//Se crea un nuevo enrutador principal llamado router utilizando el constructor Router() de Express.js. Este enrutador se utilizará para configurar las rutas principales de la aplicación.-
const router = Router();

//3.CONFIGURACIÓN DE LOS ENRUTADORES ESPECÍFICOS.-
//Se configuran los enrutadores específicos dentro del enrutador principal.-
router.use("/dogs",DogsRouter)//Esto indica que todas las rutas definidas en el enrutador DogsRouter estarán precedidas por /dogs en la URL. Por ejemplo, si hay una ruta /getAllDogs en DogsRouter, se accederá a ella como /dogs/getAllDogs.-
router.use("/temperaments",TemperamentsRouter)//Similar al caso anterior, las rutas definidas en el enrutador TemperamentsRouter estarán precedidas por /temperaments en la URL.-

//4.EXPORTACIÓN DEL ENRUTADOR PRINCIPAL.-
//El enrutador principal (router) se exporta para que pueda ser utilizado en la aplicación principal. Esto permite que las rutas definidas en este enrutador principal estén disponibles para su uso en la aplicación y que todas las rutas definidas en los enrutadores específicos estén agrupadas bajo las rutas /dogs y /temperaments, respectivamente.-
module.exports = router;

//5.ANÁLISIS DE CÓDIGO.-
//Este código crea un enrutador principal que configura y agrupa otros enrutadores específicos relacionados con perros y temperamentos. Al hacerlo, se organiza la estructura de rutas de la aplicación y se facilita su manejo y mantenimiento. Las rutas relacionadas con perros estarán bajo /dogs, y las rutas relacionadas con temperamentos estarán bajo /temperaments.-
