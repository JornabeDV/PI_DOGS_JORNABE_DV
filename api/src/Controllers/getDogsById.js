const axios = require ("axios");
const {API_KEY} = process.env;
const {Dog} = require("../db");
const {getDogsMap} = require ("./getAllDogs.js");
const URL = "https://api.thedogapi.com/v1/breeds";

const getDogsById = async (id, source) => {
    const dog = 
    source === "api"
    ? (await axios.get(`${URL}/${id}?api_key=${API_KEY}`)).data
    : await Dog.findByPk(id) // Pk: Primary Key.
    return getDogsMap([dog]);
};

module.exports = getDogsById