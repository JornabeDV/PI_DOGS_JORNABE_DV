//1.IMPORTS Y CONFIGURACIÓN.-
const { API_KEY } = process.env; //API_KEY se obtiene del entorno para usarla como clave de acceso a la API externa.-
const axios = require("axios"); //Se importa la librería axios para hacer solicitudes HTTP.-
const {Temperaments} = require('../db'); //Se importa el modelo Temperament desde el módulo ../db, que es el modelo Sequelize relacionado con los temperamentos en la base de datos.-
const URL = "https://api.thedogapi.com/v1/breeds"; //Se define la URL base de la API de perros.

//2.DEFINICIÓN DE LA FUNCIÓN.-
//Se define una función asincrónica llamada getAllTemperaments.-
const getAllTemperaments = async () => { 

    //3.OBTENCIÓN DE DATOS DESDE LA API.-
    //Se hace una solicitud GET a la API de DOGS para obtener información sobre las razas. La clave de acceso se pasa como un parámetro en la URL.-
    const response = await axios.get(`${URL}/?api_key=${API_KEY}`);
    
    //4.PROCESAMIENTO DE TEMPERAMENTS.-
    const allTemperaments = response.data//La propiedad data en un objeto de respuesta contiene los datos devueltos por la solicitud.-
    .map((ele) => ele.temperament) // Se mapea cada objeto de raza en el resultado de la API para obtener el campo "temperament".
    .toString() // Luego se convierte todo a una cadena de texto.-
    .split(',') // Se divide por comas.-
    .map((ele) => ele.trim()) // Se eliminan los espacios en blanco.-
    .filter((ele) => ele.length > 1); // Se filtran los temperamentos que tienen longitud mayor que 1.-

    //5.ELIMINACIÓN DE DUPLICADOS.-
      const allTempsFiltered = [...new Set(allTemperaments)]; // Se utilizan sets para eliminar duplicados y obtener un array de temperaments únicos.-

    //6.ALMACENAMIENTO EN LA BASE DE DATOS.-
    allTempsFiltered.forEach((ele) => { //Se itera a través de los temperaments únicos.-
      Temperaments.findOrCreate({ // Se intenta encontrar o crear cada uno de ellos en la base de datos utilizando el modelo Temperament.-
        where: {
          name: ele
        }
      })
    })
    
    //7.OBTENCIÓN DE TODOS LOS TEMPERAMENTOS DE LA BASE DE DATOS.-
    const allTemperamentsDataBase = await Temperaments.findAll(); //Se realiza una consulta a la base de datos para obtener todos los registros de temperamentos almacenados.-
    return allTemperamentsDataBase; //Se devuelve el resultado.-

};

//8.EXPORTACIÓN DE LA FUNCIÓN.-
module.exports = getAllTemperaments; //Se exporta para que pueda ser utilizada en otros módulos.-

//9.ANÁLISIS DEL CÓDIGO.-
//Este código Javascript está relacionado con la obtención y procesamiento de datos de temperamentos de razas de perros desde una API externa y su almacenamiento en una base de datos usando Sequelize, un ORM (Object-Relational Mapping) para Node.js.
//Realiza una solicitud a una API para obtener información sobre razas de perros, extrae los temperamentos de esas razas, los procesa, elimina duplicados y luego almacena estos temperamentos únicos en una base de datos utilizando Sequelize. Finalmente, devuelve una lista de todos los temperamentos almacenados en la base de datos.-