const postDogs = require ("../Controllers/postDogs")

const postDogsHandler = async (req, res) => {
    const {name, minHeight, maxHeight, minWeight, maxWeight, life_span} = req.body;
    try {
        const newDog = await postDogs(name, minHeight, maxHeight, minWeight, maxWeight, life_span);
        res.status(201).json(newDog);    
    } catch (error) {
        res.status(400).json({error: error.message})        
    }
};

module.exports = postDogsHandler;