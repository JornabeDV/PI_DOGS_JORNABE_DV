//1.IMPORTACIÓN DE CONTROLADOR.-
const getDogsById = require ("../Controllers/getDogsById"); //Se importa la función de controlador getDogsById desde el archivo getDogsById.js. Esta función está diseñada para obtener detalles de un perro en función de su ID.-

//2.DEFINICIÓN DE LA FUNCIÓN.-
//Se define una función llamada getDogsByIdHandler que manejará la solicitud para obtener información de un perro por su ID. Esta función toma dos parámetros: req (la solicitud HTTP) y res (la respuesta HTTP).-
const getDogsByIdHandler = async (req, res) => {
    //3.EXTRACCIÓN DEL ID DE LA SOLICITUD.-
    const {id} = req.params; //Se extrae el valor del parámetro id de los parámetros de la URL. Este es el ID del perro que se desea obtener.-
    //4.DETERMINACIÓN DE LA FUENTE DE DATOS ("SOURCE").-
    const source = isNaN(id) ? "bdd" : "api"; //Se verifica si el id es un número o no utilizando la función isNaN(). Si id no es un número (por ejemplo, si es una cadena de texto), se asume que el perro se buscará en la base de datos local (fuente "bdd"). Si id es un número, se asume que se buscará en una API externa (fuente "api").-
    try {
        //5.OBTENCIÓN DE DETALLES DEL PERRO.-
        const dog = await getDogsById(id, source);//Se llama a la función de controlador getDogsById pasando el id del perro y la fuente (source) como parámetros. Esta función se encarga de obtener los detalles del perro desde la base de datos local o desde una API externa, dependiendo de la fuente especificada.-
        res.status(200).json(dog);//Si la obtención de los detalles del perro tiene éxito, se devuelve una respuesta HTTP con un estado 200 (éxito) y los detalles del perro en formato JSON.-
    } catch (error) {
        res.status(400).json({error:error.message});//Si ocurre un error durante la obtención de los detalles del perro, se devuelve una respuesta HTTP con un estado 400 (solicitud incorrecta) y un mensaje de error en formato JSON.
    }
};

//6.EXPORTACIÓN DE LA FUNCIÓN.-
//La función getDogsByIdHandler se exporta para que pueda ser utilizada en otros módulos, probablemente en el contexto de un enrutador de Express u otra aplicación web.-
module.exports = getDogsByIdHandler;

//7.ANÁLISIS DEL CÓDIGO.-
//Este código define una función que maneja una solicitud HTTP para obtener detalles de un perro por su ID, y determina si se buscará en la base de datos local o en una API externa según el tipo de ID proporcionado. Luego, devuelve una respuesta HTTP apropiada con los detalles del perro o un mensaje de error en caso de que ocurra un error.-