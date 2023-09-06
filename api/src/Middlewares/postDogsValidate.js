//DEFINICIÓN DEL MIDDLEWARE.-
//Se define una función middleware llamada postDogsValidate que toma tres parámetros: req (la solicitud HTTP), res (la respuesta HTTP) y next (una función que permite pasar al siguiente middleware o controlador).-
const postDogsValidate = (req, res, next) => {
    //2.EXTRACCIÓN DEL CUERPO DE LA SOLICITUD("REQ.BODY").-
    //Se extraen los datos necesarios para crear un nuevo perro a partir del cuerpo (body) de la solicitud HTTP.-
    const {name, minHeight, maxHeight, minWeight, maxWeight, life_span, temperaments} = req.body;

    //3.VALIDACIÓN DE DATOS.-
    //Se verifica si alguno de los campos requeridos está ausente o es nulo en el cuerpo de la solicitud. Si falta algún campo, se considera una solicitud incorrecta.
    if(!name || !minHeight || !maxHeight || !minWeight || !maxWeight || !life_span || !temperaments)
       return res.status(400).send('Todos los campos son obligatorios'); //En caso de que falte algún campo, se responde con un estado HTTP 400 (solicitud incorrecta) y un mensaje indicando que todos los campos son obligatorios.-

    //4.LLAMADA A LA FUNCIÓN "NEXT()".-
    //Si todos los campos requeridos están presentes en la solicitud y no hay problemas de validación, se llama a la función next(). Esto permite que la solicitud continúe hacia el siguiente middleware o controlador en la cadena de middleware.-
    next();
};

//5.EXPORTACIÓN DEL MIDDLEWARE.-
//El middleware postDogsValidate se exporta para que pueda ser utilizado en otros módulos, normalmente en el enrutador de Express que maneja las rutas relacionadas con la creación de perros.
module.exports = postDogsValidate;

//6.ANÁLISIS DEL CÓDIGO.-
//Este middleware postDogsValidate se utiliza para asegurarse de que todos los campos necesarios para crear un nuevo perro estén presentes en la solicitud antes de que se procese la solicitud principal. Si falta alguno de los campos, se responde con un estado HTTP 400 y un mensaje de error. Si todos los campos están presentes, se permite que la solicitud continúe al siguiente middleware o controlador en la cadena de middleware.-