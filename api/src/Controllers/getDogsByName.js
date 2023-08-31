//1.IMPORTS Y CONFIGURACIÓN.-
const axios = require('axios'); // Se importa la librería axios para hacer solicitudes HTTP.-
const {API_KEY} = process.env; // Se obtiene la clave de acceso a la API del entorno.-
const {Dog, Temperaments} = require ("../db.js"); // Se importa el modelo DOG y TEMPERAMENTS, que es el modelo Sequelize relacionado con los perros en la base de datos.-
const {Op} = require ("sequelize"); // Se importa el operador Op de Sequelize para realizar consultas avanzadas.-
const {getDogsMap} = require ("../Controllers/getAllDogs.js"); // Se importa la función getDogsMap desde el módulo getAllDogs.js, lo que indica que esta función se utiliza para formatear los datos del perro.-
const URL = "https://api.thedogapi.com/v1/breeds"; //Define una constante llamada URL que almacena la dirección URL base de una API de DOGS.-

//2.DEFINICIÓN DE LA FUNCIÓN.-
// Se define una función asincrónica llamada getDogsByName que acepta un parámetro name (el nombre del perro que se desea buscar).-
const getDogsByName = async (name) => { 
    //3.BÚSQUEDA EN LA BASE DE DATOS.-
    const lowerCase = name.toLowerCase(); // Se convierte el nombre ingresado a minúsculas para que la búsqueda no sea sensible a mayúsculas o minúsculas.-
    const databaseDogs = await Dog.findAll({ // Se utiliza el método findAll del modelo Dog de Sequelize para buscar el listado completo de perros en la base de datos.-
    //Se busca un perro cuyo nombre contenga la cadena en minúsculas almacenada en lowerCase. Para lograr esto, se utiliza el operador [Op.iLike], que es una operación de comparación que no distingue entre mayúsculas y minúsculas. El % en ambos lados de la cadena lowerCase indica que puede haber otros caracteres antes o después de la cadena buscada.-
        where: { //El objeto pasado como argumento a findAll() tiene una propiedad where que especifica las condiciones de búsqueda.-
            name: { // name = nombre del atributo.-
                [Op.iLike]: `%${lowerCase}%`
            }
        },
        include: [{
            model: Temperaments,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        }],
    })


    //4.BÚSQUEDA DE LA API Y FILTRADO.-
    const apiDogsRaw = ( await axios.get(`${URL}/?api_key=${API_KEY}`)).data; //Se realiza una solicitud GET a la API de perros utilizando la clave de acceso para obtener información sobre todas las razas de perros.-
    const apiDogs = getDogsMap(apiDogsRaw); // Se utiliza la función getDogsMap para formatear(LIMPIAR) los datos de la API.-
    const filteredApi = apiDogs.filter((dog) => dog.name.toLowerCase().includes(lowerCase)); //Se filtran los datos de la API para incluir solo aquellos perros cuyo nombre contenga la cadena especificada en minúsculas.-

    //5.RETORNO DE RESULTADOS.-
    if (databaseDogs || filteredApi.length > 0) { // Se verifica si se encontraron resultados en la base de datos o en la API. Si es así, se combinan los resultados de ambas fuentes y se devuelve el resultado.-
        return [...filteredApi, ...databaseDogs]; // El spread operator desarma los arrays individuales y junta todos los elementos sueltos en un mismo array.-
        // Si pongo el spread operator estoy haciendo referencia a los elementos del array, no a la array propiamente dicho.-
    } else { // Si no se encontraron resultados en ninguna de las fuentes, se lanza un error indicando que no se encontraron perros con el nombre especificado.-
        throw new Error("No se encontraron perros con el nombre especificado.");
    }
};

//6.EXPORTACIÓN DE LA FUNCIÓN.-
// La función getDogsByName se exporta para que pueda ser utilizada en otros módulos.-
module.exports = getDogsByName;

//7.ANÁLISIS DEL CÓDIGO.-
// Este código define una función que busca perros por nombre tanto en una base de datos local como en una API externa. Combina los resultados y los devuelve si se encuentran coincidencias, o lanza un error si no se encuentra ningún perro con el nombre especificado.-