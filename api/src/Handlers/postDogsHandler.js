const postDogs = require ("../Controllers/postDogs")
const {Temperaments} = require('../db');

const postDogsHandler = async (req, res) => {
    const {name, minHeight, maxHeight, minWeight, maxWeight, life_span, temperaments} = req.body;
    try {
        const newDog = await postDogs(name, minHeight, maxHeight, minWeight, maxWeight, life_span);// el postDogs(...) es una promesa que el await espera que se resuelva.-
        const temperamentsDb = await Temperaments.findAll({
            where: {
                name: temperaments,
            }
        });
        newDog.addTemperaments(temperamentsDb);
        res.status(201).json(newDog);    
    } catch (error) {
        res.status(400).json({error: error.message})        
    }
};
 
module.exports = postDogsHandler;