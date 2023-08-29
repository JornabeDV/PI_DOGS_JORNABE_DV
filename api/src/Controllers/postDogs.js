const {Dog} = require ("../db");

const postDogs = async (name, minHeigth, maxHeight, minWeight, maxWeight, life_span) => 
await Dog.create({name, minHeigth, maxHeight, minWeight, maxWeight, life_span}); // create es un método de sequelize, el cual crea dentro de nuestro modelo con estas características.

module.exports = postDogs;