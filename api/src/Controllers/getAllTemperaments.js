const { API_KEY } = process.env;
const axios = require("axios");
const {Temperament} = require('../db');

const getAllTemperaments = async () => {
    const response = await axios.get(
        `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
      );

    const allTemperaments = response.data
    .map((ele) => ele.temperament)
    .toString()
    .split(',')
    .map((ele) => ele.trim())
    .filter((ele) => ele.length > 1);

    const filtro = allTemperaments.filter((ele) => ele);
    const allTempsFiltered = [...new Set(filtro)];

    allTempsFiltered.forEach((ele) => {
      Temperament.findOrCreate({
        where: {
          name: ele
        }
      })
    })
    
    const allTemperamentsDataBase = await Temperament.findAll();
    return allTemperamentsDataBase;
      
};

module.exports = getAllTemperaments;