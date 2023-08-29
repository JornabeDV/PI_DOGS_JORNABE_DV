const axios = require('axios')
const URL = "https://api.thedogapi.com/v1/breeds";
const {API_KEY} = process.env;
const {Dog} = require ("../db");


const getDogsMap = (array) => // Return implícito
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

const getAllDogs = async () => {
    const databaseDogs = await Dog.findAll();
    const apiDogsRaw = (await axios.get(`${URL}/?api_key=${API_KEY}`)).data
    const apiDogs = getDogsMap(apiDogsRaw);

    return [...databaseDogs, ...apiDogs]
};

module.exports = {getAllDogs, getDogsMap};