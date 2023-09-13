//1.IMPORTACIÓN DE CONTROLADORES.-
const getDogsByName = require ("../Controllers/getDogsByName");//Este controlador se utiliza para obtener información de perros filtrada por nombre.-
const {getAllDogs} = require ("../Controllers/getAllDogs");//Este controlador se utiliza para obtener todos los perros.-

//2.DEFINICIÓN DE LA FUNCIÓN.-
//Se define una función llamada getAllDogsHandler que manejará la solicitud para obtener información de perros. Esta función toma dos parámetros: req (la solicitud HTTP) y res (la respuesta HTTP).-
const getAllDogsHandler = async (req, res) => {

    //3.EXTRACCIÓN DEL PARÁMETRO "NAME" DE LA CONSULTA.-
    //Se extrae el valor del parámetro "name" de la consulta (query) de la URL. Esto se utiliza para determinar si se debe realizar una búsqueda filtrada por nombre.-
    const {name} = req.query;

    try {
        //4.OBTENCIÓN DE RESULTADOS SEGÚN EL NOMBRE.-
        //Si el parámetro name existe en la consulta (es decir, se proporcionó un nombre en la URL), la variable results se establecerá llamando a la función getDogsByName(name) que filtra los perros por nombre.-
        const results = name 
        ? await getDogsByName(name) 
        : await getAllDogs();//Si no se proporciona un nombre en la consulta, la variable results se establecerá llamando a la función getAllDogs() que obtiene todos los perros.-

        //5.RESPUESTAS DE LA SOLICITUD.-
        res.status(200).json(results);//Si la solicitud se procesa con éxito y se obtienen resultados, se devuelve una respuesta con un estado HTTP 200 (éxito) y los resultados en formato JSON.- 
    } catch (error) {
        res.status(400).json(error.message);//Si ocurre un error durante el procesamiento de la solicitud, se devuelve una respuesta con un estado HTTP 400 (solicitud incorrecta) y un mensaje de error en formato JSON.-
    }
};

//6.EXPORTACIÓN DE LA FUNCIÓN.-
//La función getAllDogsHandler se exporta para que pueda ser utilizada en otros módulos.-
module.exports = getAllDogsHandler;

//7.ANÁLISIS DEL CÓDIGO.-
//Este código define una función que maneja una solicitud HTTP para obtener información de perros, ya sea filtrada por nombre o sin ningún filtro. Dependiendo de la presencia del parámetro name, se llama a la función de controlador apropiada y se devuelve una respuesta HTTP con los resultados correspondientes.-