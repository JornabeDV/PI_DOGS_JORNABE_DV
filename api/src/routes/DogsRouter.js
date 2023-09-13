//1.IMPORTACIÓN DE MÓDULOS Y CONTROLADORES.-
const {Router} = require ("express");//Se importa el módulo Router de Express.js para crear un nuevo enrutador.-
const DogsRouter = Router();//Se crea un enrutador llamado DogsRouter.-
//Se importan varios controladores (Handlers) que se encargan de manejar las solicitudes HTTP en diferentes rutas.-
const getAllDogsHandler = require("../Handlers/getAllDogsHandler");
const getDogsByIdHandler = require("../Handlers/getDogsByIdHandler");
const postDogsHandler = require("../Handlers/postDogsHandler");
const deleteDogsHandler = require("../Handlers/deleteDogsHandler");

//También se importa un middleware llamado postDogsValidate, que se utiliza para validar los datos enviados en una solicitud POST.-
const postDogsValidate = require("../Middlewares/postDogsValidate")

//2.DEFINICIÓN DE RUTAS.-
//Se definen varias rutas utilizando el enrutador DogsRouter.-

DogsRouter.get("/", getAllDogsHandler);//Esta ruta se maneja utilizando el controlador getAllDogsHandler y se utiliza para obtener una lista de todos los perros.-

DogsRouter.get("/:id", getDogsByIdHandler);//Esta es una ruta dinámica que acepta un parámetro de id. Se utiliza el controlador getDogsByIdHandler para obtener información sobre un perro específico mediante su ID.-

DogsRouter.post("/", postDogsValidate, postDogsHandler);//Esta ruta se maneja utilizando el middleware postDogsValidate para validar los datos de la solicitud POST. Luego, se utiliza el controlador.-

DogsRouter.delete("/:id", deleteDogsHandler);//Esta es otra ruta dinámica que acepta un parámetro de id. Se utiliza el controlador deleteDogsHandler para eliminar un perro específico de la base de datos.-

//3.EXPORTACIÓN DEL ENRUTADOR.-
//El enrutador DogsRouter se exporta para que pueda ser utilizado en otros módulos de la aplicación principal. Esto permite que las rutas definidas en este enrutador estén disponibles para su uso en la aplicación principal.-
module.exports = DogsRouter;

//4.ANÁLISIS DEL CÓDIGO.-
//Este código define un enrutador de Express llamado DogsRouter que maneja diversas rutas relacionadas con perros en una aplicación web. Cada ruta está asociada a un controlador específico que se encarga de procesar las solicitudes HTTP entrantes y devolver las respuestas apropiadas. Además, se utiliza un middleware de validación (postDogsValidate) para validar los datos antes de agregar un nuevo perro a la base de datos.-