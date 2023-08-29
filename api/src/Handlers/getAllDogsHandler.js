const getDogsByName = require ("../Controllers/getDogsByName");
const {getAllDogs} = require ("../Controllers/getAllDogs");

const getAllDogsHandler = async (req, res) => {
    const {name} = req.query;

    try {
        const results = 
        name // si hay name.
        ? await getDogsByName(name) // ejecuta esto
        : await getAllDogs(); // si no  pasame todos.

        res.status(200).json(results);
    } catch (error) {
        res.status(400).json(error.message);
    }
};


module.exports = getAllDogsHandler;
