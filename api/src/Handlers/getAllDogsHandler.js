//1.IMPORTACIÓN DE CONTROLADORES.-
const getDogsByName = require ("../Controllers/getDogsByName"); //Este controlador se utiliza para obtener información de perros filtrada por nombre.-
const {getAllDogs} = require ("../Controllers/getAllDogs"); // Este controlador se utiliza para obtener todos los perros.-

//2.DEFINICIÓN DE LA FUNCIÓN.-
// Se define una función llamada getAllDogsHandler que manejará la solicitud para obtener información de perros. Esta función toma dos parámetros: req (la solicitud HTTP) y res (la respuesta HTTP).
const getAllDogsHandler = async (req, res) => {

    //3.EXTRACCIÓN DEL PARÁMETRO "NAME" DE LA CONSULTA.-
    // Se extrae el valor del parámetro "name" de la consulta (query) de la URL. Esto se utiliza para determinar si se debe realizar una búsqueda filtrada por nombre.
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
