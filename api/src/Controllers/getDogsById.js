//1.IMPORTS Y CONFIGURACIÓN.-
const axios = require ("axios"); // Se importa la librería axios para hacer solicitudes HTTP.-
const {API_KEY} = process.env; // Se obtiene la clave de acceso a la API del entorno.-
const {Dog} = require("../db"); // Se importa el modelo DOG, que es el modelo Sequelize relacionado con los perros en la base de datos.-
const {getDogsMap} = require ("./getAllDogs.js"); // Se importa la función getDogsMap desde el módulo getAllDogs.js, lo que indica que esta función se utiliza para formatear los datos del perro.-
const URL = "https://api.thedogapi.com/v1/breeds"; //Define una constante llamada URL que almacena la dirección URL base de una API de DOGS.-
//2.DEFINICIÓN DE LA FUNCIÓN.-
//Se define una función asincrónica llamada getDogsById que acepta dos parámetros: id (el ID del perro que se desea obtener) y source (la fuente desde la que se obtendrán los datos: "api" o "db").-
const getDogsById = async (id, source) => {
    //3.OBTENCIÓN DATOS DE DOG.-
    const dog = 
    source === "api" //SOURCE = FUENTE
    ? (await axios.get(`${URL}/${id}?api_key=${API_KEY}`)).data //Si la fuente es "api", se realiza una solicitud GET a la API de perros utilizando el ID del perro y la clave de acceso. Luego se extraen los datos de perro desde el objeto data de la respuesta.-
    : await Dog.findByPk(id) // Si la fuente no es "api" (lo que sugiere que se buscará en la base de datos local), se utiliza el método findByPk del modelo DOG de Sequelize para encontrar el perro por su Primary Key (PK), que en este caso es el ID.
    
    //4.FORMATEO DE LOS DATOS DEL PERRO Y RETORNO.-
    //Se llama a la función getDogsMap pasando el objeto de perro obtenido (ya sea desde la API o desde la base de datos). Esta función formatea los datos del perro y devuelve un array con los detalles del perro en un formato deseado.
    return getDogsMap([dog]);
};

//5.EXPORTACIÓN DE LA FUNCIÓN.-
//La función getDogsById se exporta para que pueda ser utilizada en otros módulos.
module.exports = getDogsById

//6.ANÁLISIS DEL CÓDIGO.-
// A.Este código define una función que obtiene detalles de un perro específico por su ID, ya sea desde una API externa o desde la base de datos local. La función formatea los datos del perro utilizando la función getDogsMap y devuelve los detalles en un formato específico.
// B.Este código está relacionado con la obtención de información detallada de un DOG específico a través de su identificador (ID), ya sea desde una API externa o desde la base de datos local utilizando Sequelize.