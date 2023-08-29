const axios = require('axios');
const {getDogsMap} = require ("./getAllDogs.js");
const {API_KEY} = process.env;
const {Dog} = require ("../db.js");
const {Op} = require ("sequelize");
const URL = "https://api.thedogapi.com/v1/breeds";

// Buscamos en base de datos

const getDogsByName = async (name) => { 
    const lowerCase = name.toLowerCase(); // No discriminamos Mayus o Minus.
    const databaseDogs = await Dog.findOne({
        where: {
            name: {
                [Op.iLike]: `%${lowerCase}%` // Sacado de la documentación de Sequelize.
            }
        }
    })

    //Buscamos en la API

    const apiDogsRaw = ( await axios.get(`${URL}/?api_key=${API_KEY}`)).data // Petición a la API.
    const apiDogs = getDogsMap(apiDogsRaw); // Limpiamos el array.
    const filteredApi = apiDogs.filter((dog) => dog.name.toLowerCase().includes(lowerCase));

    if (databaseDogs || filteredApi.length > 0) {
        return [...filteredApi, databaseDogs];
    } else {
        throw new Error("No se encontraron perros con el nombre especificado.");
    }
};

module.exports = getDogsByName;
