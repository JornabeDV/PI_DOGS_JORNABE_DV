//1.IMPORTS Y CONFIGURACIÓN.-
const axios = require('axios') //Se importa la librería axios para hacer solicitudes HTTP.-
const URL = "https://api.thedogapi.com/v1/breeds"; //Se define la URL base de la API de perros.-
const {API_KEY} = process.env; //La clave de acceso a la API se obtiene del entorno.-
const {Dog} = require ("../db"); // Se importa el modelo Dog, que es el modelo Sequelize relacionado con los DOGS en la base de datos.-
const {Temperaments} = require ("../db"); //Se importa el modelo Temperaments, que es el modelo Sequelize relacionado con los DOGS en la base de datos.-

//2.DEFINICIÓN DE LA FUNCIÓN.-
//Esta función toma un array de objetos de DOGS y lo mapea a un nuevo array donde cada objeto se transforma según las instrucciones dentro de la función de mapeo.-
const getDogsMap = (array) => //Return implícito.- //Esto es un filtro.-
    //3.MAPEO DE DATOS DE DOGS.- 
    //Se mapea cada objeto de DOGS en el array, extrayendo y transformando varios campos, como la URL de la imagen, altura, peso, temperamento, esperanza de vida, etc.- 
    //Un nuevo objeto se crea con estos campos transformados.-
    array.map((elem) => {//Toma como argumento una función de transformación que se ejecutará en cada elemento del arreglo.-
        if (isNaN(elem.id)) {
            return {
                id: elem.id,
                name: elem.name,
                image: elem.image,
                minHeight: elem.minHeight,
                maxHeight: elem.maxHeight,
                minWeight: elem.minWeight,
                maxWeight: elem.maxWeight,
                temperament: elem.dataValues.temperaments.map((elem) => elem.name).join( //Lo transformo en un string.-
                    ", "
                  ),
                life_span: elem.life_span,
                created: true
                }
        } else { 
            return {
            id: elem.id,//Se asigna la propiedad id del nuevo objeto con el valor de la propiedad id del elemento elem del arreglo original.-
            name: elem.name,
            image: `https://cdn2.thedogapi.com/images/${elem.reference_image_id}.jpg`,
            minHeight: parseInt(elem.height.metric.slice(0, 2).trim()),//La función .slice() se utiliza para extraer una parte de una cadena de texto.El primer argumento 0 indica que comenzamos desde el primer carácter (índice 0), y el segundo argumento 2 indica que queremos extraer los dos primeros caracteres de la cadena.-
            maxHeight: parseInt(elem.height.metric.slice(4).trim()),
            minWeight: parseInt(elem.weight.metric.slice(0, 2).trim()),
            maxWeight: parseInt(elem.weight.metric.slice(4).trim()),
            temperament: elem.temperament,
            life_span: elem.life_span,
            created: false
            }
        }
    });   

//4.DEFINICIÓN DE LA FUNCIÓN.-
//Se define una función asincrónica llamada getAllDogs.-    
const getAllDogs = async () => {
    //5.OBTENCIÓN DE DOGS DE LA BASE DE DATOS Y DE LA API.-
    const databaseDogs = await Dog.findAll({ //Se obtienen todos los registros de perros almacenados en la base de datos utilizando el modelo Dog.-
    include: [{//Se utiliza en Sequelize para indicar que deseas incluir asociaciones entre modelos en una consulta. Esto se utiliza para cargar datos relacionados de otros modelos junto con el modelo principal en la consulta.
        model: Temperaments,
        attributes: ["name"],
        through: {//Esto se usa cuando se trabaja con una relación many-to-many entre dos modelos. A traves del modelo Temperamentes que me traiga la info del atributo name.-
            attributes: [],
        },
    }]});
    const apiDogsRaw = (await axios.get(`${URL}/?api_key=${API_KEY}`)).data // Se realiza una solicitud a la API de DOGS para obtener información sobre las razas utilizando la clave de acceso.-
    const apiDogs = getDogsMap(apiDogsRaw); // Se aplica la función getDogsMap para transformar los datos obtenidos de la API.-
    const bddDogs = getDogsMap(databaseDogs); // Se aplica la función getDogsMap para transformar los datos obtenidos de la API.-

    //6.COMBINACIÓN DE DATOS DE LA BASE DE DATOS Y DE LA API.-
    // Se combinan los datos de DOGS obtenidos de la base de datos con los datos de DOGS obtenidos de la API. La función devuelve un array que contiene todos los DOGS disponibles.-
    return [...apiDogs, ...bddDogs];// El spread operator desarma los arrays individuales y junta todos los elementos sueltos en un mismo array.-
    // Si pongo el spread operator estoy haciendo referencia a los elementos del array, no a la array propiamente dicho.-
};

//7.EXPORTACIÓN DE FUNCIONES.-
// Las funciones getAllDogs y getDogsMap se exportan para que puedan ser utilizadas en otros módulos.-
module.exports = {getAllDogs, getDogsMap};

//8.ANÁLISIS DEL CÓDIGO.-
// Este código combina información de DOGS obtenida de una base de datos y de una API externa, transforma los datos utilizando la función getDogsMap, y devuelve un array que contiene todos los perros disponibles en el sistema, ya sean de la base de datos o de la API.-