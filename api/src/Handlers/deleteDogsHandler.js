const {Dog} = require('../db');

const deleteDogsHandler = async (req, res) => {
    try {
        const {id} = req.params;
        await Dog.destroy({where: {id}});
        return res.status(200).send('Perro eliminado con exito.');
    } catch (error) {
        return res.status(400).send('No existen perros con ese ID en la base de datos.')
    }
};


module.exports = deleteDogsHandler;