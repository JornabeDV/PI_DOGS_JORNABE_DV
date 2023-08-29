//1.IMPORTS Y CONFIGURACIÓN.-
const axios = require('axios') // Se importa la librería axios para hacer solicitudes HTTP.-
const URL = "https://api.thedogapi.com/v1/breeds"; // Se define la URL base de la API de perros.-
const {API_KEY} = process.env; // La clave de acceso a la API se obtiene del entorno.-
const {Dog} = require ("../db"); // Se importa el modelo Dog, que es el modelo Sequelize relacionado con los DOGS en la base de datos.-

//2.DEFINICIÓN DE LA FUNCIÓN.-
// Esta función toma un array de objetos de DOGS y lo mapea a un nuevo array donde cada objeto se transforma según las instrucciones dentro de la función de mapeo.
const getDogsMap = (array) => // Return implícito.-
    //3.MAPEO DE DATOS DE DOGS.- 
    // Se mapea cada objeto de DOGS en el array, extrayendo y transformando varios campos, como la URL de la imagen, altura, peso, temperamento, esperanza de vida, etc.- 
    // Un nuevo objeto se crea con estos campos transformados.-
    array.map((elem) => { 
        return {
            id: elem.id,
            name: elem.name,
            image: `https://cdn2.thedogapi.com/images/${elem.reference_image_id}.jpg`,
            height: elem.height.metric,
            weight: elem.weight.metric,
            temperament: elem.temperament,
            life_span: elem.life_span,
            created: false
        }
    });   

//4.DEFINICIÓN DE LA FUNCIÓN.-
//Se define una función asincrónica llamada getAllDogs.-    
const getAllDogs = async () => {
    //5.OBTENCIÓN DE DOGS DE LA BASE DE DATOS Y DE LA API.-
    const databaseDogs = await Dog.findAll(); //Se obtienen todos los registros de perros almacenados en la base de datos utilizando el modelo Dog.-
    const apiDogsRaw = (await axios.get(`${URL}/?api_key=${API_KEY}`)).data // Se realiza una solicitud a la API de DOGS para obtener información sobre las razas utilizando la clave de acceso.-
    const apiDogs = getDogsMap(apiDogsRaw); // Se aplica la función getDogsMap para transformar los datos obtenidos de la API.-

    //6.COMBINACIÓN DE DATOS DE LA BASE DE DATOS Y DE LA API.-
    // Se combinan los datos de DOGS obtenidos de la base de datos con los datos de DOGS obtenidos de la API. La función devuelve un array que contiene todos los DOGS disponibles.-
    return [...databaseDogs, ...apiDogs]
};

//7.EXPORTACIÓN DE FUNCIONES.-
// Las funciones getAllDogs y getDogsMap se exportan para que puedan ser utilizadas en otros módulos.-
module.exports = {getAllDogs, getDogsMap};

//8.ANÁLISIS DEL CÓDIGO.-
// Este código combina información de DOGS obtenida de una base de datos y de una API externa, transforma los datos utilizando la función getDogsMap, y devuelve un array que contiene todos los perros disponibles en el sistema, ya sean de la base de datos o de la API.